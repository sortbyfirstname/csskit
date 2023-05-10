import { z } from 'zod';
import { regex, remove, removeAll, splitByEmptyLines, splitInclusiveRegex, textAfter, textBefore, textBeforeLast } from './text';
import { namedColors } from './values/named-colors';

const hex = z.string().trim().toLowerCase().regex(regex.hex);

const hslDeclaration = z.string().trim().toLowerCase().startsWith('hsl(').endsWith(')');

const hslaDeclaration = z.string().trim().toLowerCase().startsWith('hsla(').endsWith(')');

const hue = z.coerce.number().min(0, { message: 'Hue must be greater than 0' }).max(360, { message: 'Hue must be less than 360' });

const percentage = z.coerce.number().min(0, { message: 'Percentage must be greater than 0%' }).max(100, { message: 'Percentage must be less than 100%' });

const alpha = z.coerce.number().min(0, { message: 'Alpha channel value must be greater than 0' }).max(1, { message: 'Alpha channel value must be less than 1' });

const hslValues = z.object({
	hue: hue,
	saturation: percentage,
	lightness: percentage
});

const hslaValues = hslValues.extend({
	alpha: alpha
});

const hsl = z
	.string()
	.pipe(hslDeclaration)
	.transform((val) => textAfter(val, 'hsl('))
	.transform((val) => textBefore(val, ')'))
	.transform((val) => (val.includes(',') ? val.split(',') : val.split(' ')))
	.pipe(z.array(z.string()).length(3, { message: 'HSL must contain 3 values' }))
	.transform((arr) => arr.map((v) => remove(v, '%')))
	.transform((arr) => ({ hue: arr[0], saturation: arr[1], lightness: arr[2] }))
	.pipe(hslValues)
	.transform((hsl) => `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`);

const hsla = z
	.string()
	.pipe(hslaDeclaration)
	.transform((val) => textAfter(val, 'hsla('))
	.transform((val) => textBefore(val, ')'))
	.transform((val) => (val.includes(',') ? val.split(',') : val.split(' ')))
	.pipe(z.array(z.string()).length(4, { message: 'HSLA must contain 4 values' }))
	.transform((arr) => arr.map((v) => remove(v, '%')))
	.transform((arr) => ({ hue: arr[0], saturation: arr[1], lightness: arr[2], alpha: arr[3] }))
	.pipe(hslaValues)
	.transform((hsla) => `hsla(${hsla.hue}, ${hsla.saturation}%, ${hsla.lightness}%, ${hsla.alpha})`);

const named = z
	.string()
	.trim()
	.toLowerCase()
	.refine((val) => namedColors.includes(val));

const rgbDeclaration = z.string().trim().toLowerCase().startsWith('rgb(').endsWith(')');

const rgbaDeclaration = z.string().trim().toLowerCase().startsWith('rgba(').endsWith(')');

const rgbChannel = z.coerce.number().min(0, { message: 'RGB channel value must be greater than 0' }).max(255, { message: 'RGB channel value must be less than 255' });

const rgbValues = z.object({
	red: rgbChannel,
	green: rgbChannel,
	blue: rgbChannel
});

const rgbaValues = rgbValues.extend({
	alpha: alpha
});

const rgb = z
	.string()
	.pipe(rgbDeclaration)
	.transform((val) => textAfter(val, 'rgb('))
	.transform((val) => textBefore(val, ')'))
	.transform((val) => (val.includes(',') ? val.split(',') : val.split(' ')))
	.pipe(z.array(z.string()).length(3, { message: 'RGB must contain 3 values' }))
	.transform((arr) => ({ red: arr[0], green: arr[1], blue: arr[2] }))
	.pipe(rgbValues)
	.transform((rgb) => `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`);

const rgba = z
	.string()
	.pipe(rgbaDeclaration)
	.transform((val) => textAfter(val, 'rgba('))
	.transform((val) => textBefore(val, ')'))
	.transform((val) => (val.includes(',') ? val.split(',') : val.split(' ')))
	.pipe(z.array(z.string()).length(4, { message: 'RGBA must contain 4 values' }))
	.transform((arr) => ({ red: arr[0], green: arr[1], blue: arr[2], alpha: arr[3] }))
	.pipe(rgbaValues)
	.transform((rgba) => `rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha})`);

export const color = z.union([hex, hsl, hsla, named, rgb, rgba]);

const pixel = z.custom<`${number}px`>((val) => regex.pixel.test(val as string)).transform((val) => ({ raw: val, value: parseFloat(val.replace('px', '')), unit: 'px' }));

type pixel = z.infer<typeof pixel>;

const point = z.custom<`${number}pt`>((val) => regex.point.test(val as string)).transform((val) => ({ raw: val, value: parseFloat(val.replace('pt', '')), unit: 'pt' }));

type point = z.infer<typeof point>;

export const size = z.union([pixel, point]);

const attributeObject = z.object({
	name: z.string(),
	value: z.union([z.string(), z.array(z.string())])
});

const attributeValue = z
	.string()
	.transform((val) => textBeforeLast(textAfter(val, ':'), ';').trim())
	.transform((val) => val.split(' '));

const attribute = z
	.string()
	.includes(':', { message: 'Attributes should contain a name and a value, separated by a colon (name:value)' })
	.endsWith(';', { message: 'Attributes should end with a semi-colon (;)' })
	.transform((raw) => removeAll(raw, comments.parse(raw)))
	.transform((val) => ({ name: textBefore(val, ':').trim(), value: attributeValue.parse(val) }))
	.pipe(attributeObject);

const rule = z.object({
	selector: z.string(),
	attributes: z.array(attribute)
});

const rules = z
	.string()
	.transform((raw) => removeAll(raw, comments.parse(raw)))
	.transform((raw) => splitByEmptyLines(raw))
	.transform((blocks) =>
		blocks
			.map((block) => ({
				selector: textBefore(block, '{'),
				attributes: splitInclusiveRegex(textBefore(textAfter(block, '{'), '}'), regex.semicolon, ';')
			}))
			.filter((obj) => obj.attributes.length > 0)
	)
	.pipe(z.array(rule));

const comments = z.string().transform((raw) => (raw.match(regex.comment) || []).map((v) => v.trim()));

const stylesheetContent = z.string().transform((val) => ({ rules: rules.parse(val), comments: comments.parse(val) }));

export const stylesheet = z.object({
	name: z.string().endsWith('.css', { message: 'Only CSS files are supported' }),
	content: stylesheetContent,
	raw: z.string()
});

import { ColorTranslator } from 'colortranslator';
import { color, size } from './parsers';
import type { Converted, Size, Stylesheet } from './types';
import { convertToRem } from './converters';
import { replaceMany } from './text';

export const getColors = (stylesheets: Stylesheet[]): Converted<string>[] =>
	stylesheets
		.flatMap((s) => s.content.rules.flatMap((r) => r.attributes.flatMap((a) => a.value)))
		.filter((att) => color.safeParse(att).success)
		.map((c) => ({ original: c, converted: ColorTranslator.toHSL(c) }))
		.filter((val, i, arr) => arr.findIndex((val2) => val2.converted === val.converted) === i)
		.sort((a, b) => (a.converted < b.converted ? -1 : 1));

// 1rem = 16px = 12pt
// 1px = 0.75pt
export const getSizes = (stylesheets: Stylesheet[], rem: number): Converted<Size>[] =>
	stylesheets
		.flatMap((s) => s.content.rules.flatMap((r) => r.attributes.flatMap((a) => a.value)))
		.filter((att) => size.safeParse(att).success)
		.map((attr) => size.parse(attr))
		.map(
			(s) =>
				({
					original: s,
					converted: s.unit == 'px' ? convertToRem(s, rem) : convertToRem(s, rem * 0.75)
				} as Converted<Size>)
		);

export const replaceSizes = (stylesheet: string, sizes: Converted<Size>[]) => {
	let find = sizes.map((size) => `${size.original.value}${size.original.unit}`);
	let replace = sizes.map((size) => `${size.converted.value}${size.converted.unit}`);

	return replaceMany(stylesheet, find, replace);
};

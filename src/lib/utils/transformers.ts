import { ColorTranslator } from 'colortranslator';
import { color } from './parsers';
import type { Stylesheet } from './types';

export const getColors = (stylesheets: Stylesheet[]) =>
	stylesheets
		.flatMap((s) => s.content.rules.flatMap((r) => r.attributes.flatMap((a) => a.value)))
		.filter((att) => color.safeParse(att).success)
		.map((c) => ({ original: c, converted: ColorTranslator.toHSL(c) }))
		.filter((val, i, arr) => arr.findIndex((val2) => val2.converted === val.converted) === i)
		.sort((a, b) => (a.converted < b.converted ? -1 : 1));

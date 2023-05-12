import postcss from 'postcss';
import cssnanoPreset from 'cssnano-preset-default';

export const nano = (input: string) =>
	postcss(
		cssnanoPreset()
			.plugins.filter((p) => typeof p[1] === 'undefined' || (typeof p[1] === 'object' && !p[1].exclude) || (typeof p[1] === 'boolean' && p[1] === true))
			.map((p) => p[0](p[1]))
	)
		.process(input, { from: undefined })
		.then((res) => res.css);

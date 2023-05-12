const plugin = require('tailwindcss/plugin');
const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			screens: {
				'3xl': '1900px'
			}
		}
	},
	plugins: [
		daisyui,
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.icon-csskit': {
					'mask-image': 'url(/csskit.svg)',
					'mask-repeat': 'no-repeat',
					'background-color': 'hsl(var(--p))'
				},
				'.icon-coco': {
					'mask-image': 'url(/coco.svg)',
					'mask-repeat': 'no-repeat',
					'background-color': 'hsl(var(--p))'
				},
                '.icon-nanonow': {
					'mask-image': 'url(/nanonow.svg)',
					'mask-repeat': 'no-repeat',
					'background-color': 'hsl(var(--p))'
				},
				'.icon-rainbow': {
					'mask-image': 'url(/rainbow.svg)',
					'mask-repeat': 'no-repeat',
					'background-color': 'hsl(var(--p))'
				},
				'.icon-remmy': {
					'mask-image': 'url(/remmy.svg)',
					'mask-repeat': 'no-repeat',
					'background-color': 'hsl(var(--p))'
				}
			});
		})
	]
};

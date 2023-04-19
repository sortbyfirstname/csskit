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
		plugin(function ({ addUtilities, matchUtilities, theme }) {
			addUtilities({
				'.mask-no-repeat': {
					'mask-repeat': 'no-repeat'
				}
			});
			matchUtilities(
				{
					icon: (value) => ({
						'mask-image': `url(./${value}.svg)`
					})
				},
				{ values: theme('icon') }
			);
		})
	]
};

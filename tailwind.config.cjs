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
	plugins: [daisyui]
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": {
					900: "#002F1C",
					800: "#003721",
					700: "#003F26",
					600: "#00472A",
					500: "#004F2F",
					400: "#337259",
					300: "#669582",
					200: "#99B9AC",
					100: "#B3CAC1",
					50: "#E6EDEA"
				},
				"secondary": {
					900: "#002F1C",
					800: "#003721",
					700: "#003F26",
					600: "#00472A",
					500: "#004F2F",
					400: "#337259",
					300: "#669582",
					200: "#99B9AC",
					100: "#B3CAC1",
					50: "#E6EDEA"
				},
			},
			fontFamily: {
				sans: ["DMSans"],
			},
		},
		fontSize: {
			link: ['14px', '16px'],
			footer: ['13px', '18px'],
			caption: ['12px', '14px'],
			captionLarge: ['14px', '16px'],
			button: ['16px', '24px'],
			buttonSmall: ['14px', '24px'],
			paragraph: ['14px', '17px'],
			paragraphLarge: ['15px', '22px'],
			subheading: ['19px', '22px'],
			"heading-1": ['36px', '32px'],
			"heading-2": ['30px', '25px'],
			"heading-3": ['24px', '22px'],
			"heading-4": ['20px', '18px'],
			"heading-5": ['18px', '18px'],
		},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#ff3f3f',
				secondary: '#fff2f2',
				"system-neutral": {
					800: "#191919",
					700: "#5d5d5d",
					600: "#3E3E3E",
					500: "#5D5D5D",
					400: "#8B8B8B",
					300: "#D7D5D5",
					200: "#EEEEEE",
					100: "#FCFCFC"
				},
				"system-blue": {
					400: "#086CD9",
					300: "#1D88FE",
					200: "#8FC3FF",
					100: "#EAF4FF"
				},
				"system-green": {
					400: "#11845B",
					300: "#05C168",
					200: "#7FDCA4",
					100: "#DEF2E6"
				},
				"system-red": {
					400: "#DC2B2B",
					300: "#FF5A65",
					200: "#FFBEC2",
					100: "#FFEFF0"
				},
				"system-orange": {
					400: "#D5691B",
					300: "#FF9E2C",
					200: "#FFD19B",
					100: "#FFF3E4"
				},
			},
			fontFamily: {
				sans: ["DMSans"],
			},
		},
		fontSize: {
			bodyLarge: ['24px', '1.583em'],
			bodyDefault: ['18px', '1.667x'],
			bodySmall: ['14px', '1.714px'],
			blockquote: ['24px', '1.667px'],
			"display-1": ['90px', '1.044em'],
			"display-2": ['62px', '1.161px'],
			"display-3": ['44px', '1.182px'],
			"display-4": ['28px', '1.429px'],
			"heading-1": ['54px', '1.222em'],
			"heading-2": ['38px', '1.361em'],
			"heading-3": ['24px', '1.417em'],
			"heading-4": ['22px', '1.333em'],
			"heading-5": ['18px', '1.333em'],
			"heading-6": ['16px', '1.375em'],
			"paragraph-1": ['16px', '1.125em'],
			"paragraph-2": ['18px', '1.111em'],
			"paragraph-3": ['20px', '1.1em'],
			"paragraph-4": ['24px', '1.083em'],
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '3rem',
				xl: '4rem',
				'2xl': '12rem',
			},
		},
	},
	plugins: [],
}

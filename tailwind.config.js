/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				main: {
					DEFAULT: "#8c1301",
					text: "#c7c4b7",
					blue: "#2a89c0",
				},
			},
			fontFamily:{
				roboto: ["Roboto-Regular"],
				robotoSemibold:  ["Roboto-SemiBold"],
				robotoBold:  ["Roboto-Bold"],
				robotoBlack:  ["Roboto-Black"],
				RobotoItalic:  ["Roboto-Italic"],
				robotoThin:  ["Roboto-Thin"],
				robotoLight:  ["Roboto-Light"]
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "540px",
			md: "768px",
			lg: "1080px",
			xl: "1536px",
		},
		extend: {
			colors: {
				primary: "#ff4800",
				secondary: {
					regular: "#ff8800",
					hover: "#ff9900",
				},
			},
		},
	},
	plugins: [],
};

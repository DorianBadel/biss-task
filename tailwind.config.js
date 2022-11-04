/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: false,
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1080px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: "#ff4800",
        secondary: {
          regular: "#ff8800",
          hover: "#ff9900"
        }
      }
    },
  },
  plugins: [],
}

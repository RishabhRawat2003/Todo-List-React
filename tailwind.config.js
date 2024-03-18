/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", //this is important for making thememode work.
  theme: {
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media',
  theme: {
    screens: {
        mobile: "300px",
        xxm: "424px",
        lg: "1024px",
      },
    extend: {},
  },
  plugins: [],
};

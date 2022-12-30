/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: ".58rem",
      },
      fontFamily: {
        CarterOne: ["Carter One", "cursive"],
      },
    },
  },
  plugins: [],
};

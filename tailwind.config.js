const { purple } = require('@mui/material/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainPurple: "#7C32DA",
        mainPink:"#FC2D85"
      },
    },
  },
  plugins: [],
};

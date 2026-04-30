/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainPurple: "#7C32DA",
        mainPink: "#FC2D85",
        ghostWhite: "#EDEFFB",
        lavender: "#E6E3F9",
        liberty: "#181B76",
        mediumBlue: "#301AC4",
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};

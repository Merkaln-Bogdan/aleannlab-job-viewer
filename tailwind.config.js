/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      lightgray: "#878d9d",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bubblegum: "#ff77e9",
      bermuda: "#78dcca",
      dark: "#3A4562",
    },
    screens: {
      xs: { min: "455px", max: "648px" },
      lg: "1024px",
    },
    extend: {},
  },
  plugins: [],
};

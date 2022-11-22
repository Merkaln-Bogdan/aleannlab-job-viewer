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
      el_shadow:
        "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)",
      light: "rgba(58,69,98,0.12)",
      light_blue: "#e6e9f2",

      metal: "#565584",
      dark_yellow: "#988B49",
      yellow: "#FFCF00",
      light_yellow: "rgba(255, 207, 0, 0.15)",
      bg_dark: "#202336",
      b_light: "rgba(85, 105, 158, 0.3)",
      bg_light: "#EFF0F5",
      silver: "#ecebff",
      bubblegum: "#ff77e9",
      bermuda: "#78dcca",
      dark: "#3A4562",
    },
    screens: {
      sm: { min: "396px", max: "647px" },
      lg: "648px",
    },

    minWidth: {
      mw_title: "250",
    },

    extend: {
      boxShadow: {
        "el-sdw":
          "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)",
      },
      spacing: {
        mar_min_lg: "-90px",
        mar_min_mid: "-50px",
      },
    },
  },
  plugins: [],
};

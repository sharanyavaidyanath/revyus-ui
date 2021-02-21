const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        sidebar: "3px 0px 3px 0 rgba(0, 0, 0, 0.4)",
        selector: "0px 3px 3px 3px rgba(0, 0, 0, 0.4)"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

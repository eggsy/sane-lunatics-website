const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amatic: ["Amatic SC", "cursive", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", "cursive", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

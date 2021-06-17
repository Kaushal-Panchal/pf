module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      flipX: "-1",
    },
    extend: {
      fontFamily: {
        montSerrat: ["Montserrat", "sans-serif"],
        nunito: ["nunito", "serif"],
        alexBrush: ["Alex Brush", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

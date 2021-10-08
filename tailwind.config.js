module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2B4458",
        secondary: "#3585A8",
        accent: "#14E294",
        emptyField: "#D5D2DD"
      },
      fontFamily: {
        'syncopate': ['Syncopate', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

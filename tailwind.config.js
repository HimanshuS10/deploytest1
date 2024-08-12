module.exports = {
  content: [
    './Stories/Story1.html',
    './index.html',
    "./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'x-sm': '460px'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

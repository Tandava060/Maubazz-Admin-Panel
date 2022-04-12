module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1380px'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#FF7550',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        body: ['lalezar'],
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
}


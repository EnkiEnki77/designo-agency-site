/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        peach:'#E7816B',
        lightPeach:'#FFAD9B',
        darkGrey:'#333136',
        lightGrey:'#F1F3F5'
      }
    },

    fontFamily: {
      jost: ['Jost', 'sans-serif']
    }
  },
  plugins: [],
}

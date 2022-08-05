/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroPhone: "url('../public/assets/home/desktop/image-hero-phone.png')",
        bgPattern: "url('../public/assets/app-design/desktop/bg-pattern-intro-app.svg')",
        bgPattern2: "url('../public/assets/shared/desktop/bg-pattern-three-circles.svg')",
        bgPattern3: "url('../public/assets/about/mobile/bg-pattern-hero-about-mobile.svg')",
        bgPattern4: "url('../public/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg')",
      },

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

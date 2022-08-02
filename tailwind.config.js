/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('/public/images/slide1.jgp')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'Monsterrate':'Montserrat',
        'Vollkorn':'Vollkorn',
      },
      fontSize:
      {
          'heading':'1.6rem'
      },
      lineHeight:
      {
        'heading-height':'1.8rem'
      }
 
      }

    },

  plugins: [],
  }


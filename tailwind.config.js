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
        Monsterate:'Montserrat',
        Vollkorn: "'Vollkorn','serif'",
        Source_sans_pro:"'Source Sans Pro','sans-serif'"

        
        },
      fontSize:
      {
          'heading':'1.6rem',
          'service-heading':'1.65rem',
          'paragraph_size':'0.8rem'
      },
      lineHeight:
      {
        'heading-height':'1.8rem'
      },
      colors:
      {
        figure_heading:
        {
          600:"#333333",
        },
        services_paragraph:
        {
          300:'#5c5c5c'
        }
      }
 
      }

    },

  plugins: [],
  }


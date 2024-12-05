/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
        center: true,
        padding: '2rem',
        screens: {
          'xl': '1000px',
        //   '2xl': '1400px',
        },
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },

fontSize: {
        'h1': ['32px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'md-h1': ['48px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'lg-h1': ['60px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'xl-h1': ['60px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],

        'h2': ['28.8px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'md-h2': ['40px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'lg-h2': ['48px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'xl-h2': ['48px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],

        'h3': ['21.6px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'md-h3': ['32px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'lg-h3': ['36px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'xl-h3': ['36px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],

        'h4': ['14.4px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'md-h4': ['20px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'lg-h4': ['24px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'xl-h4': ['24px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],

        'h5': ['12px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'md-h5': ['18px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'lg-h5': ['20px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'xl-h5': ['20px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],

        'h6': ['10.8px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'md-h6': ['16px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'lg-h6': ['18px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],
        'xl-h6': ['18px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '700', }],

        'subheading': ['18px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '600', }],
        'md-subheading': ['18px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '600', }],
        'lg-subheading': ['28px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '600', }],
        'xl-subheading': ['18px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '600', }],

        'body': ['9.6px', { lineHeight: '170%', letterSpacing: '-0.01em', }],
        'md-body': ['14px', { lineHeight: '170%', letterSpacing: '-0.01em', }],
        'lg-body': ['16px', { lineHeight: '170%', letterSpacing: '-0.01em', }],
        'xl-body': ['16px', { lineHeight: '170%', letterSpacing: '-0.01em', }],

        'small-text': ['8.4px', { lineHeight: '150%', letterSpacing: '-0.01em', }],
        'md-small-text': ['12px', { lineHeight: '150%', letterSpacing: '-0.01em', }],
        'lg-small-text': ['14px', { lineHeight: '150%', letterSpacing: '-0.01em', }],
        'xl-small-text': ['14px', { lineHeight: '150%', letterSpacing: '-0.01em', }],

        'small-caption': ['8.4px', { lineHeight: '125%', letterSpacing: '-0.01em', }],
        'md-small-caption': ['12px', { lineHeight: '125%', letterSpacing: '-0.01em', }],
        'lg-small-caption': ['14px', { lineHeight: '125%', letterSpacing: '-0.01em', }],
        'xl-small-caption': ['14px', { lineHeight: '125%', letterSpacing: '-0.01em', }],

        'small-number': ['8.4px', { lineHeight: '170%', letterSpacing: '-0.01em', }],
        'md-small-number': ['12px', { lineHeight: '170%', letterSpacing: '-0.01em', }],
        'lg-small-number': ['14px', { lineHeight: '170%', letterSpacing: '-0.01em', }],
        'xl-small-number': ['14px', { lineHeight: '170%', letterSpacing: '-0.01em', }],

},


    colors: {
        gray: {
            50: '#F9F9F9',
            100: '#F3F3F3',
            200: '#C0C0C1',
            300: '#B5B5B5',
            400: '#646464',
            500: '#3C3C3C',
        },
        green: {
            500: '#38844F',
            600: '#066523',
            700: '#05511C',
            'darkGreen': '#081B0E',
        },
        red: {
            'errorRed': '#D62020',

        }

    },
    padding: {
        'topper': '10rem',
        'sm-topper': '10rem',
        'md-topper': '12rem',
        'lg-topper': '20rem',
        'xl-topper': '20rem',
    },
    margin: {
        'mtopper': '7rem',
        'sm-mtopper': '10rem',
        'md-mtopper': '10rem',
        'lg-mtopper': '10rem',
        'xl-mtopper': '10rem',
    },


    },
  },
  plugins: [],
}

// -----------------------------------------------------------------
/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: '2rem',
//       screens: {
//         'xl': '1000px',
//         // '2xl': '1400px',
//       },
//     },
//     extend: {
//       fontFamily: {
//         sans: ['Open Sans', 'sans-serif'],
//       },
//       fontSize: {
//         'h1': ['32px', '40px', '48px', '60px'],
//         'h2': ['24px', '32px', '40px', '48px'],
//         'h3': ['20px', '24px', '32px', '36px'],
//         'h4': ['18px', '20px', '24px', '28px'],
//         'h5': ['16px', '18px', '20px', '22px'],
//         'h6': ['14px', '16px', '18px', '20px'],
//         'subheading': ['16px', '18px', '20px', '22px'],
//         'body': ['14px', '16px', '18px', '20px'],
//         'small-text': ['12px', '14px', '16px', '18px'],
//         'small-caption': ['12px', '14px', '16px', '18px'],
//         'small-number': ['12px', '14px', '16px', '18px'],
//       },
//     },
//     colors: {
//       gray: {
//         50: '#F9F9F9',
//         100: '#F3F3F3',
//         200: '#C0C0C1',
//         300: '#B5B5B5',
//         400: '#646464',
//         500: '#3C3C3C',
//       },
//       green: {
//         500: '#38844F',
//         600: '#066523',
//         700: '#05511C',
//         'darkGreen': '#081B0E',
//       },
//       red: {
//         'errorRed': '#D62020',
//       }
//     },
//     padding: {
//       'topper': '20rem',
//     },
//     margin: {
//       'topperSm': '5rem',
//       'topperMd': '10rem',
//     },
//   },
//   screens: {
//     sm: '640px',
//     md: '768px',
//     lg: '1024px',
//     xl: '1280px',
//     '2xl': '1536px',
//   },
//   plugins: [],
// }

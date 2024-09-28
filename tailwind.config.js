/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'pink-100':'#CE9898',
        'pink-200':'#F8BFBF',
        'pink-300': '#EE8B8B',
        'black-100': '#423A3A',
        'white-100': '#FFFFFF',
        'pink-400': '#FFF4F4',
        'red-100': '#F96464',
      },
      gradientColorStops: theme => ({
        'custom-start': theme('colors.pink-300'),
        'custom-end': theme('colors.pink-200'),
        'custom-start-2': theme('colors.white-100'),
        'custom-end-2': theme('colors.pink-400'),
      }),
      boxShadow:{
        'button-shadow': '0 15px 20px rgba(198, 110, 110, 0.2476)',
      },
      fontSize:{
        64: '4rem',
        40: '2.5rem',
        16: '1rem',
        14: '0.875rem',
        12: '0.75rem',
      },
    },
  },
  plugins: [],
}


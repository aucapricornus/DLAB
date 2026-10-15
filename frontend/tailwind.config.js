/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/images/landinghero.png')",
        'loginRegister': "url('./src/assets/images/fondoLoginRegister.png')",
      },
      height: {
        '196': '49rem',
        '220': '55rem',
      },
      lineHeight: {
        '27': '6.75rem',
        '18': '4.5rem'
      },
      colors: {
        'white': '#ffffff',
        'ligth-blue': '#e2f2fe',
        'blue': '#008ff7',
        'bright-blue': '#2738f5',
        'dark-blue': '#140b34',
        'grey': '#353535',
        'black': '#000000',
        'dark-gray': '#232323',
        'purple': '#140B34',
        'ligth-gray': '#575253'
      },
      screens: {
        'screen2000': { 'raw': '(min-width: 2000px)' },
        'screen1100': { 'raw': '(max-width: 1100px)' },
        'screen900': { 'raw': '(max-width: 900px)' },
        'screen600': { 'raw': '(max-width: 600px)' },
        'screen300': { 'raw': '(max-width: 370px)' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

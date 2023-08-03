/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
   
    fontFamily: {
      displayFont: ['Kufam', 'sans-serif'],
      textFont: ['Source_Sans_3', 'sans-serif'],
      logo: ['Inter', 'sans-serif'],
    },
    colors: {
      'primaryColor': '#3B3A5D',
      'secondaryColor': '#FFBB50',
      'contentColor': '#8F8F8F',
      'linkColor': '#B16642',
      'white':'#FFF',
      'lightGrey':'#A4A4A4'

    },
    extend: {
      maxWidth: {
        'custom': '1400px',
      },
      
    },
  },
  plugins: [],
}


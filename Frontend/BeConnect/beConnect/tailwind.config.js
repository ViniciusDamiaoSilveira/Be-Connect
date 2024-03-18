const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/Mobile/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'black' : '#1F1F1F',
      'gray' : '#2C2C2C',
      'half-gray' : '#3A3A3A',
      'light-gray' : '#6E6E6E',
      'white' : '#FFFFFF',
      'yellow' : '#FFBF15',
      'dark-white' : '#D9D9D9'
    },
    extend: {
      spacing: {
        '1' : '0.15rem',
        '62' : '15.8rem',
        '70' : '16.5rem',
        '76' : '19rem',
        '85' : '21rem',
        '90' : '22rem',
        '100' : '25rem'
      },
      fontSize: {
        '3.5xl' : '2rem' 
      }
    }
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('current', '&.active')
    })
  ],
}
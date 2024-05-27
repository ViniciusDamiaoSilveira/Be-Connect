const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/Components/PC/**/*.{js,ts,jsx,tsx}",
    "./src/Components/PC/**/**/*.{js,ts,jsx,tsx}",

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
        '1.5' : '0.20rem',
        '30' : '7.3rem',
        '58' : '14.3rem',
        '62' : '15.8rem',
        '70' : '16.5rem',
        '76' : '19rem',
        '83' : '20.8rem',
        '85' : '21rem',
        '90' : '22rem',
        '92' : '22.5rem',
        '98' : '24.5rem',
        '100' : '25rem',
        '102' : '26rem',
        '105' : '30rem',
        '108' : '31rem',
        '110' : '35rem',
        '112' : '38rem',
        '114' : '39rem',
        '115' : '40rem'
      },
      fontSize: {
        '3.5xl' : '2rem',
        '4.5xl' : '2.5rem' 
      }
    }
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('current', '&.active')
    })
  ],
}
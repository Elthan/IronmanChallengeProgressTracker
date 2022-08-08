/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.{html,js}', 
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: '#fcfffe',
          50: '#e2f4ef',
          100: '#b9e3d7',
          200: '#8DD2BD',
          300: '#64bfa4',
          400: '#4bb092',
          500: '#3da281',
          600: '#379474',
          700: '#318466',
          800: '#2b7358',
          900: '#21573e'
        },
        complementary: {
          50: '#f3e3e8',
          100: '#e3b8c6',
          200: '#d28da2',
          300: '#c5637f',
          400: '#bf4467',
          500: '#b92950',
          600: '#aa274d',
          700: '#952348',
          800: '#811e42',
          900: '#5f1638'
        },
        analogous: {
          10: '#fcfffd',
          50: '#e3f4e6',
          100: '#bbe4c2',
          200: '#8dd29b',
          300: '#5dc174',
          400: '#37b35a',
          500: '#00a53e',
          600: '#009635',
          700: '#00852a',
          800: '#007420',
          900: '#00550c'
        },
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}

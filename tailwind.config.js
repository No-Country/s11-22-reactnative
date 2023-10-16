/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/screens/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#E5E0D8',
        secondary: '#CFD1C0',
      },
      textColor: {
        primary: '#114949',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat'],
    },
  },
  plugins: [],
}

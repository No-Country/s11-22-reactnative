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
        tertiary: '#E8E3DC',
      },
      textColor: {
        primary: '#114949',
      },
    },
    borderColor: {
      primary: '#CFD1C0',
    },
  },
  plugins: [],
}

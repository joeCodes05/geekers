/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#1a330e",
      accent: '#63b437'
    },
    extend: {
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}


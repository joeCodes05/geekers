/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#11111f",
        accent: '#68d2df'
      }
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}


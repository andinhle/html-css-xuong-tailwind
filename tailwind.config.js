/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "lexend":"Lexend, sans-serif"
      },
      maxWidth:{
        "container":"1380px"
      },
    },
  },
  plugins: [],
}
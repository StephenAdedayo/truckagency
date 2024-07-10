/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      primaryColors: "#2E3190",
      secondaryColors:"#BC1F2A"
    },
    },
   },
  plugins: [],
}
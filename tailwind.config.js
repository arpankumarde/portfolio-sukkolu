/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#011627',
        'selective-yellow': '#ffba08',
        'cyclamen': '#e86a92',
      },
      fontFamily: {
        'poppins': ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}


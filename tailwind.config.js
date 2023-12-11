/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'dark-blue':'#0B2F52',
      'light-blue':'#024295',
      'white':'#FFFFFF',
      'black':'#000000'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}


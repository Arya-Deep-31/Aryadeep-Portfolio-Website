/** @type {import('tailwindcss').Config} */

const{fontFamily} = require('tailwindcss/defaultTheme')
 
module.exports = {
  content: [

    // since using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sur: ['var(--font-sur)' , ...fontFamily.sans],
        
      },
      colors:{
        dark: "#0B0310",
        light: "#C9B9D3",
        primary: "#9B7CAB", 
        primaryDark: "#290E39", 
      }
    },
  },
  plugins: [],
}


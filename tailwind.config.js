/** @type {import('tailwindcss').Config} */

const{fontFamily} = require('tailwindcss/defaultTheme')
 
module.exports = {
  content: [

    // since using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      fontFamily: {
        sur: ['var(--font-sur)' , ...fontFamily.sans],
        
      },
      colors:{
        dark: "#120519",
        darker: "#09000E",
        light: "#C9B9D3",
        primary: "#9B7CAE", 
        primaryDark: "#290E39", 
      }
    },
  },
  plugins: [],
}


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
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  },
  plugins: [],
}


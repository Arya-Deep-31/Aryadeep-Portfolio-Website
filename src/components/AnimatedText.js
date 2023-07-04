import React from 'react'

const AnimatedText = ({text , className = " "}) => {
  return (
    <div className='w-full mx-auto flex items-center justify-center text-center overflow-hidden   sm:py-0 '>
      <h1 className={`inline-block w-full  text-dark font-semibold text-4xl flex items-center justify-center relative dark:text-primary  xl:text-4xl lg:text-center md:text-3xl sm:text-2xl  xs:text-2xl ${className} `} >
        {
          text.split(" ").map((word,index) => 
            <span key={word+'-'+index}>
              {word}&nbsp;
            </span>
          )
          
        }</h1>
      
    </div>
  )
}

export default AnimatedText

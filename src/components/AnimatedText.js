import React from 'react'

const AnimatedText = ({text , className = " "}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <h1 className={`inline-block w-full  text-dark font-semibold text-5xl flex items-center justify-center relative ${className} `} >
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

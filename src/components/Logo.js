import Link from 'next/link'
import React from 'react'
import{motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex-items-center justify-center'>
        <MotionLink href="/" className='w-14 h-14 bg-dark  border border-solid border-transparent dark:border-light text-light flex items-center justify-center rounded-full text-2xl font-bold'
        
        whileHover={{backgroundColor:["#290E39", "#422154"],
        transition : {duration : 1 , repeat : Infinity}
           

        }}

        >AG
        </MotionLink>
      
    </div>
  )
}

export default Logo

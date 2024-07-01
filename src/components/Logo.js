import Link from 'next/link'
import React from 'react'
import{motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex-items-center justify-center '>
        <MotionLink href="/" className='w-14 h-14 bg-dark gradient-background dark:bg-darker mt-1  border border-solid border-transparent dark:border-light text-light flex items-center justify-center rounded-full text-xl font-bold'
        
        whileHover={{backgroundColor:["#290E39", "#9B7CAB"],
        transition : {duration : 2 , repeat : Infinity}
           

        }}

        >AdG
        </MotionLink>
      
    </div>
  )
}

export default Logo

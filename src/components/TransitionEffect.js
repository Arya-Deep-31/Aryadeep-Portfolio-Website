import React from 'react'
import { motion } from "framer-motion";


const TransitionEffect = () => {
    return (
        <>
            <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-darker'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}>

            </motion.div>

            <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-dark/80'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay : 0.2 ,duration: 0.8, ease: "easeInOut" }}>

            </motion.div>

            <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-primaryDark/80'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{delay:0.4, duration: 0.8, ease: "easeInOut" }}>

            </motion.div>
        </>

    )
}

export default TransitionEffect

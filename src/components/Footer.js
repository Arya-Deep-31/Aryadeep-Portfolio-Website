import React from 'react'
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './Icons'
import { motion } from "framer-motion";



const Footer = () => {
    return (
        <>
            <footer className='bg-dark h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-5'>
                <div className='p-5'>
                    <ul>
                        <div className='text-light font-bold pb-4 ml-12'>
                            Aryadeep  Gogoi <span className='text-primary !text-medium'>is at </span>
                        </div>
                        <div className='flex gap-5 text-light  p-2'>

                            <motion.a href="https://www.linkedin.com/in/aryadeep-gogoi-696609236/" target={"_blank"} className='w-full mr-1'
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}>
                                <LinkedInIcon />
                            </motion.a>

                            <motion.a href="https://github.com/Arya-Deep-31" target={"_blank"} className='w-full' whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}>
                                <GithubIcon />
                            </motion.a>

                            <motion.a href="https://facebook.com/profile.php?id=100076109862434" target={"_blank"} className='w-full' whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}>
                                <FacebookIcon />

                            </motion.a>

                            <motion.a href="https://twitter.com/AryadeepGogoi" target={"_blank"} className='w-full' whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}>
                                <TwitterIcon />
                            </motion.a>

                            <motion.a href="https://www.instagram.com/arya__deep__31/" target={"_blank"} className='w-full' whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}>
                                <InstagramIcon />

                            </motion.a>





                        </div>

                    </ul>

                    <div className='text-light text-bold  mt-1 mr-'>
                        Contact <span className='text-light'> me at </span>
                        <a className='text-primary' href="https://mail.google.com/mail/u/0/#inbox">trish313131@gmail.com
                        </a> 
                    </div>

                </div>

                <div className='pt-6 text-light mr-20'>
                    <ul>
                        <div className='text-light font-bold pb-2 mr-10 grid '>
                            <a href='/about' className='text-primary text-md pb-2 '> About  </a>
                            <a href='/projects' className='text-primary text-md pb-2 '> Projects </a>
                            <a href='/contact' className='text-primary text-md pb-2 '> Conatct </a>

                        </div>
                    </ul>

                </div>

                <div className='p-4 text-light'>
                    <ul>
                        <div className='text-light font-bold pb-2 ml-2'>
                            Aryadeep  Gogoi <span className='text-primary !text-medium'> at </span>
                        </div>
                        <div className='text-light font-bold pb-4'>
                            <li className='text-primary text-md pb-2 '> Symphonic Verse </li>
                            <li className='text-primary text-md pb-2 '> Canvas Gallery </li>
                            <li className='text-primary text-md pb-2 '> Word Craft </li>

                        </div>
                    </ul>
                </div>
            </footer>

            <div className='flex-flex-col justify-center items-center text-center p-2 bg-darker text-light'>
                <h1>_ Aryadeep's Portfolio website _</h1>All rights reserved | 2023

            </div>
        </>
    )
}

export default Footer
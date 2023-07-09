import React from 'react'
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon , MoonIcon, SunIcon, } from './Icons'
import { motion } from "framer-motion";




const Footer = () => {




    return (
        <>

            <div className='w-full gradient-background  h-2'>

            </div>
            <footer className='bg-dark dark:bg-darker  h-1/2 w-full flex flex-row justify-around items-start p-5 sm:text-base  md:flex-col md:items-center justify-between sm:items-center justify-between '>
                <div className='p-4 '>
                    <div>
                        <div className='text-light font-bold pb-4 ml-12'>
                            Aryadeep  Gogoi <span className='text-primary !text-medium'>is at </span>
                        </div>
                        <div className='flex gap-5 text-light  p-2 sm:p-0'>

                            <motion.a href="https://www.linkedin.com/in/aryadeep-gogoi-696609236/" target={"_blank"} className='w-[80%] mr-1'
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

                    </div>

                    <div className='text-light text-bold  mt-1 sm:ml-2 sm:mt-4 sm:w-full'>
                        Mail <span className='text-light'> me at </span>
                        <motion.a whileHover={{ color: 'violet' }}
                            whileTap={{ scale: 0.9 }} className='text-primary' href="mailto:aryadeepgogoi31@gmail.com">aryadeepgogoi31@gmail.com
                        </motion.a>
                    </div>

                </div>

                <div className='pt-6 text-light -ml-10 lg:ml-0 md:-ml-8'>
                    <div>
                        <div className='text-light font-bold pb-2 flex flex-col items-center justify-center lg:-ml-8 sm:ml-8  '>
                            <motion.a whileHover={{ color: 'violet' }}
                                whileTap={{ scale: 0.9 }} href='/' className='text-primary  pb-2'> Home  </motion.a>
                            <motion.a whileHover={{ color: 'violet' }}
                                whileTap={{ scale: 0.9 }} href='/about' className='text-primary  pb-2'> About  </motion.a>
                            <motion.a whileHover={{ color: 'violet' }}
                                whileTap={{ scale: 0.9 }} href='/projects' className='text-primary  pb-2 '> Projects </motion.a>
                            <motion.a whileHover={{ color: 'violet' }}
                                whileTap={{ scale: 0.9 }} href='/contact' className='text-primary  pb-4 '> Contact </motion.a>

                        </div>
                    </div>

                </div>

                <div className='p-4 text-light'>
                    <div>
                        <div className='text-light font-bold pb-2'>
                            Aryadeep  Gogoi <span className='text-primary !text-medium'> at </span>
                        </div>
                        <motion.div className='text-light font-bold pb-4 grid'>
                            <motion.a whileHover={{ color: 'violet' }}
                                whileTap={{ scale: 0.9 }} href='/musicroom' className='text-primary  pb-2 sm:text-sm'> Symphonic Verse  </motion.a>
                            <motion.a whileHover={{ color: 'violet' }}
                                whileTap={{ scale: 0.9 }} href='/canvasgallery' className='text-primary  pb-2 sm:text-sm'> Canvas Gallery </motion.a>
                            <motion.a whileHover={{ color: 'violet' }}
                                whileTap={{ scale: 0.9 }} href='/wordcraft' className='text-primary  pb-2 sm:text-sm'> Word Craft </motion.a>


                        </motion.div>
                    </div>
                </div>
            </footer>

            <div className='w-full h-2 gradient-background'>

            </div>

            <div className='flex-flex-col justify-center items-center text-center  p-4  bg-darker text-light'>
                <h1>_ Aryadeep Portfolio website _</h1>All rights reserved | 2023

            </div>
        </>
    )
}

export default Footer

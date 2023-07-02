import React from 'react'
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './Icons'
import { motion } from "framer-motion";



const Footer = () => {
    return (
        <>
        <div className='w-full h-1 bg-primary/80'>

        </div>
            <footer className='bg-dark dark:bg-darker  h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-5'>
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

                            <motion.a  href="https://www.instagram.com/arya__deep__31/" target={"_blank"} className='w-full' whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}>
                                <InstagramIcon />

                            </motion.a>





                        </div>

                    </ul>

                    <div className='text-light text-bold  mt-1 mr-'>
                        Contact <span className='text-light'> me at </span>
                        <motion.a  whileHover={{ color: 'violet' }}
                                whileTap={{ scale: 0.9 }} className='text-primary' href="https://mail.google.com/mail/u/0/#inbox">trish313131@gmail.com
                        </motion.a> 
                    </div>

                </div>

                <div className='pt-6 text-light mr-20'>
                    <ul>
                        <div className='text-light font-bold pb-2 mr-10 grid '>
                            <motion.a   whileHover={{ color: 'violet' }}
                                whileTap={{ scale: 0.9 }} href='/about' className='text-primary text-md pb-2 '> About  </motion.a>
                            <motion.a   whileHover={{ color: 'violet' }}
                                whileTap={{ scale: 0.9 }} href='/projects' className='text-primary text-md pb-2 '> Projects </motion.a>
                            <motion.a   whileHover={{ color: 'violet' }}
                                whileTap={{ scale: 0.9 }} href='/contact' className='text-primary text-md pb-2 '> Contact </motion.a>

                        </div>
                    </ul>

                </div>

                <div className='p-4 text-light'>
                    <ul>
                        <div className='text-light font-bold pb-2 ml-2'>
                            Aryadeep  Gogoi <span className='text-primary !text-medium'> at </span>
                        </div>
                        <motion.div    className='text-light font-bold pb-4 grid'>
                        <motion.a whileHover={{ color: 'violet' }}
                                whileTap={{ scale: 0.9 }}   href='/musicroom' className='text-primary text-md pb-2 '> Symphonic Verse  </motion.a>
                            <motion.a   whileHover={{ color: 'violet' }}
                                whileTap={{ scale: 0.9 }}  href='/canvasgallery' className='text-primary text-md pb-2 '> Canvas Gallery </motion.a>
                            <motion.a   whileHover={{ color: 'violet' }}
                                whileTap={{ scale: 0.9 }}   href='/wordcraft' className='text-primary text-md pb-2 '> Word Craft </motion.a>
                            

                        </motion.div>
                    </ul>
                </div>
            </footer>

            <div className='w-full h-1 bg-dark/90 dark:bg-primary/80'>

        </div>

            <div className='flex-flex-col justify-center items-center text-center p-2 bg-darker text-light'>
                <h1>_ Aryadeep's Portfolio website _</h1>All rights reserved | 2023

            </div>
        </>
    )
}

export default Footer

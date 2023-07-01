import React from 'react'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { motion } from "framer-motion";
import { HtmlIcon , LinkedInIcon ,CssIcon ,ScssIcon, FigmaIcon, ReactIcon } from './Icons';



const Skills = () => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} className='pb-10 '>
            <Layout className=''>
                <AnimatedText text="Striving and Hustling" className='mb-2 ' />
                <AnimatedText text=" My Skills" className=' !text-3xl font-bold text-dark/70' />
            </Layout>

            <div className='grid grid-cols-4 gap-5 ml-16 mr-16'>
                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'> <HtmlIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                90%
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <CssIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                            90%
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <ScssIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                80%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <LinkedInIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                100%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <LinkedInIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                100%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <FigmaIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                90%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <ReactIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                80%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <LinkedInIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                100%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <LinkedInIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                100%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <LinkedInIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                100%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <LinkedInIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                100%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'> <LinkedInIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20   rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                100%
                            </p>
                        </div>
                    </div>
                </div>


                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <LinkedInIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                100%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <LinkedInIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                100%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <LinkedInIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                100%
                            </p>
                        </div>
                    </div>
                </div>


                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' rounded-full border-4 p-2 border-dark object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'> <LinkedInIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20   rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                100%
                            </p>
                        </div>
                    </div>
                </div>




            </div>

        </motion.div>
    )
}

export default Skills

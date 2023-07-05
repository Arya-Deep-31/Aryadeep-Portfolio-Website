import React from 'react'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { motion } from "framer-motion";
import Image from 'next/image';
import { HtmlIcon , LinkedInIcon ,CssIcon ,ScssIcon, FigmaIcon, ReactIcon, BootstrapIcon, VscodeIcon, PythonIcon, C2Icon, JavaIcon, GitIcon1, GitIcon2, IndesignIcon, AfterEffectsIcon, IllustratorIcon, TailwindCssIcon , NodejsIcon, CanvaIcon, LeetcodeIcon, DribbbleIcon, FramerMotionIcon, NextJsIcon, MongoIcon, JavasccriptIcon, MsExcelIcon, MsWordIcon, PowerpointIcon, SasscssIcon, CIcon, NextjsICon } from './Icons';



const Skills = () => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} className='pb-10 '>
            <Layout className=''>
                <AnimatedText text="Striving and Hustling" className='mb-2 mt-4' />
                <AnimatedText text=" My Skills" className=' !text-3xl font-bold text-dark/70 md:!text-2xl sm:!text-xl mb-8' />
            </Layout>

            <div className='grid grid-cols-4 gap-4 mb-10 sm:grid-cols-4 xs:grid-cols-3 sm:gap-5  '>




                <div className='group relative flex cursor-pointer '>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'> <HtmlIcon/> </motion.div>
                    <div className=' absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                90%
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <CssIcon/> </motion.div>
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
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <SasscssIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                90%
                            </p>
                        </div>
                    </div>
                </div>


                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <TailwindCssIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                80%
                            </p>
                        </div>
                    </div>
                </div>


                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <BootstrapIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                80%
                            </p>
                        </div>
                    </div>
                </div>
                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'>  <JavasccriptIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                80%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <ReactIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                90%
                            </p>
                        </div>
                    </div>
                </div>



                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'> <MongoIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20   rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                70%
                            </p>
                        </div>
                    </div>
                </div>



                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'> <NodejsIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20   rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                70%
                            </p>
                        </div>
                    </div>
                </div>



                

                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <GitIcon2 /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                80%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <NextjsICon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                90%
                            </p>
                        </div>
                    </div>
                </div>

                

                

                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <VscodeIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                90%
                            </p>
                        </div>
                    </div>
                </div>

              

               



                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'> <GitIcon1 /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20   rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                90%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <C2Icon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                90%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <JavaIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                80%
                            </p>
                        </div>
                    </div>
                </div>


                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <PythonIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                80%
                            </p>
                        </div>
                    </div>
                </div>
                


                


                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'> <CIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20   rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                90%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'> <CIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20   rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                90%
                            </p>
                        </div>
                    </div>
                </div>



                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'> <MsExcelIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20   rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                80%
                            </p>
                        </div>
                    </div>
                </div>


                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'> <MsWordIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20   rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                90%
                            </p>
                        </div>
                    </div>
                </div>


                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out'> <PowerpointIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20   rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                90%
                            </p>
                        </div>
                    </div>
                </div>


              


                <div className='group relative flex cursor-pointer'>
                    <motion.div className=' gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <FigmaIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                90%
                            </p>
                        </div>
                    </div>
                </div>



                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <DribbbleIcon/> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                80%
                            </p>
                        </div>
                    </div>
                </div>

                <div className='group relative flex cursor-pointer'>
                    <motion.div className='gradient-background rounded-full border-4 p-2 border-dark object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'> <AfterEffectsIcon /> </motion.div>
                    <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primaryDark  w-20 h-20  rounded-full z-0'>
                        <div className='flex items-center justify-center h-full'>
                            <p className='text-2xl font-bold text-light opacity-100'>
                                70%
                            </p>
                        </div>
                    </div>
                </div>





            </div>

        </motion.div>
    )
}

export default Skills

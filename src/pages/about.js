import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import aboutPic1 from "../../public/images/profile/aboutPic1.webp"
import aboutPic2 from "../../public/images/profile/aboutPic2.webp"
import Skills from '@/components/Skills'
import { motion } from "framer-motion";
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'





const about = () => {
    return (
        <>
            <Head>
                <title> Aryadeep Gogoi | About Page

                </title>
                <meta name=" description" content="about me"></meta>
            </Head>
            <TransitionEffect />

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>

                <main className='flex w-full flex-col items-center justify-center mb-20'>
                    <Layout className=''>

                        <AnimatedText text="Passion To Potential " className='mt-2 sm:mt-6' />
                        <AnimatedText text=" About Me" className=' !text-3xl  text-dark/70 md:!text-2xl sm:!text-xl ' />




                        <div className='grid  w-full grid-cols-9 gap-12 items-center justify-between p-4    lg:p-8 lg:grid-cols-3  md:p-12 md:grid-cols-3 md:mt-4 sm:p-16 sm:mt-0 sm:grid-cols-3'>



                            <div className='col-span-3 w-[80%] p-6 relative rounded-2xl border-2 ml-2 sm:p-2 lg:w-full dark:gradient-background border-solid border-dark/30 bg-light p-4 dark:bg-primaryDark dark:border-primary  justify-end'>
                                <Image src={aboutPic2} quality={80} alt="Aryadeep Gogoi" className="w-full h-full rounded-2xl " />
                            </div>

                            <div className='col-span-3 flex flex-col items-center justify-center mt-6'>

                                <p className='pb-6 flex'> Aryadeep Gogoi here, navigating the coding voyage while riding the waves of design and development. Welcome to my portfolio!

                                    I am a 3rd-year BTECH student at NIT Silchar , pursuing my passion for technology and honing my skills in software development. Alongside my academic pursuits, I excel in time management, Communication skills ,  balancing my club and society activities.



                                </p>

                                <p className='pb-6'>Feel free to explore my Portfolio Project where I tried to assemble a part of me . Do delve into the projects I've worked on . Also expecting a feedback from you all. Let's embark on a journey of innovation and creativity, constantly inspiring and motivating each other.
                                </p>
                                <p className='pb-2'> Stay inspired, and let's create something remarkable together!</p>

                            </div>


                            <div className='col-span-3 w-[80%] relative rounded-2xl border-2 p-6 sm:p-2 ml-20 xl:ml-10 lg:ml-0 lg:w-full dark:gradient-background border-solid border-dark/30 bg-light dark:bg-primaryDark dark:border-primary justify-end'>
                                <Image src={aboutPic1} quality={80} alt="Aryadeep Gogoi" className="w-full h-full rounded-2xl" />
                            </div>

                        </div>


                    </Layout>

                    <Skills />
                    <Experience />
                    <Education />
                </main>
            </motion.div>

        </>
    )
}

export default about

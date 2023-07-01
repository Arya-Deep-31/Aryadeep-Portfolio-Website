import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import aboutPic from "../../public/images/profile/developer-pic-2.jpg"
import Skills from '@/components/Skills'
import {motion} from "framer-motion" ;





const about = () => {
    return (
        <>
            <Head>
                <title> Aryadeep Gogoi's | About Page

                </title>
                <meta name=" description" content="about me"></meta>
            </Head>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>

                <main className='flex w-full flex-col items-center justify-center '>
                    <Layout className=''>
                        <AnimatedText text="Passion To Potential " className='mb-10' />



                        <div className='grid w-full grid-cols-7 gap-20'>

                            <div className='col-span-4 flex flex-col items-start justify-start'>
                                <h2 className='mb-8 text-2xl font-bold text-dark/70'> About Me</h2>

                                <p className='pb-4'> I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm AryadI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm Aryad
                                </p>

                                <p className='pb-4'>I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm AryadI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm Aryad</p>
                                <p className='pb-2'>I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm AryadI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm AryadI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm AryadI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm Aryad</p>

                            </div>

                            <div className='col-span-3 relative rounded-2xl border-2 ml-2 border-solid border-dark/30 bg-light p-8  justify-end'>
                                <Image src={aboutPic} alt="Aryadeep Gogoi" className="w-full h-auto rounded-2xl " />
                            </div>

                        </div>


                    </Layout>

                    <Skills />
                </main>
            </motion.div>

        </>
    )
}

export default about

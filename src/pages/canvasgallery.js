


import musicprofile from "../../public/images/talentpages/musicbg (1).webp"
import musicprofile2 from "../../public/images/talentpages/craftgallerybg.webp"
import bh2 from "../../public/images/talentpages/bg3.webp"
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/artprofile.webp"
import Signature from "../../public/images/profile/signature.webp"
import AnimatedText from '@/components/AnimatedText'
import MusicTypingText from '@/components/MusicTypingText'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from "framer-motion";
import Link from 'next/link'
import TypewriterComponent from 'typewriter-effect'
import { useState, useEffect } from 'react';

import painting1 from "../../public/images/talentpages/1.webp"
import painting2 from "../../public/images/talentpages/2.webp"
import painting3 from "../../public/images/talentpages/3.webp"
import painting4 from "../../public/images/talentpages/4.webp"
import painting5 from "../../public/images/talentpages/5.webp"
import painting6 from "../../public/images/talentpages/6.webp"
import painting7 from "../../public/images/talentpages/7.webp"
import painting8 from "../../public/images/talentpages/8.webp"
import painting9 from "../../public/images/talentpages/9.webp"


import photo1 from "../../public/images/talentpages/photo1.webp"
import photo2 from "../../public/images/talentpages/photo2.webp"
import photo3 from "../../public/images/talentpages/photo3.webp"
import photo4 from "../../public/images/talentpages/photo4.webp"
import photo5 from "../../public/images/talentpages/photo5.webp"
import photo6 from "../../public/images/talentpages/photo6.webp"
import photo7 from "../../public/images/talentpages/photo7.webp"



import design1 from "../../public/images/talentpages/design1.webp"
import design2 from "../../public/images/talentpages/design2.webp"
import design3 from "../../public/images/talentpages/design3.webp"
import design4 from "../../public/images/talentpages/design4.webp"
import design5 from "../../public/images/talentpages/design5.webp"
import design6 from "../../public/images/talentpages/design6.webp"
import design7 from "../../public/images/talentpages/design7.webp"
import design8 from "../../public/images/talentpages/design8.webp"







const ProjectDetails1 = ({ title, summary }) => {


    const images = [painting1, painting2, painting3, painting4, painting5, painting6, painting7, painting8, painting9];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2500);

        return () => {
            clearInterval(intervalId);
        };
    },);



    return (
        <article className='w-full flex flex-col items-center justify-between rounded-3xl border border-solid bg-white/40 shadow-2xl p-6 dark:bg-darker/80 dark:shadow-primary/60 dark:border-primary lg:flex-col xs:p-4'>
            <motion.div initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }} whileHover={{ scale: 1.05 }} >

                <Image quality={80} src={images[currentImageIndex]} alt={title} className='w-full h-auto mb-2' />
            </motion.div>

            <div className='flex flex-col items-start justify-between p-6 xl:p-1 w-full'>
                <h2 className='my-2 w-full  text-3xl text-dark/90 font-bold dark:text-light md:text-2xl sm:text-xl flex items-center justify-center'>{title}</h2>
                <p className='w-full font-dark dark:text-light md:text-base sm:text-sm'>{summary}</p>
            </div>
        </article>
    );
};


const ProjectDetails2 = ({ title, summary }) => {


    const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2500);

        return () => {
            clearInterval(intervalId);
        };
    },);



    return (
        <article className='w-full flex flex-col items-center justify-between rounded-3xl border border-solid bg-white/40 shadow-2xl p-6 dark:bg-darker/80 dark:shadow-primary/60 dark:border-primary lg:flex-col xs:p-4'>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }} whileHover={{ scale: 1.05 }}>
                <Image quality={80} src={images[currentImageIndex]} alt={title} className='w-full h-auto mb-2' />
            </motion.div>

            <div className='flex flex-col items-start justify-between p-6 xl:p-1 w-full'>
                <h2 className='my-2 w-full text-left text-3xl text-dark/90 font-bold dark:text-light md:text-2xl sm:text-xl flex items-center justify-center'>{title}</h2>
                <p className='w-full font-dark dark:text-light md:text-base sm:text-sm'>{summary}</p>
            </div>
        </article>
    );
};



const ProjectDetails3 = ({ title, summary }) => {


    const images = [design1, design2, design3, design4, design5, design6, design7, design8];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2500);

        return () => {
            clearInterval(intervalId);
        };
    },);



    return (
        <article className='w-full flex flex-col items-center justify-between rounded-3xl border border-solid bg-white/40 shadow-2xl p-6 dark:bg-darker/80 dark:shadow-primary/60 dark:border-primary lg:flex-col xs:p-4'>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }} whileHover={{ scale: 1.05 }}>
                <Image quality={80} src={images[currentImageIndex]} alt={title} className='w-full h-auto mb-2' />
            </motion.div>

            <div className='flex flex-col items-start justify-between p-6 xl:p-1 w-full'>
                <h2 className='my-2 w-full text-left text-3xl text-dark/90 font-bold dark:text-light md:text-2xl sm:text-xl flex items-center justify-center'>{title}</h2>
                <p className='w-full font-dark dark:text-light md:text-base sm:text-sm'>{summary}</p>
            </div>
        </article>
    );
};








const CanvasRoom = () => {
    return (
        <>
            <Head >
                <title>Aryadeep canvas room</title>
                <meta name="canvas gallery" content="design page" />

            </Head>




            <TransitionEffect />




            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} >
                <Image src={musicprofile2} quality={50} alt="Music Profile" className="h-full opacity-25 absolute -mt-20 lg:opacity-0 md:opacity-0 sm:opacity-0">

                </Image>

                <Image src={bh2} quality={60} alt="wordcraft" className="h-full absolute -mt-20 opacity-0 md:opacity-0 sm:opacity-0 xs:opacity-30 xs:w-full" >

                </Image>




                <main className='flex w-full flex-col items-center justify-center '>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} >
                        <Layout className=' min-h-screen '>
                            <AnimatedText text="Welcome" className=' dark:!text-light/90' />
                            <AnimatedText text="To Canvas Gallery" className='dark:!text-light/90 !text-2xl font-bold text-dark/70 mb-8 sm:!text-2xl' />






                            <div className='grid -my-12 w-full grid-cols-8 gap-12 items-center justify-between  lg:p-8 lg:grid-cols-3 lg:gap-24  md:p-12 md:grid-cols-3  sm:grid-cols-3    md:mt-4 sm:p-12 xs:p-4 sm:mt-0 sm:grid-cols-3 '>



                                <div className='col-span-2 w-full flex flex-col items-center justify-center lg:col-span-4 md:col-span-4 sm:col-span-4 '>
                                    <span className='ml-16 xl:ml-6 lg:ml-0 text-dark font-bold text-3xl dark:text-light md:text-4xl sm:text-2xl xs:text-xl lg:mt-8 md:mt-6 sm:mt-0 '>Hey ! Hues of Imagination </span>

                                    <div className='-mt-8 w-56 rotate-12 xl:w-52 sm:w-48'>
                                        <Image alt="Music Profile" src={Signature} />

                                    </div>


                                    <span className='mb-4 -mt-8 text-dark/90 text-xl dark:text-light xl:text-xl  md:text-xl sm:text-lg xs:text-base'>is passionate about</span>

                                    <span className=' font-bold text-5xl ml-1 text-dark shoot dark:text-primary xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl'>
                                        <TypewriterComponent options={{
                                            autoStart: true,
                                            loop: true,
                                            delay: 40,
                                            strings: [
                                                "Designing..",
                                                "Painting..",
                                                "Sketching..",
                                                "Crafting...",
                                            ],
                                        }} />
                                    </span>

                                </div>





                                <div className='col-span-4 w-full relative mb-2 p-4 ml-4  justify-end  md:p-0.5 sm:p-0 sm:-mt-14 mb-4 xs:mb-6'>
                                    <Image src={profilePic} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={false} alt="Aryadeep Gogoi" className="w-full h-full rounded-2xl " />
                                </div>


                                <div className='col-span-2 -mt-20  w-full h-[60%] flex flex-col items-center justify-center lg:col-span-4 md:col-span-4 sm:col-span-4  xs:-ml-2 xs:p-2'>



                                    <span className='  text-dark/90 text-lg dark:text-light  lg:text-xl md:text-xl sm:text-lg xs:text-base'>From a young age, I discovered my innate connection with art and design using various mediums.</span>
                                    <span className=' mt-4 text-dark/90 text-lg dark:text-light  lg:text-xl md:text-xl sm:text-lg xs:text-base'>With each piece I create, my aim is to convey a unique narrative, spark imagination, and invite viewers to experience the magic around and beyond !</span>
                                    <span className=' mt-4 mb-8 text-dark/90 text-lg dark:text-light lg:text-xl  md:text-xl sm:text-lg xs:text-base'>I look forward to connecting with fellow artists, designers, and individuals who share a love for art and design. Let's embark on a visual journey together and create something extraordinary.</span>




                                </div>




                            </div>
















                            <AnimatedText text=" The Passion Shall Hold On!" className='mt-40 mb-2 lg:mt-20 mt-28' />
                            <AnimatedText text="My Works" className='mb-10 !text-3xl font-bold text-dark/70 sm:!text-2xl' />




                            <div className='mt-4 grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 xl:flex-col md:p-2 sm:p-4 mb-20'>
                                <div className='col-span-4 xl:col-span-4 lg:col-span-12  md:col-span-12'>
                                    <ProjectDetails1

                                        title="Painting/Sketching "
                                        summary="With each stroke, I breathe life into my artwork in an attempt to capture the emotions deep within."



                                    />
                                </div>
                                <div className='col-span-4 xl:col-span-4 lg:col-span-12 md:col-span-12'>
                                    <ProjectDetails2

                                        title="Photography "
                                        summary="Always the observer, I have a keen eye for composition and tend to capture moments that evoke emotions through my lens."



                                    />
                                </div>
                                <div className='col-span-4 xl:col-span-4 lg:col-span-12  md:col-span-12'>
                                    <ProjectDetails3

                                        title="Graphic Designing "
                                        type="Project 1"
                                        img={musicprofile}
                                        summary="Skillfully blending creativity and technical expertise, crafting designs that leave an impact on the viewer."



                                    />
                                </div>


                            </div>



                        </Layout  >

                    </motion.div>


                </main >
            </motion.div >





        </>
    )
}


export default CanvasRoom




import musicprofile from "../../public/images/talentpages/musicbg (1).png"
import musicprofile2 from "../../public/images/talentpages/musicbg (2).png"
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import Signature from "../../public/images/profile/signature.png"
import AnimatedText from '@/components/AnimatedText'
import MusicTypingText from '@/components/MusicTypingText'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from "framer-motion";
import Link from 'next/link'
import { HtmlIcon, LinkedInIcon, CssIcon, ScssIcon, FigmaIcon, ReactIcon, BootstrapIcon, VscodeIcon, PythonIcon, C2Icon, JavaIcon, GitIcon1, GitIcon2, IndesignIcon, AfterEffectsIcon, IllustratorIcon, TailwindCssIcon, NodejsIcon, CanvaIcon, LeetcodeIcon, DribbbleIcon } from '../components/Icons';















const ProjectDetails = ({ title, type, summary, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-between rounded-3xl border border-solid  bg-white/40 shadow-2xl p-8 dark:bg-darker/80 dark:shadow-primary/60 dark:border-primary    lg:flex-col  xs:p-4' >
            <Link className='w-full overflow-hidden rounded-lg lg:w-full lg:mb-8 sm:mb-4' href={link} target='_blank'>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 1 }}><Image src={img} alt={title} className='w-full h-auto ' /></motion.div>



            </Link>
            <div className=' flex flex-col items-start justify-between pl-12 xl:pl-2 w-full'>

                <h2 className='my-2 w-full  text-left text-4xl text-dark/90 font-bold dark:text-light md:text-3xl sm:text-2xl' >{title}</h2>

                <p className='my-8 w-full font-dark dark:text-light md:text-base sm:text-sm' >{summary}</p>
                <div className='flex items-center'>

                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                        <Link className='rounded-lg bg-dark text-light p-1 px-4 lg:px-8  text-lg dark:bg-primaryDark dark:text-white sm:text-base xs:text-sm' href={link} target='_blank'> Visit </Link>


                    </motion.div>
                </div>
            </div>
        </article>

    )
}






export default function MusicRoom() {
    return (
        <>
            <Head >
                <title>Aryadeep's Portfolio</title>
                <meta name="description" content="home page" />

            </Head>




            <TransitionEffect />




            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} >


                <Image src={musicprofile2} className="opacity-25 absolute -mt-20 lg:opacity-0 md:opacity-0 sm:opacity-0">

                </Image>
                <main className='flex w-full flex-col items-center justify-center '>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} >
                        <Layout className=' min-h-screen '>
                            <AnimatedText text="Welcome" className=' dark:!text-light/90' />
                            <AnimatedText text="To Symphonic Verse" className='dark:!text-light/90 !text-2xl font-bold text-dark/70 mb-8 sm:!text-2xl' />






                            <div className='grid -my-12 w-full grid-cols-8 gap-12 items-center justify-between  lg:p-8 lg:grid-cols-3 lg:gap-24  md:p-12 md:grid-cols-3 md:mt-4 sm:p-16 sm:mt-0 sm:grid-cols-3 xs:-ml-10'>



                                <div className='col-span-2 w-full flex flex-col items-center justify-center lg:col-span-4 md:col-span-4 sm:col-span-4 '>
                                    <span className=' text-dark font-bold text-3xl dark:text-light md:text-4xl sm:text-3xl xs:text-2xl lg:mt-8 md:mt-6 sm:mt-2 '>Hey ! Rhythm lovers </span>

                                    <div className='-mt-8 w-56 rotate-12 xl:w-52 sm:w-48'>
                                        <Image src={Signature} />

                                    </div>


                                    <span className='mb-4 -mt-8 text-dark/90 text-xl dark:text-light xl:text-xl  md:text-xl sm:text-lg xs:text-base'>is passionate about</span>

                                    <span className=' font-bold text-5xl ml-1 text-dark shoot dark:text-primary xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl xs:text-3xl'>typical</span>


                                </div>





                                <div className='col-span-4 w-full relative mb-2 p-4 ml-4  justify-end  md:p-0.5 sm:p-0 '>
                                    <Image src={profilePic} alt="Aryadeep Gogoi" className="w-full h-full rounded-2xl " />
                                </div>


                                <div className='col-span-2  w-full h-[60%] flex flex-col items-center justify-center lg:col-span-4 md:col-span-4 sm:col-span-4  xs:-ml-2'>



                                    <span className='  text-dark/90 text-lg dark:text-light  lg:text-xl md:text-xl sm:text-lg xs:text-base'>passionate  passionate about passionat passionate about passionate about passionate about passionate aboutabout</span>
                                    <span className=' mt-4 text-dark/90 text-lg dark:text-light  lg:text-xl md:text-xl sm:text-lg xs:text-base'>passionate  passionate about passnate about passionate about passionate about passionate about passionate aboutabout</span>
                                    <span className=' mt-4 mb-8 text-dark/90 text-lg dark:text-light lg:text-xl  md:text-xl sm:text-lg xs:text-base'>passionate  passionate about passionate assionate about passionate about passionate aboutabout</span>




                                </div>




                            </div>



                          












                            <AnimatedText text="Hustling Through Projects " className='mt-10  lg:mt-20 mt-28' />
                            <AnimatedText text="My Projects" className='mb-6 !text-3xl font-bold text-dark/70 sm:!text-2xl' />




                            <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 xl:flex-col md:p-2 sm:p-4 mb-20'>
                                <div className='col-span-4 xl:col-span-4 lg:col-span-12  md:col-span-12'>
                                    <ProjectDetails

                                        title="Posua 2023 Website "
                                        type="Project 1"
                                        img={musicprofile}
                                        summary="I'm Aryadeep  Gogoi  'm ArygoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                        link="https://www.posua23.in/"


                                    />
                                </div>
                                <div className='col-span-4 xl:col-span-4 lg:col-span-12 md:col-span-12'>
                                    <ProjectDetails

                                        title="Posua 2023 Website "
                                        type="Project 1"
                                        img={musicprofile}
                                        summary="I'm Aryadeep  Gogoi   I'm A Ieep  Gyadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                        link="https://www.posua23.in/"


                                    />
                                </div>
                                <div className='col-span-4 xl:col-span-4 lg:col-span-12  md:col-span-12'>
                                    <ProjectDetails

                                        title="Posua 2023 Website "
                                        type="Project 1"
                                        img={musicprofile}
                                        summary="I'm Aryadeep  Gogoi   I'm A I'mp  Gogdeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                        link="https://www.posua23.in/"


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


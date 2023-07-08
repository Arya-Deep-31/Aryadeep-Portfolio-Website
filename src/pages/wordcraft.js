


import musicprofile from "../../public/images/talentpages/musicbg (1).webp"
import musicprofile2 from "../../public/images/talentpages/wordcraftbg.webp"
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import wordcraft from "../../public/images/profile/wordcraft.webp"
import Signature from "../../public/images/profile/signature.webp"
import AnimatedText from '@/components/AnimatedText'
import MusicTypingText from '@/components/MusicTypingText'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from "framer-motion";
import Link from 'next/link'
import { HtmlIcon, LinkedInIcon, CssIcon, ScssIcon, FigmaIcon, ReactIcon, BootstrapIcon, VscodeIcon, PythonIcon, C2Icon, JavaIcon, GitIcon1, GitIcon2, IndesignIcon, AfterEffectsIcon, IllustratorIcon, TailwindCssIcon, NodejsIcon, CanvaIcon, LeetcodeIcon, DribbbleIcon } from '../components/Icons';
import TypewriterComponent from 'typewriter-effect'















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






const WordRoom = () => {
    return (
        <>
            <Head >
                <title>Aryadeep Portfolio</title>
                <meta name="description" content="home page" />

            </Head>




            <TransitionEffect />




            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} >


                <Image src={musicprofile2} quality={60} alt="Music Profile" className="h-full w-full opacity-30 absolute -mt-20 lg:opacity-0 md:opacity-0 sm:opacity-0">

                </Image>
                <main className='flex w-full flex-col items-center justify-center '>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} >
                        <Layout className=' min-h-screen  '>
                            <AnimatedText text="Welcome" className=' dark:!text-light/90' />
                            <AnimatedText text="To Word Craft" className='dark:!text-light/90 !text-2xl font-bold text-dark/70 mb-16  sm:!text-2xl' />






                            <div className='grid -my-12 w-full grid-cols-8 gap-12 items-center justify-between  lg:p-8 lg:grid-cols-3 lg:gap-24  md:p-12 md:grid-cols-3 md:mt-4 sm:p-12 xs:p-4 sm:mt-0 sm:grid-cols-3 '>



                                <div className='col-span-2 w-full flex flex-col items-center justify-center lg:col-span-4 md:col-span-4 sm:col-span-4 '>
                                    <span className=' text-dark font-bold text-3xl dark:text-light md:text-3xl sm:text-2xl xs:text-2xl lg:mt-8 md:mt-6 sm:mt-2 ml-16 xl:ml-10 lg:ml-6'>Salut,felllow wordsmiths</span>

                                    <div className='-mt-8 w-56 rotate-12 xl:w-52 sm:w-48'>
                                        <Image alt="Music Profile" src={Signature} />

                                    </div>


                                    <span className='mb-4 -mt-8 text-dark/90 text-xl dark:text-light xl:text-xl  md:text-xl sm:text-lg xs:text-base'>is passionate writing</span>

                                    <span className=' font-bold text-5xl ml-1 text-dark shoot dark:text-primary xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl'>
                                        <TypewriterComponent options={{
                                            autoStart: true,
                                            loop: true,
                                            delay: 40,
                                            strings: [
                                                "Fiction..",
                                                "Thriler",
                                                "Poetry...",
                                                "Prose...",
                                            ],
                                        }} />
                                    </span>


                                </div>





                                <div className='col-span-4 w-[80%] ml-20 relative mb-2 p-4 xl:ml-16 lg:ml-16 sm:ml-12 xs:ml-10 justify-end  md:p-0.5 sm:p-0 '>
                                    <Image src={wordcraft} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={false} alt="Aryadeep Gogoi" className="w-full h-full rounded-2xl " />
                                </div>


                                <div className='col-span-2  w-full h-[60%] flex flex-col items-center justify-center lg:col-span-4 md:col-span-4 sm:col-span-4  xs:-ml-2'>



                                    <span className='  text-dark/90 text-lg dark:text-light  lg:text-xl md:text-xl sm:text-lg xs:text-base'> While I may not be a professional writer, my passion for crafting normal poems and engaging content drives me to explore the world of literature and express myself through written expression.</span>
                                    <span className=' mt-4 text-dark/90 text-lg dark:text-light  lg:text-xl md:text-xl sm:text-lg xs:text-base'>With each poem and piece of content I create, I strive to evoke emotions, provoke thoughts, and spark conversations. </span>
                                    <span className=' mt-4 mb-8 text-dark/90 text-lg dark:text-light lg:text-xl  md:text-xl sm:text-lg xs:text-base'>I find inspiration in the simplicity of life and believe that there is extraordinary beauty to be found in the ordinary.</span>




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

export default WordRoom


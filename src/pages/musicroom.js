
import musicprofile from "../../public/images/talentpages/musicbg (1).webp"
import musicprofile2 from "../../public/images/talentpages/musicbg (2).webp"
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/musicroom.webp"
import Signature from "../../public/images/profile/signature.webp"
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from "framer-motion";
import Link from 'next/link'
import TypewriterComponent from 'typewriter-effect'
import bh2 from "../../public/images/talentpages/bh2.webp"






const ProjectDetails = ({ title, type, summary, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-between rounded-3xl border border-solid  bg-white/40 shadow-2xl p-8 dark:bg-darker/80 dark:shadow-primary/60 dark:border-primary    lg:flex-col  xs:p-4' >
            <Link className='w-full overflow-hidden rounded-lg lg:w-full lg:mb-8 sm:mb-4' href={link} target='_blank'>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 1 }}><Image src={img} alt={title} className='w-full h-auto ' /></motion.div>



            </Link>
            <div className=' flex flex-col items-start justify-between p-3 xl:p-2 w-full'>

                <h2 className='my-2 w-full  text-left text-3xl text-dark/90 font-bold dark:text-light md:text-2xl sm:text-2xl xs:text-xl' >{title}</h2>

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






const MusicRoom = () => {
    return (
        <>
            <Head >
                <title>Aryadeep Portfolio</title>
                <meta name="MUSIC ROOM" content="under work" />

            </Head>




            <TransitionEffect />




            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} >


                <Image src={musicprofile2} quality={60} alt="Music Profile" className="h-full opacity-30 absolute -mt-20 lg:opacity-0 md:opacity-0 sm:opacity-0">

                </Image>
                <Image src={bh2} quality={60} alt="Music Profile" className="h-full absolute -mt-20 opacity-0 md:opacity-0 sm:opacity-0 xs:opacity-30 xs:w-full">

                </Image>
                <main className='flex w-full flex-col items-center justify-center '>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} >
                        <Layout className=' min-h-screen '>
                            <AnimatedText text="Welcome" className=' dark:!text-light/90' />
                            <AnimatedText text="To Symphonic Verse" className='dark:!text-light/90 !text-2xl font-bold text-dark/70 mb-8 sm:!text-2xl' />






                            <div className='grid -my-12 w-full grid-cols-8 gap-12 items-center justify-between  lg:p-8 lg:grid-cols-3 lg:gap-24  md:p-12 md:grid-cols-3 md:mt-4 sm:p-12 xs:p-4 sm:mt-0 sm:grid-cols-3 '>



                                <div className='col-span-2 w-full flex flex-col items-center justify-center lg:col-span-4 md:col-span-4 sm:col-span-4 '>
                                    <span className=' text-dark font-bold text-3xl dark:text-light md:text-4xl sm:text-3xl xs:text-2xl lg:mt-8 md:mt-6 sm:mt-2 '>Hey ! Rhythm lovers </span>

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
                                                "Instruments..",
                                                "Flute",
                                                "Keyboard..",
                                                "Guitar...",
                                                "Cajon",
                                            ],
                                        }} />
                                    </span>

                                </div>





                                <div className='col-span-4 w-full relative mb-2 p-4 ml-4  justify-end  md:p-0.5 sm:p-0 md:-mt-8'>
                                    <Image src={profilePic} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={false} alt="Aryadeep Gogoi" className="w-full h-full rounded-2xl " />
                                </div>


                                <div className='col-span-2  w-full h-[60%] flex flex-col items-center justify-center lg:col-span-4 md:col-span-4 sm:col-span-4  xs:-ml-2'>



                                    <span className='  text-dark/90 text-lg dark:text-light  lg:text-xl md:text-xl sm:text-lg xs:text-base'>From an early age, I discovered my innate connection with music and the joy it brings to my life. As I began my musical journey, I quickly gravitated towards the piano, captivated by its versatility.</span>
                                    <span className=' mt-4 text-dark/90 text-lg dark:text-light  lg:text-xl md:text-xl sm:text-lg xs:text-base'>As an avid learner, I have delved into various genres, including classical, contemporary, and pop, always seeking to broaden my musical horizons</span>
                                    <span className=' mt-4 mb-8 text-dark/90 text-lg dark:text-light lg:text-xl  md:text-xl sm:text-lg xs:text-base'>In addition to the piano, I am passionate playing the guitar .My musical Journey is under construction and shall be here soon</span>




                                </div>




                            </div>















                            <AnimatedText text=" The Passion Shall Hold On!" className='mt-40 mb-2 lg:mt-20 mt-28' />
                            <AnimatedText text="My Works" className='mb-10 !text-3xl font-bold text-dark/70 sm:!text-2xl' />



                            <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 xl:flex-col md:p-2 sm:p-4 mb-20'>
                                <div className='col-span-4 xl:col-span-4 lg:col-span-12  md:col-span-12'>
                                    <ProjectDetails

                                        title="Represented NITS at Spring Fest'23 IIT KGP"
                                        type="Project 1"
                                        img={musicprofile}
                                        summary="A week exploring challenges along the event of Wildfire and Lakeside Dreams at the beautiful campus of IIT Kharagpur"
                                        link=""


                                    />
                                </div>
                                <div className='col-span-4 xl:col-span-4 lg:col-span-12 md:col-span-12'>
                                    <ProjectDetails

                                        title="Represneted in Inter Hostel ,Independence Day'23 ,Incand'23 , Tecno'22 "
                                        type="Project 1"
                                        img={musicprofile}
                                        summary=""
                                        link=""


                                    />
                                </div>
                                <div className='col-span-4 xl:col-span-4 lg:col-span-12  md:col-span-12'>
                                    <ProjectDetails

                                        title="Leisure Time & Beats in lo-fi"
                                        type="Project 1"
                                        img={musicprofile}
                                        summary="To the poetry of the air , the wine that fills the glass of silence and the soundtrack of everyones rhytm in life . Feel free to collab"
                                        link="https://drive.google.com/drive/folders/18x-m8t0nSuoMh3NcyuEByGIwP-_UzPnv?usp=sharing"


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


export default MusicRoom

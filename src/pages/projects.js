import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import project1 from "../../public/images/projects/project1.webp"
import ggui from "../../public/images/projects/guidancegridproject.webp"
import agrishareui from "../../public/images/projects/Agrishare.webp"
import cardio from "../../public/images/projects/cardiocare.webp"
import meeatui from "../../public/images/projects/meeat.webp"
import posuaui from "../../public/images/projects/posua.webp"
import trinetra from "../../public/images/projects/trinetra.webp"
import portfolio from "../../public/images/projects/portfolio.webp"
import ecs from "../../public/images/projects/ecs.webp"
import { motion } from "framer-motion";
import { GithubIcon } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'




const ProjectDetails = ({ title, type, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid  bg-white/40 shadow-2xl p-8 dark:bg-darker/80 dark:shadow-primary/60 dark:border-primary    lg:flex-col  xs:p-4' >
            <Link className='w-1/2 overflow-hidden rounded-lg lg:w-full lg:mb-8 sm:mb-4' href={link} target='_blank'>
                <motion.div whileHover={{scale:1.1}} transition={{duration : 1}}><Image quality={60} src={img} alt={title} className='w-full h-auto ' /></motion.div>


            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-12 lg:w-full'>
                <span className='text-primaryDark/80 text-2xl font-bold dark:text-light/70 sm:text-lg xs:text-base'>{type}</span>

                <h2 className='my-2 w-full  text-left text-4xl text-dark/90 font-bold dark:text-light md:text-3xl sm:text-2xl' >{title}</h2>

                <p className='my-8 w-[90%] font-dark dark:text-light md:text-base sm:text-sm' >{summary}</p>
                <div className='flex items-center'>
                    
                    <Link className='mr-4 ' href={github} target='_blank'> <GithubIcon /></Link>
                    <motion.div whileHover={{scale:1.05}} transition={{duration:0.5}} >
                    <Link className='rounded-lg bg-dark text-light p-1 px-4 text-lg dark:bg-primaryDark dark:text-white  sm:text-base xs:text-sm' href={link} target='_blank'> Explore Project </Link>


                    </motion.div>
                </div>
            </div>
        </article>

    )
}


const ProjectDetails2 = ({ title, type, summary, img, link, github }) => {
    return (
        <div className='w-full flex items-center justify-between rounded-3xl border border-solid  bg-white/40 shadow-2xl p-8 dark:bg-darker/80 dark:shadow-primary/60 dark:border-primary lg:flex-col lg:p-8 xs:p-4'>
             <div className='w-1/2 flex flex-col items-start justify-between pl-8 lg:w-full  lg:mb-8 sm:mb-8'>
                <span className='text-primaryDark/80 text-2xl font-bold  dark:text-light/70 sm:text-lg xs:text-base'>{type}</span>

                <h2 className='my-2 w-full  text-left text-4xl text-dark/90 font-bold  dark:text-light  md:text-3xl sm:text-2xl'  >{title}</h2>

                <p className='my-8 w-[90%] font-dark dark:text-light md:text-base sm:text-sm'>{summary}</p>
                <div className='flex items-center'>
                    <Link className='mr-4 ' href={github} target='_blank'> <GithubIcon /></Link>
                    <motion.div whileHover={{scale:1.05}} transition={{duration:0.5}} >
                    <Link className='rounded-lg bg-dark text-light p-1 px-4 text-lg dark:bg-primaryDark dark:text-white sm:text-base xs:text-sm' href={link} target='_blank'> Explore Project </Link>


                    </motion.div>
                </div>
            </div>
            <Link className='w-1/2 overflow-hidden rounded-lg lg:w-full' href={link} target='_blank'>
            <motion.div whileHover={{scale:1.1}} transition={{duration : 1}}><Image quality={60} src={img} alt={title} className='w-full h-auto ' /></motion.div>


            </Link>
           
        </div>

    )
}




const projects = () => {
    return (
        <>
            <Head >
                <title> Aryadeep Gogoi | Projects Page

                </title>
                <meta name=" Aryadeeps" content="about my projects"></meta>
            </Head>
            <TransitionEffect/>

            <main className='w-full mb-20 flex flex-col items-center justify-center sm:mt-4'>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} >
                    <Layout className=''>
                        <AnimatedText text="Hustling Through Projects " className='' />
                        <AnimatedText text="My Projects" className='mb-6 !text-3xl font-bold text-dark/70 sm:!text-2xl' />

                        <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                            <div className='col-span-12  '>
                                <ProjectDetails

                                    title=" "
                                    type="Project 1"
                                    img={project1}
                                    summary="I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  goi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Goggoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  GogGogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                    link="https://www.posua23.in/"
                                    github="/"

                                />
                            </div>
                            <div className='col-span-12'>
                                <ProjectDetails2

                                    title="Posua 2023 Website"
                                    type="Team Project"
                                    img={project1}
                                    summary="I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  goi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Goggoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  GogGogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                    link="https://www.posua23.in/"
                                    github="/"

                                />
                            </div>
                            <div className='col-span-12'>
                                <ProjectDetails

                                    title="CardioCare"
                                    type="Team Project"
                                    img={cardio}
                                    summary="I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  goi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Goggoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  GogGogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                    link="https://cardio-care.netlify.app/"
                                    github="/"

                                />
                            </div>
                            <div className='col-span-12'>
                                <ProjectDetails2

                                    title="Personal Portfolio Project"
                                    type="Individual Project"
                                    img={portfolio}
                                    summary="I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  goi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Goggoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  GogGogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                    link="https://aryadeep-portfolio-website.vercel.app/"
                                    github="/"

                                />
                            </div>


                            <div className='col-span-12'>
                                <ProjectDetails

                                    title="UI/UX | GUIDANCE GRID "
                                    type="Team Project"
                                    img={ggui}
                                    summary="I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  goi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Goggoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  GogGogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                    link="https://www.figma.com/file/l9XeySiNIo6PAzqfx68ecd/Guidance-Grid?type=design&node-id=0%3A1&mode=design&t=cDaLMzqkVRNY3qJx-1"
                                    github="/"

                                />
                            </div>
                            <div className='col-span-12'>
                                <ProjectDetails2

                                    title="UI/UX | POSUA 2023"
                                    type="Team Project"
                                    img={posuaui}
                                    summary="I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  goi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Goggoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  GogGogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                    link="https://www.figma.com/file/XN4CiqL64oeZ897uWEWF4N/POSUA-2023?type=design&node-id=0%3A1&mode=design&t=U75lGJZCb2wnilJ0-1"
                                    github="/"

                                />
                            </div>

                            <div className='col-span-12'>
                                <ProjectDetails

                                    title="UI/UX | AgriShare"
                                    type="Individual Project"
                                    img={agrishareui}
                                    summary="I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  goi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Goggoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  GogGogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                    link="https://www.figma.com/file/1AKO8jGB04awSvhasbUaW5/AgriShare?type=design&node-id=0%3A1&mode=design&t=UDOfptMPO8WjtTEN-1"
                                    github="/"

                                />
                            </div>
                            <div className='col-span-12'>
                                <ProjectDetails2

                                    title="UI/UX | Me-Eat App"
                                    type="Individual Project"
                                    img={meeatui}
                                    summary="I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  goi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Goggoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  GogGogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                    link="https://www.figma.com/proto/gKjSzktK2uOgoFFhZBwFjP/me-eat-app?page-id=0%3A1&node-id=71-285&starting-point-node-id=71%3A277&mode=design&t=cvCM0K7uorZ7BO53-1"
                                    github="/"

                                />
                            </div>

                            <div className='col-span-12'>
                                <ProjectDetails

                                    title="UI/UX | ECS WEBSITE2022"
                                    type="Team Project"
                                    img={ecs}
                                    summary="I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  goi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Goggoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  GogGogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                    link="https://www.figma.com/file/pfXjOMgyrZIpumZ1mDqAg0/Ecs-website?type=design&node-id=0%3A1&mode=design&t=IwBPhPkFWT4Jb0hc-1"
                                    github="/"

                                />
                            </div>
                            <div className='col-span-12'>
                                <ProjectDetails2

                                    title="UI/UX | TrinetraGeeks"
                                    type="Individual Project"
                                    img={trinetra}
                                    summary="I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  goi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Goggoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  GogGogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                    link="https://www.figma.com/file/aDg1wRV4uQyAvusdUVK1cM/TrinetraGeeks?type=design&node-id=0%3A1&mode=design&t=W5WOeJmJyrjLAxQw-1"
                                    github="/"

                                />
                            </div>

                        </div>
                    </Layout>

                </motion.div>
            </main>

        </>
    )
}

export default projects

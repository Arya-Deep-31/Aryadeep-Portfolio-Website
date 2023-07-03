import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import project1 from "../../public/images/projects/project1.webp"
import { motion } from "framer-motion";
import { GithubIcon } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'




const ProjectDetails = ({ title, type, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid  bg-white/40 shadow-2xl p-8 dark:bg-darker/80 dark:shadow-primary/60 dark:border-primary' >
            <Link className='w-1/2 overflow-hidden rounded-lg ' href={link} target='_blank'>
                <motion.div whileHover={{scale:1.1}} transition={{duration : 1}}><Image src={img} alt={title} className='w-full h-auto ' /></motion.div>


            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-12'>
                <span className='text-primaryDark/80 text-2xl font-bold dark:text-light/70'>{type}</span>

                <h2 className='my-2 w-full  text-left text-4xl text-dark/80 font-bold dark:text-light' >{title}</h2>

                <p className='my-8 w-[90%] font-dark dark:text-light'>{summary}</p>
                <div className='flex items-center'>
                    
                    <Link className='mr-4 ' href={github} target='_blank'> <GithubIcon /></Link>
                    <motion.div whileHover={{scale:1.05}} transition={{duration:0.5}} >
                    <Link className='rounded-lg bg-dark text-light p-1 px-4 text-lg dark:bg-primaryDark dark:text-white ' href={link} target='_blank'> Explore Project </Link>


                    </motion.div>
                </div>
            </div>
        </article>

    )
}


const ProjectDetails2 = ({ title, type, summary, img, link, github }) => {
    return (
        <div className='w-full flex items-center justify-between rounded-3xl border border-solid  bg-white/40 shadow-2xl p-8 dark:bg-darker/80 dark:shadow-primary/60 dark:border-primary'>
             <div className='w-1/2 flex flex-col items-start justify-between pl-8 '>
                <span className='text-primaryDark/80 text-2xl font-bold  dark:text-light/70'>{type}</span>

                <h2 className='my-2 w-full  text-left text-4xl text-dark/80 font-bold  dark:text-light'  >{title}</h2>

                <p className='my-8 w-[90%] font-dark dark:text-light'>{summary}</p>
                <div className='flex items-center'>
                    <Link className='mr-4 ' href={github} target='_blank'> <GithubIcon /></Link>
                    <motion.div whileHover={{scale:1.05}} transition={{duration:0.5}} >
                    <Link className='rounded-lg bg-dark text-light p-1 px-4 text-lg dark:bg-primaryDark dark:text-white ' href={link} target='_blank'> Explore Project </Link>


                    </motion.div>
                </div>
            </div>
            <Link className='w-1/2 overflow-hidden rounded-lg ' href={link} target='_blank'>
            <motion.div whileHover={{scale:1.1}} transition={{duration : 1}}><Image src={img} alt={title} className='w-full h-auto ' /></motion.div>


            </Link>
           
        </div>

    )
}




const projects = () => {
    return (
        <>
            <Head>
                <title> Aryadeep Gogoi's | Projects Page

                </title>
                <meta name=" description" content="about my projects"></meta>
            </Head>
            <TransitionEffect/>

            <main className='w-full mb-20 flex flex-col items-center justify-center'>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
                    <Layout className=''>
                        <AnimatedText text="Hustling Through Projects " className='' />
                        <AnimatedText text="My Projects" className='mb-6 !text-3xl font-bold text-dark/70' />

                        <div className='grid grid-cols-12 gap-24'>
                            <div className='col-span-12  '>
                                <ProjectDetails

                                    title="Posua 2023 Website "
                                    type="Project 1"
                                    img={project1}
                                    summary="I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  goi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Goggoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  GogGogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                    link="https://www.posua23.in/"
                                    github="/"

                                />
                            </div>
                            <div className='col-span-12'>
                                <ProjectDetails2

                                    title="Posua 2023 Website "
                                    type="Project 1"
                                    img={project1}
                                    summary="I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  goi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Goggoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  GogGogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                    link="https://www.posua23.in/"
                                    github="/"

                                />
                            </div>
                            <div className='col-span-12'>
                                <ProjectDetails

                                    title="Posua 2023 Website "
                                    type="Project 1"
                                    img={project1}
                                    summary="I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  goi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Goggoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  GogGogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                    link="https://www.posua23.in/"
                                    github="/"

                                />
                            </div>
                            <div className='col-span-12'>
                                <ProjectDetails2

                                    title="Posua 2023 Website "
                                    type="Project 1"
                                    img={project1}
                                    summary="I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  goi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Goggoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  GogGogoi ryadeep  GogoI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogo"
                                    link="https://www.posua23.in/"
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

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
import heart from "../../public/images/projects/heart.webp"
import data1 from "../../public/images/projects/data1.webp"
import eco from "../../public/images/projects/eco.webp"
import MRI from "../../public/images/projects/MRI.webp"
import ecs from "../../public/images/projects/ecs.webp"
import Vikriti from "../../public/images/projects/Vikriti.webp"
import eeg from "../../public/images/projects/eeg.webp"
import { motion } from "framer-motion";
import { GithubIcon } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'




const ProjectDetails = ({ title, type, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid  bg-white/40 shadow-2xl p-8 dark:bg-darker/80 dark:shadow-primary/60 dark:border-primary    lg:flex-col  xs:p-4' >
            <Link className='w-1/2 overflow-hidden rounded-lg lg:w-full lg:mb-8 sm:mb-4' href={link} target='_blank'>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 1 }}><Image quality={60} src={img} alt={title} className='w-full h-auto ' /></motion.div>


            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-12 lg:w-full'>
                <span className='text-primaryDark/80 text-2xl font-bold dark:text-light/70 sm:text-lg xs:text-base'>{type}</span>

                <h2 className='my-2 w-full  text-left text-4xl text-dark/90 font-bold dark:text-light md:text-3xl sm:text-2xl' >{title}</h2>

                <p className='my-8 w-[90%] font-dark dark:text-light md:text-base sm:text-sm' >{summary}</p>
                <div className='flex items-center'>

                    <Link className='mr-4 ' href={github} target='_blank'> <GithubIcon /></Link>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} >
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
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} >
                        <Link className='rounded-lg bg-dark text-light p-1 px-4 text-lg dark:bg-primaryDark dark:text-white sm:text-base xs:text-sm' href={link} target='_blank'> Explore Project </Link>


                    </motion.div>
                </div>
            </div>
            <Link className='w-1/2 overflow-hidden rounded-lg lg:w-full' href={link} target='_blank'>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 1 }}><Image quality={60} src={img} alt={title} className='w-full h-auto ' /></motion.div>


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
                <meta name=" Aryadeeps Projects" content="about my projects"></meta>
            </Head>
            <TransitionEffect />

            <main className='w-full mb-20 flex flex-col items-center justify-center sm:mt-4'>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} >
                    <Layout className=''>
                        <AnimatedText text="Hustling Through Activities " className='mb-1 ' />
                        <AnimatedText text="My Projects" className='mb-8 !text-3xl font-bold text-dark/70 sm:!text-2xl' />

                        <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>


                            <div className='col-span-12  '>

                                <ProjectDetails

                                    title=" Alzheimer Detection on MRI datasets"
                                    type="Group Project"
                                    img={MRI}
                                    summary="
                                    In this machine learning  , deep learning project we analyzed the ADNI dataset and the OASIS dataset MRI on different models preTrained and with some modifications . The dataset was processed through different data augmentation and transformation techniques . The dataset was also well visulaized using graphs , and Explainable AI , which forms a major part of the study"
                                    link="/"
                                    github="/"

                                />
                            </div>



                            
                            <div className='col-span-12'>
                                <ProjectDetails2

                                    title="Alzheimer Detection on EEG datasets"
                                    type="Group Project"
                                    img={eeg}
                                    summary="In this machine learning  , deep learning project we analyzed the EEG dataset on different models and with some modifications . The dataset was processed through different data augmentation and transformation techniques . The dataset was also well visulaized using graphs , which forms a major part of the study"
                                    link="/"
                                    github="/"

                                />
                            </div>
                            
                            
                            <div className='col-span-12'>
                                <ProjectDetails

                                    title="Vikriti 1.0"
                                    type="Individual Project"
                                    img={Vikriti}
                                    summary="Under Construction :)"
                                    link="/"
                                    github="/"

                                />
                            </div>




                            <div className='col-span-12  '>

                                <ProjectDetails2

                                    title=" Heart Disease Analysis"
                                    type="Individual Project"
                                    img={heart}
                                    summary="
                                    In this machine learning project,I analyzed diverse patient data to build predictive models for early detection and diagnosis of human heart disease. Through feature selection and engineering, we identify critical risk factors and build accurate classifiers using logistic regression, decision trees, and neural networks. This project exemplifies machine learning's potential in healthcare, aiding preventive care and improving patient outcomes."
                                    link="https://drive.google.com/file/d/1WTuX1-aB4uzUJVVbu-UvgYUWhH78NZaU/view?usp=sharing"
                                    github="https://github.com/Arya-Deep-31/Heart-Disease-Analysis"

                                />
                            </div>



                            <div className='col-span-12'>
                                <ProjectDetails

                                    title="Posua 2023 Website"
                                    type="Team Project"
                                    img={project1}
                                    summary="Posua the spring fest of NITS , spreads out exuberance all around rejuvenating the land of culture. Posua is not just a fiesta but an emotional journey kalaediscope of colors and sound of Assam. It was an amazing expereince working with Seniors and the Team : Partha ,Himangshu , Jaydeep ,Pragya , Hrishikesh , Aditya , Jacinth and Maharnav . Happy Exploriing :)"
                                    link="https://posua2023.netlify.app/"
                                    github="/"

                                />
                            </div>

                            <div className='col-span-12'>
                                <ProjectDetails2

                                    title="CardioCare"
                                    type="Team Project"
                                    img={cardio}
                                    summary="Submitted for GDSC Solution Challenge 2023 CardioCare is a Progressive Web App which is targetted on the Health UN Goal.The project is still under construction with my team mates Partha Pratim Deka and Pragya Annesha Baruah. Techstacks include : Arduino ,Firebase , React , SCSS , Figma ,etc .Happy Caring :)"
                                    link="https://cardio-care.netlify.app/"
                                    github="/"

                                />
                            </div>

                            <div className='col-span-12'>
                                <ProjectDetails

                                    title="My Personal Portfolio"
                                    type="Individual Project"
                                    img={portfolio}
                                    summary="Whether it's evoking emotions or simply the provoking thought of who I am .. Yes many don't know me so here's a testament to some passions of my life. The tech stacks used in this project are Next JS , Tailwind CSS , EmailJS, Figma and Framer Motion. Immerse yourself in the captivating visuals, delve into the narratives behind each piece, and let your imagination soar through the different stages of me .    Happy Exploring :)"
                                    link="https://aryadeep-portfolio-website.vercel.app/"
                                    github="/"

                                />
                            </div>

                            <div className='col-span-12'>
                                <ProjectDetails2

                                    title="Heart Attack Analysis"
                                    type="Individual Project"
                                    img={data1}
                                    summary="Whether it's evoking emotions or simply the provoking thought of who I am .. Yes many don't know me so here's a testament to some passions of my life. The tech stacks used in this project are Next JS , Tailwind CSS , EmailJS, Figma and Framer Motion. Immerse yourself in the captivating visuals, delve into the narratives behind each piece, and let your imagination soar through the different stages of me .    Happy Exploring :)"
                                    link="https://aryadeep-portfolio-website.vercel.app/"
                                    github="/"

                                />
                            </div>

                            <div className='col-span-12'>
                                <ProjectDetails

                                    title="ECO CLUB WEBSITE"
                                    type="Team Project"
                                    img={eco}
                                    summary=" Under Construction"
                                    link="/"
                                    github="/"

                                />
                            </div>




                            <div className='col-span-12'>
                                <ProjectDetails2

                                    title="UI/UX | GUIDANCE GRID "
                                    type="Team Project"
                                    img={ggui}
                                    summary=" Crafted with creativity and precision with my teammate Jacinth Mahanta | ECE under the esteemed umbrella of GDSC NITS , this is the UI Design of Guidance Grid which is a assitance cum blog site . The Site is still under construction. Happy Guiding :)"
                                    link="https://www.figma.com/file/l9XeySiNIo6PAzqfx68ecd/Guidance-Grid?type=design&node-id=0%3A1&mode=design&t=cDaLMzqkVRNY3qJx-1"
                                    github="/"

                                />
                            </div>
                            <div className='col-span-12'>
                                <ProjectDetails

                                    title="UI/UX | POSUA 2023"
                                    type="Team Project"
                                    img={posuaui}
                                    summary="Posua the spring fest of NITS , spreads out exuberance all around rejuvenating the land of culture. Through this UI Design , I along with my team mates Jacinth Mahanta , Maharnav Deka and Pragya Annesha Baruah bring to you the UI work of this Fest highlighting the plethora of events and diversity herewith . Happy Visiting :)"
                                    link="https://www.figma.com/file/XN4CiqL64oeZ897uWEWF4N/POSUA-2023?type=design&node-id=0%3A1&mode=design&t=U75lGJZCb2wnilJ0-1"
                                    github="/"

                                />
                            </div>

                            <div className='col-span-12'>
                                <ProjectDetails2

                                    title="UI/UX | AgriShare"
                                    type="Individual Project"
                                    img={agrishareui}
                                    summary="Pitched By me AgriShare-Agreed to connect is a one to one connection site where the NGOs or the student organizations can connect directly to the local farmers in buying or helping them  sell their surplus crop .The UI Design is kept simple with a thoughtful approach to connect the sides. The project is still under consruction by the Web Team. Happy Helping :)"
                                    link="https://www.figma.com/file/1AKO8jGB04awSvhasbUaW5/AgriShare?type=design&node-id=0%3A1&mode=design&t=UDOfptMPO8WjtTEN-1"
                                    github="/"

                                />
                            </div>
                            <div className='col-span-12'>
                                <ProjectDetails

                                    title="UI/UX | Me-Eat App"
                                    type="Individual Project"
                                    img={meeatui}
                                    summary="This was a app protoype for Pitch Your Innovation under Srijan 3.0 pitched by my colleague Sameer Zaidi . The UI Design is kept simple and the protoype includes easy user flow . The app helps you get your raw meat chopped at your own choice from nearby connected shops to your home. The UI includes light brown shades with a designed logo."
                                    link="https://www.figma.com/proto/gKjSzktK2uOgoFFhZBwFjP/me-eat-app?page-id=0%3A1&node-id=71-285&starting-point-node-id=71%3A277&mode=design&t=cvCM0K7uorZ7BO53-1"
                                    github="/"

                                />
                            </div>

                            <div className='col-span-12'>
                                <ProjectDetails2

                                    title="UI/UX | ECS WEBSITE2022"
                                    type="Team Project"
                                    img={ecs}
                                    summary="A week over made project for the ECS Website of 2022 , this team project along with Jacinth Mahanta and Maharnav Deka uses gradient feature from top to bottom . This is another piece of work under my post as Junior Media and Graphics Design Member at ECS"
                                    link="https://www.figma.com/file/pfXjOMgyrZIpumZ1mDqAg0/Ecs-website?type=design&node-id=0%3A1&mode=design&t=IwBPhPkFWT4Jb0hc-1"
                                    github="/"

                                />
                            </div>
                            <div className='col-span-12'>
                                <ProjectDetails

                                    title="UI/UX | TrinetraGeeks"
                                    type="Individual Project"
                                    img={trinetra}
                                    summary="A second secured project under FAST WEB hackathon hosted by ECS , NIT Silchar , with a fine simple hue of blue for all readers , a mini e-library Ui Design where you can spend your leisure time with enabled dark mode . This is one of the first projects of my UI/UX Career .The elements used are still minimalistic "
                                    link="https://www.figma.com/file/aDg1wRV4uQyAvusdUVK1cM/TrinetraGeeks?type=design&node-id=0%3A1&mode=design&t=W5WOeJmJyrjLAxQw-1"
                                    github="/"

                                />
                            </div>
                            {/* <div className='col-span-12'>
                                <ProjectDetails2

                                    title="UI/UX | ECS WEBSITE2022"
                                    type="Team Project"
                                    img={ecs}
                                    summary="A week over made project for the ECS Website of 2022 , this team project along with Jacinth Mahanta and Maharnav Deka uses gradient feature from top to bottom . This is another piece of work under my post as Junior Media and Graphics Design Member at ECS"
                                    link="https://www.figma.com/file/pfXjOMgyrZIpumZ1mDqAg0/Ecs-website?type=design&node-id=0%3A1&mode=design&t=IwBPhPkFWT4Jb0hc-1"
                                    github="/"

                                />
                            </div> */}

                            

                        </div>
                    </Layout>

                </motion.div>
            </main >

        </>
    )
}

export default projects

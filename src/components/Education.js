import React, { useRef } from 'react'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { useScroll, motion } from "framer-motion"
import TrackIcon from './TrackIcon';






const Details = ({ position, society, societyLink, time, address, work }) => {

    const ref = useRef(null);

    

    return (
        <li ref={ref} className='my-8  first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>

            <TrackIcon reference={ref} />
            <div>
                <h3 className='dark:text-light  font-bold text-2xl text-dark mb-1 sm:text-xl '> {position}&nbsp; <a href={societyLink} target='_blank' className=' dark:text-primary text-primaryDark/90'> @{society} </a> </h3>
                <span className='font-bold text-dark/70 dark:text-light/60'>
                    {time} | {address}
                    <p className='w-full mt-6 font-medium text-dark dark:text-light'>
                        {work}
                    </p>

                </span>

            </div>
            
        </li>
    )
}

const Education = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )





    return (
        <div className='mb-24'>
            <Layout className=''>
                <AnimatedText text="Journey Through " className='mb-2 mt-2' />
                <AnimatedText text="My Education" className=' !text-3xl font-bold text-dark/70 md:!text-2xl sm:!text-xl mb-8' />
            </Layout>



            <div ref={ref} className='w-[75%] mx-auto relative xs:w-[85%]'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9  top-1 w-[4px] h-full bg-dark origin-top  dark:bg-light sm:w-[3px]' />



                <div className='w-full flex flex-col items-start justify-between '>
                    <Details

                        position="NATIONAL INSTITUTE OF TECHNOLOGY SILCHAR" 
                        society="BTECH | Electronics And Communication Engineering"
                        companyLink=""
                        time="December 2021-Present" address="Silchar ,Assam, India"
                        work="My college life has been an incredible journey of growth, exploration through skills, and self-discovery. The support and guidance from my college community, fostered a nurturing environment that fueled my ambition and encouraged me to push my boundaries"

                    />


                    <Details

                        position="KENDRIYA VIDYALAYA A.F.S , BORJHAR" 
                        society="Passed Class 12 | Passed Class 10"
                        companyLink=""
                        time="2015-2021" address="Guwahati ,Assam, India"
                        work="At this crucial point of life, I was exposed to a comprehensive curriculum that nurtured both my intellectual and emotional development with my passion for writing and music set to another level."


                    />

                    <Details

                        position="ST Clare's Convent High School" society=""
                        companyLink=""
                        time="2007-2015" address="Guwahati , Assam , India"
                        work="As I reflect upon my journey, I am grateful for the foundation this school provided me. It equipped me with the knowledge, skills, and values. It was here that my passion for education , art and music ignited, to this voyage of life today.

                        "


                    />


                </div>






            </div>






        </div>
    )
}

export default Education

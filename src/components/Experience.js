import React, { useRef } from 'react'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { useScroll , motion } from "framer-motion"
import TrackIcon from './TrackIcon';






const Details = ({ position, society, societyLink, time, address, work }) => {

    const ref = useRef(null);


    return (
        <li ref={ref} className='my-8  first:mt-0last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>

            <TrackIcon reference={ref} />
            <div>
                <h3 className='dark:text-light  font-bold text-2xl text-dark mb-1'> {position}&nbsp; <a href={societyLink} target='_blank' className=' dark:text-light/80 text-primaryDark/90'> @{society} </a> </h3>
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

const Experience = () => {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )





    return (
        <div className='mb-24'>
            <Layout className=''>
                <AnimatedText text="Growing through " className='mb-2 ' />
                <AnimatedText text="My Experience" className=' !text-3xl font-bold text-dark/70' />
            </Layout>



            <div ref={ref} className='w-[75%] mx-auto relative '>

                <motion.div 
                style={{ scaleY: scrollYProgress }} 
                className='dark:bg-light absolute left-9  top-1 w-[4px] h-full bg-dark origin-top'/>



                <ul className='w-full flex flex-col items-start justify-between ml-10'>
                    <Details

                        position="General Secretary" society="Electronics And Communication Society"
                        companyLink=""
                        time="June 2023-Present" address="Silchar ,Assam, India"
                        work="Currently leading the team of ECS with other respective domain heads . Includes "

                    />

                    <Details

                        position="Junior Media And Graphics Designer" society="Electronics And Communication Society"
                        companyLink=""
                        time="August 2022-June-2023" address="Silchar ,Assam, India"
                        work="okokokokokkkoko okokkkokokokoko okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko okokkkokokokokookokkkokokokokookokkkokokokoko v okokkkokokokokookokkkokokokokookokkkokokokokookokkkokokokoko okokkkokokokoko  kokokok"


                    />

                    <Details

                        position="Moderator" society="SYMPHONITS | Music Club Of NITS"
                        companyLink=""
                        time="March 2023 - Present" address="Silchar ,Assam, India"
                        work="okokokokokkkoko okokkkokokokoko okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko okokkkokokokokookokkkokokokokookokkkokokokoko v okokkkokokokokookokkkokokokokookokkkokokokokookokkkokokokoko okokkkokokokoko  kokokok"


                    />

                    <Details

                        position="Core Member" society="SYMPHONITS | Music Club Of NITS"
                        companyLink=""
                        time="June 2023-Present" address="Silchar ,Assam, India"
                        work="okokokokokkkoko okokkkokokokoko okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko okokkkokokokokookokkkokokokokookokkkokokokoko v okokkkokokokokookokkkokokokokookokkkokokokokookokkkokokokoko okokkkokokokoko  kokokok"


                    />

                    {/* <Details

                        position="UI/UX Design Member" society="Google Developer Students Club"
                        companyLink=""
                        time="June 2023-Present" address="Silchar ,Assam, India"
                        work="okokokokokkkoko okokkkokokokoko okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko okokkkokokokokookokkkokokokokookokkkokokokoko v okokkkokokokokookokkkokokokokookokkkokokokokookokkkokokokoko okokkkokokokoko  kokokok"


                    />



                    


                    <Details

                        position="Content Associate" society="Entrepreunership Cell , NITS"
                        companyLink=""
                        time="June 2023-Present" address="Silchar ,Assam, India"
                        work="okokokokokkkoko okokkkokokokoko okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko okokkkokokokokookokkkokokokokookokkkokokokoko v okokkkokokokokookokkkokokokokookokkkokokokokookokkkokokokoko okokkkokokokoko  kokokok"


                    />


                    <Details

                        position="Junior Executive" society="NITS ECO CLUB"
                        companyLink=""
                        time="June 2023-Present" address="Silchar ,Assam, India"
                        work="okokokokokkkoko okokkkokokokoko okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko okokkkokokokokookokkkokokokokookokkkokokokoko v okokkkokokokokookokkkokokokokookokkkokokokokookokkkokokokoko okokkkokokokoko  kokokok"


                    />


                    <Details

                        position="Volunteer" society="Robin Hood Army"
                        companyLink=""
                        time="June 2023-Present" address="Silchar ,Assam, India"
                        work="okokokokokkkoko okokkkokokokoko okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko okokkkokokokokookokkkokokokokookokkkokokokoko v okokkkokokokokookokkkokokokokookokkkokokokokookokkkokokokoko okokkkokokokoko  kokokok"


                    /> */}
                </ul>




                

            </div>




            

        </div>
    )
}

export default Experience

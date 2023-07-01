import React from 'react'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { motion } from "framer-motion";


const Details = ({ position, society, societyLink, time, address, work }) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <div>
            <h3 className=' font-bold text-2xl text-dark mb-1'> {position}&nbsp; <a href={societyLink}  target='_blank' className='text-primaryDark/90'> @{society} </a> </h3>
            <span className='font-bold text-dark/70 '>
                {time} | {address}
                <p className='w-full mt-6 font-medium text-dark'>
                    {work}
                </p>

            </span>

        </div>
    </li>
}

const Experience = () => {
    return (
        <div className='mb-20'>
            <Layout className=''>
                <AnimatedText text="Growing through " className='mb-2 ' />
                <AnimatedText text="My Experience" className=' !text-3xl font-bold text-dark/70' />
            </Layout>



            <div className='w-[75%] mx-auto relative '>

            <div className='absolute left-28 bg-dark top-0 w-[4px] h-full origin-top'>
            


            </div>



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

<Details

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
                   
                   
                   />
                </ul>

            </div>

        </div>
    )
}

export default Experience

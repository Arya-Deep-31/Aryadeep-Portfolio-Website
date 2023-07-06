// import React, { useRef } from 'react'
// import Layout from '@/components/Layout'
// import AnimatedText from '@/components/AnimatedText'
// import { useScroll , motion } from "framer-motion"
// import TrackIcon from './TrackIcon';






// const Details = ({ position, society, societyLink, time, address, work }) => {

//     const ref = useRef(null);


//     return (
//         <li ref={ref} className='my-8  first:mt-0last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>

//             <TrackIcon reference={ref} />
//             <div>
//                 <h3 className='dark:text-light  font-bold text-2xl text-dark mb-1'> {position}&nbsp; <a href={societyLink} target='_blank' className=' dark:text-primary text-primaryDark/90'> @{society} </a> </h3>
//                 <span className='font-bold text-dark/70 dark:text-light/60'>
//                     {time} | {address}
//                     <p className='w-full mt-6 font-medium text-dark dark:text-light'>
//                         {work}
//                     </p>

//                 </span>

//             </div>
//         </li>
//     )
// }

// const Experience = () => {

//     const ref = useRef(null);

//     const {scrollYProgress} = useScroll(
//         {
//             target: ref,
//             offset: ["start end", "center start"]
//         }
//     )





//     return (
//         <div className='mb-24'>
//             <Layout className=''>
//                 <AnimatedText text="Growing through " className='mb-2 ' />
//                 <AnimatedText text="My Experience" className=' !text-3xl font-bold text-dark/70' />
//             </Layout>



//             <div ref={ref} className='w-[75%] mx-auto relative '>

//                 <motion.div 
//                 style={{ scaleY: scrollYProgress }} 
//                 className='dark:bg-light absolute left-9  top-10 w-[4px] h-full bg-dark origin-top'/>



//                 <ul className='w-full flex flex-col items-start justify-between ml-10'>
//                     <Details

//                         position="General Secretary" society="Electronics And Communication Society"
//                         companyLink=""
//                         time="June 2023-Present" address="Silchar ,Assam, India"
//                         work="Currently leading the team of ECS with other respective domain heads . Includes "

//                     />

//                     <Details

//                         position="Junior Media And Graphics Designer" society="Electronics And Communication Society"
//                         companyLink=""
//                         time="August 2022-June-2023" address="Silchar ,Assam, India"
//                         work="okokokokokkkoko okokkkokokokoko okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko okokkkokokokokookokkkokokokokookokkkokokokoko v okokkkokokokokookokkkokokokokookokkkokokokokookokkkokokokoko okokkkokokokoko  kokokok"


//                     />

//                     <Details

//                         position="Moderator" society="SYMPHONITS | Music Club Of NITS"
//                         companyLink=""
//                         time="March 2023 - Present" address="Silchar ,Assam, India"
//                         work="okokokokokkkoko okokkkokokokoko okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko okokkkokokokokookokkkokokokokookokkkokokokoko v okokkkokokokokookokkkokokokokookokkkokokokokookokkkokokokoko okokkkokokokoko  kokokok"


//                     />

//                     <Details

//                         position="Core Member" society="SYMPHONITS | Music Club Of NITS"
//                         companyLink=""
//                         time="June 2023-Present" address="Silchar ,Assam, India"
//                         work="okokokokokkkoko okokkkokokokoko okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko okokkkokokokokookokkkokokokokookokkkokokokoko v okokkkokokokokookokkkokokokokookokkkokokokokookokkkokokokoko okokkkokokokoko  kokokok"


//                     />

//                     <Details

//                         position="UI/UX Design Member" society="Google Developer Students Club"
//                         companyLink=""
//                         time="June 2023-Present" address="Silchar ,Assam, India"
//                         work="okokokokokkkoko okokkkokokokoko okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko okokkkokokokokookokkkokokokokookokkkokokokoko v okokkkokokokokookokkkokokokokookokkkokokokokookokkkokokokoko okokkkokokokoko  kokokok"


//                     />






//                     <Details

//                         position="Content Associate" society="Entrepreunership Cell , NITS"
//                         companyLink=""
//                         time="June 2023-Present" address="Silchar ,Assam, India"
//                         work="okokokokokkkoko okokkkokokokoko okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko okokkkokokokokookokkkokokokokookokkkokokokoko v okokkkokokokokookokkkokokokokookokkkokokokokookokkkokokokoko okokkkokokokoko  kokokok"


//                     />


//                     <Details

//                         position="Junior Executive" society="NITS ECO CLUB"
//                         companyLink=""
//                         time="June 2023-Present" address="Silchar ,Assam, India"
//                         work="okokokokokkkoko okokkkokokokoko okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko okokkkokokokokookokkkokokokokookokkkokokokoko v okokkkokokokokookokkkokokokokookokkkokokokokookokkkokokokoko okokkkokokokoko  kokokok"


//                     />


//                     <Details

//                         position="Volunteer" society="Robin Hood Army"
//                         companyLink=""
//                         time="June 2023-Present" address="Silchar ,Assam, India"
//                         work="okokokokokkkoko okokkkokokokoko okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko o  okokkkokokokoko okokkkokokokoko okokkkokokokokookokkkokokokokookokkkokokokoko v okokkkokokokokookokkkokokokokookokkkokokokokookokkkokokokoko okokkkokokokoko  kokokok"


//                     />
//                 </ul>






//             </div>






//         </div>
//     )
// }

// export default Experience




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
                <h3 className='dark:text-light  font-bold text-2xl text-dark mb-1'> {position}&nbsp; <a href={societyLink} target='_blank' className=' dark:text-primary text-primaryDark/90'> @{society} </a> </h3>
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

    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )





    return (
        <div className='mb-24'>
            <Layout className=''>
                <AnimatedText text="Growing Through " className='mb-2 mt-4' />
                <AnimatedText text="My Experience" className=' !text-3xl font-bold text-dark/70  md:!text-2xl sm:!text-xl mb-8' />
            </Layout>



            <div ref={ref} className='w-[75%] mx-auto relative xs:w-[85%]'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9  top-1 w-[4px] h-full bg-dark origin-top  dark:bg-light' />



                <ul className='w-full flex flex-col items-start justify-between '>
                    <Details

                        position="General Secretary"
                        society="Electronics And Communication Society"
                        companyLink=""
                        time="June 2023-Present" address="Silchar ,Assam, India"
                        work="As the General Secretary of the Electronics and Communication Society , my primary focus is on fostering a vibrant and enriching environment for students interested in the field of hustling . I lead a team of passionate individuals to organize technical workshops, seminars, and guest lectures, inviting industry experts and professors to share their knowledge and insights."

                    />


                    <Details

                        position="Junior Media And Graphics Designer" society="Electronics And Communication Society"
                        time="August 2022-June-2023" address="Silchar ,Assam, India"
                        work="
                        As the Junior Media and Graphics Designer at the Electronics and Communication Society, I contributed by creating visually engaging content to promote our activities.It was this point of life when i saw enough growth in my design skills, we worked on video showcases too.
                        "


                    />

                    <Details

                        position="Moderator" society="SYMPHONITS | Music Club Of NITS"
                        companyLink=""
                        time="March 2023 - Present" address="Silchar ,Assam, India"
                        work="
                        As the Moderator in the Music Club of NITS, my work revolves around creating a vibrant and inclusive musical community. We the team of moderators facilitate smooth operations during club meetings, rehearsals, and performances, ensuring a harmonious and supportive environment for our talented members.
                        

                        "


                    />

                    <Details

                        position="Core Member" society="SYMPHONITS | Music Club Of NITS"
                        companyLink=""
                        time="June 2023-Present" address="Silchar ,Assam, India"
                        work="As a core member of the Music Club at NITS, my work and contributions are centered around promoting musical talent and creating a vibrant musical community. Actively participate in organizing club activities, including rehearsals, performances, and event management. We collaborated with fellow core members to curate engaging musical events, talent showcases, and competitions. Additionally, we strive to foster an inclusive and supportive environment for all music enthusiasts ! ."


                    />


                    <Details

                        position="UI/UX Design Member"
                        society="GDSC NIT Silchar"
                        companyLink=""
                        time="June 2023-Present" address="Silchar ,Assam, India"
                        work="It was a great journey to work on UI/UX Designs and be a part of this esteemed club which kept my UI/UX enthusiasm engaging with projects such as Guidance Grid along with fellow team members"


                    />

<Details

position="Content Associate" society="E-Cell , NITS"
companyLink=""
time="June 2023-Present" address="Silchar ,Assam, India"
work="As the Content Associate in the E-Cell, my role was to generate compelling and informative content that promotes entrepreneurship and engages our target audience. We had different modules for which contents were created accordingly. By providing market insights, and fostering community engagement, we aimed to amplify the voice of entrepreneurship and cultivate a culture of innovation and entrepreneurship at our institution.

"

/>


<Details

position="Junior Executive"
society="NITS ECO CLUB"
companyLink=""
time="June 2023-Present" address="Silchar ,Assam, India"
work="As a Junior Executive in NITS Eco Club, I am dedicated to making a positive impact on the environment and promoting sustainable practices within our community. I actively participated in organizing and implementing various eco-friendly initiatives, such as tree planting drives, recycling campaigns, and awareness campaigns on renewable energy and waste management. Also worked as a content and design member."


/>

<Details

position="Volunteer" society="Robin Hood Army"
companyLink=""
time="April 2022-Present" address="Silchar ,Assam, India"
work=" As a volunteer in the Robin Hood Army, I am committed to fighting hunger and lack of education in our society. We participate in food drives, where we collect surplus food from donors and distribute it to those in need. By dedicating our efforts, we contribute minimal to the noble cause of education and basic need of food.

"


/>



                </ul>


            </div>






        </div>
    )
}

export default Experience


import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/profilePic.webp"
import Signature from "../../public/images/profile/signature.webp"
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from "framer-motion";
import TypewriterComponent from 'typewriter-effect'



export default function Home() {
  return (


    <>

      <Head>
        <title>Aryadeep Portfolio</title>
        <meta name="description" content="home page" />

      </Head>

     




      <TransitionEffect />
      


      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} >


        <main className='flex w-full flex-col items-center justify-center lg:mb-10'>




          <Layout className=''>




            <div className='grid -my-8 w-full grid-cols-8 gap-12 items-center justify-between  lg:p-8 lg:grid-cols-3 lg:gap-24  md:p-12 md:grid-cols-3 md:mt-4 sm:p-8 sm:mt-0 sm:grid-cols-3  xs:-mt-5'>







              <div className='col-span-2 w-full flex flex-col items-center justify-center lg:col-span-4 md:col-span-4 sm:col-span-4'>
                <span className='xs:mr-2 xs:ml-0 text-dark font-bold text-4xl dark:text-light md:text-4xl sm:text-3xl xs:text-2xl lg:mt-8 md:mt-6 sm:mt-2 '> Hey there !  </span>

                <div className='-mt-8 w-56 rotate-12 xl:w-50 sm:w-48'>
                  <Image alt="Music Profile" src={Signature} />

                </div>



                <span className='mb-4 -mt-8 text-dark/90 text-xl dark:text-light xl:text-xl  md:text-xl sm:text-lg xs:text-base xl:mr-2'>is passionate about</span>

                <span className=' font-bold text-5xl ml-1 text-dark shoot dark:text-primary xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl xs:mr-2'>
                  <TypewriterComponent options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                      "Designing..",
                      "Prototyping..",
                      "Developing..",
                      "UI/UX...",
                      "AI / ML...",
                    ],
                  }} />
                </span>


              </div>





              <div className='col-span-4 w-full mt-6 relative -mb-8 xl:-mb-4 lg:mb-2 p-4 ml-4  justify-end  md:p-0.5 sm:p-0 sm:ml-0 xs:-mt-8 xs:m-0 xs:-ml-2'>
                <Image src={profilePic} quality={80} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={false} alt="Aryadeep Gogoi" className="w-[95%] sm:w-full h-full rounded-2xl " />
              </div>









              <div className='col-span-2  w-full h-[60%] flex flex-col items-center justify-center lg:col-span-4 md:col-span-4 sm:col-span-4  xs:-ml-2'>



                <span className='  text-dark/90 text-lg dark:text-light  lg:text-2xl md:text-xl sm:text-lg xs:text-base'> Aryadeep Gogoi this side , travelling in the voyage of codes advancing through the waves of design and development</span>
                <span className=' mt-4 text-dark/90 text-lg dark:text-light  lg:text-2xl md:text-xl sm:text-lg xs:text-base'>Feel free to explore my portfolio and get in touch if you are interested in collaborating on an exciting project. </span>
                <span className=' mt-4 mb-8 text-dark/90 text-lg dark:text-light lg:text-2xl  md:text-xl sm:text-lg xs:text-base'>Lets embark on a journey of innovation and creativity but before that make sure you navigate through my digital sanctuary !

                </span>

                <div className='flex flex-row mb-4 lg:mb-6'>


                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className='mr-2'>
                    <a href="https://drive.google.com/file/d/1j0Wj68TUpTsZIHNMMMYfbg2u5Taxq358/view?usp=sharing" title="Download Resume" className='rounded-lg bg-dark text-light p-1 px-4 text-lg dark:bg-primaryDark dark:text-white xl:text-base lg:text-lg sm:text-base' target='_blank'> My Resume  </a>


                  </motion.div>

                </div>


              </div>




            </div>


          </Layout>


        </main>
      </motion.div>







    </>
  )
}

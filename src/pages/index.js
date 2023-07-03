import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import Signature from "../../public/images/profile/signature.png"
import AnimatedText from '@/components/AnimatedText'
import TypingText from '@/components/TypingText'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from "framer-motion";




export default function Home() {
  return (
    <>
      <Head>
        <title>Aryadeep's Portfolio</title>
        <meta name="description" content="home page" />

      </Head>




      <TransitionEffect />


      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>

        <main className='flex w-full flex-col items-center justify-center lg:mb-10'>
          <Layout className=''>




            <div className='grid -my-8 w-full grid-cols-8 gap-12 items-center justify-between  lg:p-8 lg:grid-cols-3 lg:gap-24  md:p-12 md:grid-cols-3 md:mt-4 sm:p-16 sm:mt-0 sm:grid-cols-3'>



              <div className='col-span-2 w-full flex flex-col items-center justify-center lg:col-span-4 md:col-span-4 sm:col-span-4  xs:-ml-2'>
              <span className='-mt-8 text-dark font-bold text-5xl dark:text-light  md:text-4xl sm:text-3xl xs:text-2xl '>Hey ! I'm </span>

                <div className='-mt-8 w-60 rotate-12 sm:w-48'> 
                <Image src={Signature}/>

                </div>


                <span className='mb-4 -mt-8 text-dark/90 text-2xl dark:text-light  md:text-xl sm:text-lg xs:text-base'>passionate about</span>

                <span className=' font-bold text-6xl ml-1 text-dark shoot dark:text-primary md:text-3xl sm:text-3xl xs:text-2xl'><TypingText /></span>


              </div>





              <div className='col-span-4 -my-8 w-full relative mb-2 p-4 ml-4  justify-end  md:p-0.5 sm:p-0 '>
                <Image src={profilePic} alt="Aryadeep Gogoi" className="w-full h-full rounded-2xl " />
              </div>









              <div className='col-span-2 -mt-8 w-full h-[60%] flex flex-col items-center justify-center lg:col-span-4 md:col-span-4 sm:col-span-4  xs:-ml-2'>



                <span className='  text-dark/90 text-lg dark:text-light  md:text-xl sm:text-lg xs:text-base'>passionate  passionate about passionat passionate about passionate about passionate about passionate aboutabout</span>
                <span className=' mt-4 text-dark/90 text-lg dark:text-light  md:text-xl sm:text-lg xs:text-base'>passionate  passionate about passnate about passionate about passionate about passionate about passionate aboutabout</span>
                <span className=' mt-4 mb-8 text-dark/90 text-lg dark:text-light  md:text-xl sm:text-lg xs:text-base'>passionate  passionate about passionate assionate about passionate about passionate aboutabout</span>

                <div className='flex flex-row '>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} >
                    <button className='mr-4 -ml-6 rounded-lg bg-dark text-light p-1 px-4 text-lg dark:bg-primaryDark dark:text-white ' href="/" target='_blank'> My Resume </button>


                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} >
                    <button className='rounded-lg bg-dark text-light p-1 px-4 text-lg dark:bg-primaryDark dark:text-white ' href="/" target='_blank'> My Resume </button>


                  </motion.div>

                </div>


              </div>




            </div>


          </Layout>


        </main>
      </motion.div>





      {/* <main className='flex items-center text-primaryDark w-full h-screen '>

       


        <div className=' w-full flex md:flex-row flex-col justify-around items-start mt-5'>


          <div className='flex items-center justify-center h-1/2 mt-30 ml-10'>
            <ul>
              <div className='mt-10'>
              <span className=' text-dark font-bold text-4xl dark:text-light'>  I'm Aryadeep  Gogoi  </span>

              </div>

              <div className='mt-3'>
                <span className=' text-dark/90  p-12 text-2xl dark:text-light'>passionate about</span>
              </div>

<div className='pt-6 pl-6'>
<span className='font-bold text-4xl text-dark shoot dark:text-primary'><TypingText/></span>


</div>

            </ul>

          </div>



          <div className=' text-light mt-8 ml-20'>
            <div className='grid place-content-center'>
              <Image src={profilePic} alt="Aryadeep Gogoi" className='w-full h-auto ' />
            </div>
          </div>


          <div className='flex items-center justify-center h-screen w-1/4 '>
            <ul>
              <span className=' text-dark  text-xl dark:text-primary'>  I'm Aryadeep adeep  Gogoi   I'm A I'm Aryade adeep  Gogoi   I'm A I'm Aryade Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm Aryadeep  Gogoi   I'm Aryadeep  Gogoi  </span>
            </ul>
          </div>



        </div>



      </main> */}

    </>
  )
}

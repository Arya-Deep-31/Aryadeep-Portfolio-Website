import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"
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

        <main className='flex w-full flex-col items-center justify-center mb-20'>
          <Layout className=''>




            <div className='grid w-full grid-cols-8 gap-12 items-center justify-between  lg:p-8 lg:grid-cols-3  md:p-12 md:grid-cols-3 md:mt-4 sm:p-16 sm:mt-0 sm:grid-cols-3'>



              <div className='col-span-2 w-full h-1/2 bg-dark dark:bg-primaryDark  justify-end '>
                
                    <div className=''>
                      <span className=' text-dark font-bold text-4xl dark:text-light'>  I'm Aryadeep  Gogoi  </span>

                    </div>

                    <div className='mt-3'>
                      <span className=' text-dark/90 text-xl dark:text-light'>passionate about</span>
                    </div>

                    <div className='pt-3'>
                      <span className='font-bold text-3xl text-dark shoot dark:text-primary'><TypingText /></span>

                    </div>
            
              </div>





              <div className='col-span-4 w-full relative bg-light p-4 ml-4 dark:bg-primaryDark dark:border-primary justify-end'>
                <Image src={profilePic} alt="Aryadeep Gogoi" className="w-full h-full rounded-2xl " />
              </div>






              <div className='col-span-2 flex flex-col items-start justify-start'>

                <p className='pb-3'> I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm AryadI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm Aryad
                </p>

                <p className='pb-4'>I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm AryadI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm Aryad</p>
                <p className='pb-2'>I'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm AryadI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm AryadI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm AryadI'm Aryadeep  Gogoi   I'm A I'm Aryadeep  Gogoi ryadeep  Gogoi  I'm Aryadeep  Gogoi   I'm Aryad</p>

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

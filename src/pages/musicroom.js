import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { motion } from "framer-motion";



const musicroom = () => {
    return (
        <>
            <Head>
                <title> Aryadeep Gogoi's | Contact's Page

                </title>
                <meta name=" description" content="passion 1"></meta>
            </Head>

            <main>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
                    <Layout className=''>
                        <AnimatedText text="Welcome" className='mb-2 ' />
                        <AnimatedText text="To Symphonic Verse" className=' !text-3xl font-bold text-dark/70' />
                    </Layout>

                </motion.div>


            </main>

        </>
    )
}

export default musicroom

import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { motion } from "framer-motion";
import { useRef } from "react";
import TransitionEffect from '@/components/TransitionEffect';

const Contact = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                alert("Thank you for connecting, I'll get back to you soon");
            } else {
                alert("Failed to send the message. Please try again later.");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Failed to send the message. Please try again later.");
        }

        e.target.reset();
    };

    return (
        <>
            <Head>
                <title> Aryadeep Gogoi | Contact Page </title>
                <meta name="description" content="about my contact" />
            </Head>
            <TransitionEffect />

            <main className='flex flex-col items-center justify-center p-4 -mt-4'>
                <motion.div className='w-[60%] lg:w-[80%] sm:w-[90%] md:mt-6 -mt-2' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
                    <Layout>
                        <AnimatedText text="Connect With Me" />
                        <AnimatedText text="Or drop a feedback" className='!text-2xl font-bold text-dark/70 sm:!text-xl md:mb-6' />
                    </Layout>

                    <div className='dark:bg-darker/80 dark:shadow-primary/60 dark:border-primary p-10 mx-auto flex flex-col items-center justify-center rounded-3xl border border-solid bg-white/20 shadow-2xl w-full mb-20'>
                        <section id="contact" className='w-full items-center justify-center' mb={5}>
                            <form ref={form} onSubmit={sendEmail} className='text-dark/80 font-bold'>
                                <div className='mb-4 text-xl sm:text-sm dark:text-light'>
                                    Enter your Name
                                    <input className='p-1 mt-2 rounded w-full border-2 text-base sm:text-sm dark:text-dark/80' type="text" name="name" placeholder="Your Full Name" required />
                                </div>
                                <div className='mb-4 text-xl sm:text-sm dark:text-light'>
                                    Enter your Email
                                    <input type="email" className='p-1 mt-2 rounded w-full border-2 text-base sm:text-sm dark:text-dark/80' name="email" placeholder="Your Email" required />
                                </div>
                                <div className='-mb-4 text-xl sm:text-sm dark:text-light'>
                                    Enter your Message
                                    <textarea className='p-1 mt-2 rounded w-full border-2 text-base sm:text-sm dark:text-dark/80' name="message" rows="4" placeholder="Drop Your Message" required></textarea>
                                </div>
                                <div className='flex items-center justify-center mt-4 -mb-2'>
                                    <motion.button whileHover={{ scale: 1.1 }} transition={{ duration: 1 }} className='border border-dark rounded-full w-40 bg-dark/80 text-light mt-4 ml-2 dark:bg-primary dark:text-darker dark:font-bold p-1' type="submit">
                                        Submit
                                    </motion.button>
                                </div>
                            </form>
                        </section>
                    </div>
                </motion.div>
            </main>
        </>
    );
};

export default Contact;

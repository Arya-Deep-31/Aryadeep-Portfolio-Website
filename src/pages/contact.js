import React, { useState } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { motion } from "framer-motion";
import {
    Button,

    FormControl,
    FormErrorMessage,
    FormLabel,

    Input,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { sendContactForm } from "../lib/api";
import TransitionEffect from '@/components/TransitionEffect';


// const initValues = { name: "", email: "", subject: "", message: "" };

// const initState = { isLoading: false, error: "", values: initValues };




// const contact = () => {



//     const toast = useToast();
//     const [state, setState] = useState(initState);
//     const [touched, setTouched] = useState({});

//     const { values, isLoading, error } = state;

//     const onBlur = ({ target }) =>
//         setTouched((prev) => ({ ...prev, [target.name]: true }));

//     const handleChange = ({ target }) =>
//         setState((prev) => ({
//             ...prev,
//             values: {
//                 ...prev.values,
//                 [target.name]: target.value,
//             },
//         }));



//     const onSubmit = async () => {
//         setState((prev) => ({
//             ...prev,
//             isLoading: true,
//         }));
//         try {
//             await sendContactForm(values);
//             setTouched({});
//             setState(initState);
//             toast({
//                 title: "Message sent to Aryadeep Gogoi",
//                 status: "success",
//                 duration: 2000,
//                 position: "top",

//             });
//         } catch (error) {
//             setState((prev) => ({
//                 ...prev,
//                 isLoading: false,
//                 error: error.message,
//             }));
//         }
//     };




//     return (
//         <>
//             <Head>
//                 <title> Aryadeep Gogoi | Contact Page

//                 </title>
//                 <meta name=" description" content="about my contact"></meta>
//             </Head>
//             <TransitionEffect />

//             <main className=' flex flex-col items-center justify-center p-4 '>
//                 <motion.div className='' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
//                     <Layout className=''>
//                         <AnimatedText text="Connect With Me" className='' />
//                         <AnimatedText text="Or drop a feedback" className=' !text-2xl font-bold text-dark/70 mb-4 sm:!text-xl' />
//                     </Layout>



//                     <div className='  dark:bg-darker/80 dark:shadow-primary/60 dark:border-primary p-10 mx-auto flex flex-col items-center justify-center rounded-3xl border border-solid  bg-white/40 shadow-2xl w-full  mb-20'>

//                         {error && (
//                             <Text className='dark:text-light text-dark text-xl mb-2' >
//                                 {error}
//                             </Text>
//                         )}






//                         <FormControl className='w-full items-center justify-center' isRequired isInvalid={touched.name && !values.name} mb={5}>
//                             <FormLabel className=' text-dark/80 font-bold dark:text-light '>Enter Your Name </FormLabel>
//                             <Input className='rounded w-full'

//                                 type="text"
//                                 name="name"
//                                 errorBorderColor="red.300"
//                                 value={values.name}
//                                 onChange={handleChange}
//                                 onBlur={onBlur}
//                             />
//                             <FormErrorMessage className='dark:text-light'>Required</FormErrorMessage>
//                         </FormControl>

//                         <FormControl className='w-full items-center justify-center' isRequired isInvalid={touched.email && !values.email} mb={5}>
//                             <FormLabel className='text-dark/80 font-bold dark:text-light'>Enter Your Email </FormLabel>
//                             <Input className='rounded w-full mb-2 '
//                                 type="email"
//                                 name="email"
//                                 errorBorderColor="red.300"
//                                 value={values.email}
//                                 onChange={handleChange}
//                                 onBlur={onBlur}
//                             />
//                             <FormErrorMessage className='dark:text-light'>Required</FormErrorMessage>
//                         </FormControl>

//                         <FormControl className=' w-full items-center justify-center'
//                             mb={5}
//                             isRequired
//                             isInvalid={touched.subject && !values.subject}
//                         >
//                             <FormLabel className='text-dark/80 font-bold dark:text-light'>Subject </FormLabel>
//                             <Input className='rounded w-full mb-2 lg:w-full '
//                                 type="text"
//                                 name="subject"
//                                 errorBorderColor="red.300"
//                                 value={values.subject}
//                                 onChange={handleChange}
//                                 onBlur={onBlur}
//                             />
//                             <FormErrorMessage className='dark:text-light'>Required</FormErrorMessage>
//                         </FormControl>

//                         <FormControl className='w-full items-center justify-center'
//                             isRequired
//                             isInvalid={touched.message && !values.message}
//                             mb={5}
//                         >
//                             <FormLabel className='text-dark/80 font-bold dark:text-light'>Message </FormLabel>
//                             <Textarea className='rounded w-full mb-2 lg:w-full'
//                                 type="text"
//                                 name="message"
//                                 rows={3}
//                                 errorBorderColor="red"
//                                 value={values.message}
//                                 onChange={handleChange}
//                                 onBlur={onBlur}
//                             />

//                             <FormErrorMessage className='dark:text-light'>Required</FormErrorMessage>
//                         </FormControl>


//                         <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 1 }} >
//                             <Button className='border border-dark rounded-full w-40  bg-dark/80 text-light mt-4 ml-2 dark:bg-primary dark:text-darker dark:font-bold p-1 md:w-full sm:w-full'
//                                 variant="outline"
//                                 colorScheme="blue"
//                                 isLoading={isLoading}
//                                 disabled={
//                                     !values.name || !values.email || !values.subject || !values.message
//                                 }
//                                 onClick={onSubmit}

//                             >


//                                 Submit
//                             </Button>

//                         </motion.div>



//                     </div>




//                 </motion.div>



//             </main>

//         </>
//     )
// }

// export default contact





const Contact = () => {
    const handleClick2 = () => {
        
        console.log("Thank you for connecting, I'll get back to you soon");
    };
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_9bjg769",
                "template_vctzpvh",
                form.current,
                "mys_0toZYUFIW7n78"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    };
    return (

        <>
            <Head>
                <title> Aryadeep Gogoi | Contact Page

                </title>
                <meta name=" description" content="about my contact"></meta>
            </Head>
            <TransitionEffect />

            <main className=' flex flex-col items-center justify-center p-4 -mt-4'>
                <motion.div className='w-[60%] lg:w-[80%] sm:w-[90%] md:mt-6 -mt-2' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
                    <Layout className=''>
                        <AnimatedText text="Connect With Me" className='' />
                        <AnimatedText text="Or drop a feedback" className=' !text-2xl font-bold text-dark/70 sm:!text-xl md:mb-6' />
                    </Layout>

                    <div className='  dark:bg-darker/80 dark:shadow-primary/60 dark:border-primary p-10 mx-auto flex flex-col items-center justify-center rounded-3xl border border-solid  bg-white/20 shadow-2xl w-full  mb-20'>



                        <section id="contact" className='w-full items-center justify-center ' mb={5}>
                            <form ref={form} onSubmit={sendEmail} className=' text-dark/80 font-bold  '>
                                <div className='mb-4 text-xl sm:text-sm dark:text-light'> Enter your Name
                                    <input className='p-1 mt-2 rounded w-full border-2 text-base sm:text-sm dark:text-dark/80' type="text" name="name" placeholder="  Your Full Name" required />


                                </div>

                                <div className='mb-4 text-xl sm:text-sm dark:text-light'> Enter your Email
                                    <input type="email" className='p-1 mt-2 rounded w-full border-2 text-base sm:text-sm dark:text-dark/80' name="email" placeholder="  Your Email" required />


                                </div>

                                <div className='-mb-4 text-xl sm:text-sm dark:text-light'> Enter your Message
                                    <textarea className='p-1 mt-2 rounded w-full border-2 text-base sm:text-sm dark:text-dark/80' 
                                        name="message"
                                        rows="4"
                                        placeholder="  Drop Your Message"
                                        required
                                    ></textarea>

                                </div>

<div className='flex items-center justify-center mt-4 -mb-2'>
<motion.button whileHover={{ scale: 1.1 }} transition={{ duration: 1 }}
                                    onClick={handleClick2}
                                    className=' border border-dark rounded-full w-40  bg-dark/80 text-light mt-4 ml-2 dark:bg-primary dark:text-darker dark:font-bold p-1'
                                    type="Submit"
                                    
                                >
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
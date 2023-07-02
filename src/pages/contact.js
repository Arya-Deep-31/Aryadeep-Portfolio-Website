import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { motion } from "framer-motion";
import {
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };




const contact = () => {



    const toast = useToast();
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});

    const { values, isLoading, error } = state;

    const onBlur = ({ target }) =>
        setTouched((prev) => ({ ...prev, [target.name]: true }));

    const handleChange = ({ target }) =>
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            await sendContactForm(values);
            setTouched({});
            setState(initState);
            toast({
                title: "Message sent to Aryadeep Gogoi.",
                status: "success",
                duration: 2000,
                position: "top",
            });
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
    };



    return (
        <>
            <Head>
                <title> Aryadeep Gogoi's | Contact's Page

                </title>
                <meta name=" description" content="about my contact"></meta>
            </Head>

            <main className='w-full'>
                <motion.div className='' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
                    <Layout className=''>
                        <AnimatedText text="Connect With Me" className=' ' />
                        <AnimatedText text="Or drop a feedback" className=' !text-3xl font-bold text-dark/70 mb-10' />
                    </Layout>

                    

                    <div className=' grid items-center justify-center rounded-3xl border border-solid  bg-white/40 shadow-2xl w-1/2 mb-20'>

                    {error && (
                        <Text color="red.300" my={4} fontSize="xl">
                            {error}
                        </Text>
                    )}

                        <FormControl className='grid w-full items-center justify-center' isRequired isInvalid={touched.name && !values.name} mb={5}>
                            <FormLabel className='text-dark/80 font-bold'>Enter Your Name</FormLabel>
                            <Input className='rounded-full w-full mb-2 '
                                type="text"
                                name="name"
                                errorBorderColor="red.300"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            <FormErrorMessage>Required</FormErrorMessage>
                        </FormControl>

                        <FormControl className='grid w-full items-center justify-center' isRequired isInvalid={touched.email && !values.email} mb={5}>
                            <FormLabel className='text-dark/80 font-bold'>Enter Your Email</FormLabel>
                            <Input  className='rounded-full w-full mb-2'
                                type="email"
                                name="email"
                                errorBorderColor="red.300"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            <FormErrorMessage>Required</FormErrorMessage>
                        </FormControl>

                        <FormControl className='grid w-full items-center justify-center'
                            mb={5}
                            isRequired
                            isInvalid={touched.subject && !values.subject}
                        >
                            <FormLabel className='text-dark/80 font-bold'>Subject</FormLabel>
                            <Input  className='rounded-full w-full mb-2'
                                type="text"
                                name="subject"
                                errorBorderColor="red.300"
                                value={values.subject}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            <FormErrorMessage>Required</FormErrorMessage>
                        </FormControl>

                        <FormControl className='grid w-full items-center justify-center'
                            isRequired
                            isInvalid={touched.message && !values.message}
                            mb={5}
                        >
                            <FormLabel  className='text-dark/80 font-bold'>Message</FormLabel>
                            <Textarea  className='rounded-25% w-full mb-2'
                                type="text"
                                name="message"
                                rows={4}
                                errorBorderColor="red.300"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={onBlur}
                            />
                            <FormErrorMessage>Required</FormErrorMessage>
                        </FormControl>

                        <Button
                            variant="outline"
                            colorScheme="blue"
                            isLoading={isLoading}
                            disabled={
                                !values.name || !values.email || !values.subject || !values.message
                            }
                            onClick={onSubmit}
                        >
                            Submit
                        </Button>

                    </div>

                </motion.div>



            </main>

        </>
    )
}

export default contact

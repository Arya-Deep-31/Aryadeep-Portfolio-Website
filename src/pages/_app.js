import '@/styles/globals.css'
import { Sura } from "next/font/google"
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '@/components/Footer'

const sura = Sura({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-sur"
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${sura.variable} font-sur bg-light dark:bg-darker w-full min-h-screen`}>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  )
}

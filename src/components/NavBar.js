import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import {useRouter} from 'next/router'
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons'
import {motion} from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher'



const CustomLink = ({href , title , className=""}) => {
    
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  dark:bg-primary
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {


    const [mode , setMode] = useThemeSwitcher();
    
  return (
    <header className='w-full px-32 py-5 font-semibold flex items-center text-lg justify-between dark:text-light'>
        
        <nav>
            <CustomLink href="/" title="Home" className="mr-3" />
            <CustomLink href="/about" title="About" className="mx-3"  />
            <CustomLink href="/projects" title="Projects" className="mx-3" />
            <CustomLink href="/contact" title="Contact" className="ml-3" />
        </nav>
        
        <nav className='flex items-center justify-center flex-wrap mt-1'>
            <motion.a href = "https://www.linkedin.com/in/aryadeep-gogoi-696609236/" target = {"_blank"}
            whileHover={{y:-3}}
            whileTap={{scale : 0.9}}
            className='w-6 mr-4'
            >
                <LinkedInIcon/>
                
            </motion.a>

            <motion.a href = "https://github.com/Arya-Deep-31" target = {"_blank"}
            whileHover={{y:-3}}
            whileTap={{scale : 0.9}}
            className='w-7 mr-4'>
                <GithubIcon/>
                
            </motion.a>

            <motion.a href = "https://twitter.com/AryadeepGogoi" target = {"_blank"}
            whileHover={{y:-3}}
            whileTap={{scale : 0.9}}
            className='w-7 mr-4'>
                <TwitterIcon/>
            </motion.a>

            <motion.a href = "https://www.instagram.com/arya__deep__31/" target = {"_blank"}
                        whileHover={{y:-3}}
                        whileTap={{scale : 0.9}}
                        className='w-6 mr-4'>
                <InstagramIcon/>
            </motion.a>

            <motion.a href = "https://facebook.com/profile.php?id=100076109862434" target = {"_blank"}
                        whileHover={{y:-3}}
                        whileTap={{scale : 0.9}}
                        className='w-6 mr-4'>
                <FacebookIcon/>
            </motion.a>

            <button onClick={()=>setMode(mode==="light" ? "dark" : "light")}className='flex items-center justify-center rounded-full p-1' >
                {
                    mode === "dark" ? <SunIcon className={'fill-dark'} />
                    : <MoonIcon className={"fill-dakr"}/>
                }

            </button>
        </nav>

        <div className='absolute left-[50%] top-4 translate-x-[-50%]'>
            <Logo/>
        </div>
        
    </header>
  )
}

export default NavBar

import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { ModeToggle } from '../mode-toggle'
import Logo_Light from "../../../../public/Images/logo.svg"
import Logo_Dark from "../../../../public/Images/logo_2.svg"
import { useTheme } from 'next-themes'
import HamburgerMenu from '../Hamburger-menu/hamburger-menu'
import styles from "./style.module.scss"
type Props = {}

const Navbar = (props: Props) => {
    const {theme} = useTheme()
    useEffect(()=>{
        theme
    },[])



    return (
        <header className='fixed right-0 left-0 top-0 py-4 px-4 dark:bg-black/40 bg-white/20 backdrop-blur-lg z-[100] flex items-center border-b-[1px] dark:border-neutral-900  justify-between text-gray-900 dark:text-white'>
            <aside className='flex items-center gap-[2px]'>
                {theme == "light" ? <Image src={Logo_Light} alt="logo" className={styles.logoImage}/>:<Image src={Logo_Dark} alt="logo" width={50}
                        height={50} />}
            </aside>
            <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block ">
                <ul className="flex items-center gap-20 list-none font-semibold">
                    <li className='text-neutral-700 dark:text-white transition-all duration-500 hover:text-amber-400 dark:hover:text-amber-400 '>
                        <Link href="#home" className='2xl:text-sm lg:text-xs'>Home</Link>
                    </li>
                    <li className='text-neutral-700 dark:text-white transition-all duration-500 hover:text-amber-400 dark:hover:text-amber-400 '>
                        <Link href="#about" className='2xl:text-sm lg:text-xs'>About</Link>
                    </li>
                    <li className='text-neutral-700 dark:text-white transition-all duration-500 hover:text-amber-400 dark:hover:text-amber-400 '>
                        <Link href="#projects" className='2xl:text-sm lg:text-xs'>Projects</Link>
                    </li>
                    <li className='text-neutral-700 dark:text-white transition-all duration-500 hover:text-amber-400 dark:hover:text-amber-400 '>
                        <Link href="#contact" className='2xl:text-sm lg:text-xs'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <aside className="flex items-center gap-4">
                <ModeToggle />
                <HamburgerMenu />
            </aside>
        </header>
    )
}

export default Navbar
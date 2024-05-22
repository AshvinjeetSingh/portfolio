// @ts-nocheck
'use client'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useParams, usePathname } from 'next/navigation';
import { ArrowDown, ArrowDownToLine, ArrowDownToLineIcon, Github, LinkedinIcon, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { menuSlide } from './anim';
import Link from "./Link/index"
import Curve from "./Curve/index"

type Props = {}

const navItems = [

    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "#about",
    },

    {
        title: "Project",
        href: "#projects",
    },
    {
        title: "Contact",
        href: "#contact",
    },

]

const HamburgerMenu = (props: Props) => {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);




    return (
        <>
            <div className={`${styles.main} md:hidden`}>

                <div className={styles.header}>
                    <div onClick={() => { setIsActive(!isActive) }} className={`${styles.button} bg-black dark:bg-white`} >
                        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}  after:dark:bg-black after:bg-white  before:dark:bg-black before:bg-white`}></div>
                    </div>
                </div>

            </div>
            <AnimatePresence mode="wait">
                {isActive &&
                    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={`${styles.menu} dark:bg-[#1c1c1c] bg-white text-black dark:text-white`}>
                        <div className={styles.body}>
                            <div onMouseLeave={() => { setSelectedIndicator(window.location.hash) }} className={styles.nav}>
                                <div className={styles.header}>
                                    <p>Navigation</p>
                                </div>
                                {
                                    navItems.map((data, index) => {
                                        return <Link key={index} data={{ ...data, index }} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator} setIsActive={setIsActive}></Link>
                                    })
                                }
                            </div>
                            <div className={styles.header}>
                                <ul className='flex justify-center item-center text-white dark:text-black'>
                                    <li className="px-3 dark:text-white h-full text-black transition-all duration-500  "><a href="https://github.com/AshvinjeetSingh" target="_blank" rel="noopener noreferrer"><Github /></a></li>
                                    <li className="px-3 dark:text-white text-black transition-all duration-500 h-full   "><a href="https://www.linkedin.com/in/ashvinjeetsingh" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a></li>
                                    <li className="px-3 dark:text-white text-black transition-all duration-500  h-full "><a href="https://twitter.com/AshvinjeetS" target="_blank" rel="noopener noreferrer"><Twitter /></a></li>
                                    <li className="px-3 dark:text-white text-black transition-all duration-500  h-full">
                                        <a href="/CV.pdf" download="cv" ><ArrowDownToLineIcon /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Curve />
                    </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default HamburgerMenu
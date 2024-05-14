'use client'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
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
        title: "Work",
        href: "/work",
    },

    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },

]

const HamburgerMenu = (props: Props) => {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);


    useEffect(() => {
        if (isActive) setIsActive(false)
    }, [pathname])

    return (
        <>
            <div className={`${styles.main} md:hidden`}>

                <div className={styles.header}>
                    <div onClick={() => { setIsActive(!isActive) }} className={`${styles.button} bg-black dark:bg-white` } >
                        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}  after:dark:bg-black after:bg-white  before:dark:bg-black before:bg-white`}></div>
                    </div>
                </div>

            </div>
            <AnimatePresence mode="wait">
                {isActive && 
                <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
                    <div className={styles.body}>
                        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
                            <div className={styles.header}>
                                <p>Navigation</p>
                            </div>
                            {
                                navItems.map((data, index) => {
                                    return <Link key={index} data={{ ...data, index }} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Link>
                                })
                            }
                        </div>
                        {/* <Footer /> */}
                    </div>
                    <Curve />
                </motion.div>}
            </AnimatePresence>
        </>
    ) 
}

export default HamburgerMenu
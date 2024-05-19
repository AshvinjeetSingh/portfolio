// @ts-nocheck
'use client'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useParams, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { menuSlide } from './anim';
import Link from "./Link/index"
import Curve from "./Curve/index"
import useHash from '@/Providers/hash';
import { scrollToSection } from '@/lib/utils';

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
    // const params=useHash()
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);
    const hash = useHash();
    useEffect(() => {
        const section = hash.replace("#", "");
        console.log("Hash",section)
        if (section) scrollToSection(section);
        if(isActive) setIsActive(false)
    }, [hash]);

    // useEffect(() => {
    //     // console.log("pathname",pathname)
    //     console.log("pathname", window.location.hash)
    //     if(isActive){
    //         setIsActive(!isActive) 
    //     }
    //     const hash = (asPath as string).split("#")[1]; // error=unauthorized_client&error_code=401error_description=Something+went+wrong
    //     const parsedHash = new URLSearchParams(hash);
    //     const errorHash = parsedHash.get("error_description");
    // }
    // , [window.location.hash])

    useEffect(() => {
        const onHashChange = () => {
            setHash(window.location.hash);
        };
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);



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
                        {/* <Footer /> */}
                    </div>
                    <Curve />
                </motion.div>}
            </AnimatePresence>
        </>
    ) 
}

export default HamburgerMenu
// @ts-nocheck
import React from 'react'
import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { scale, slide } from '../anim';
type Props = {
    data?: string, 
    isActive?: string, 
    setSelectedIndicator?: string, 
    setIsActive?:string
}

const index = ({ data, isActive, setSelectedIndicator, setIsActive }: {
    data?: string,
    isActive?: string,
    setSelectedIndicator?: string,
    setIsActive?: string
}) => {
    const { title, href, index } = data;

    return (
        <motion.div className={styles.link} onMouseEnter={() => { setSelectedIndicator(href) }} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
            <motion.div variants={scale}  animate={isActive ? "open" : "closed"} className={styles.indicator}></motion.div>
            <Link href={href} onClick={() => { setIsActive(false)}}>{title}</Link>
        </motion.div>
    )
}

export default index
import Image from 'next/image'
import React from 'react'
import AT from "@/../public/Images/at.png"
import { Bebas_Neue } from '@next/font/google'
import styles from "./styles.module.scss"
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './anim';

type Props = {}
const Bebas = Bebas_Neue({
    weight: ['400'],
    preload: false
})

const ContactSection = (props: Props) => {
    const phrase = "In 2024 — alongside my ongoing projects I'm keen to explore additional opportunities that spark creativity and challenge.If you have a project in mind, feel free to schedule a time to chat.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <section className="h-full w-full  dark:bg-black bg-white rounded-md  overflow-visible relative flex flex-col items-center  antialiased text-black dark:text-white" id="contact">
            <div className='text-lg px-4 md:text-lg lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug  mx-auto z-10 justify-between align-baseline flex flex-col text-left py-36'>
                <div ref={description} className="flex justify-center">
                    <div className={`${styles.body} max-w-4xl flex relative gap-12 `}>
                        <p className=' [&>*:nth-child(1)]:gap-2 text-base leading-7 font-normal tracking-wide [word-spacing:-20px] '>
                        {
                            phrase.split(" ").map( (word, index) => {
                                return <span key={index} className="mx-1 relative overflow-hidden inline-flex [&>*:nth-child(2)]:text-base  [&>*:nth-child(2)]:font-light  [&>*:nth-child(2)]:w-[80%]]"><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{`${word}\t`}</motion.span></span>
                            })
                        }
                        </p>
                        <motion.a href="mailto:Ashvinjeetsingh22@gmail.com" className={`bg-black text-white dark:bg-white dark:text-black  ${styles.button} mt-4`} variants={opacity} animate={isInView ? "open" : "closed"}>
                            <span className=' text-base leading-6 '>Drop me a line</span>
                            <div className={styles.button__icon}>
                                <div className={`bg-white dark:bg-black ${styles.button__icon__bg}`}></div>
                                <svg fill="none"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path className='fill-[black] dark:fill-[white]'
                                        d="m7.012 18.069 9.702-9.702v7.298l1.499.028-.014-8.81-1.132-1.132-8.81-.014.028 1.499h7.298L5.88 16.937l1.131 1.132Z"
                                        fill="currentColor"></path>
                                </svg>
                            </div>
                        </motion.a>
                        
                    </div>
                </div>
            </div>

            {/* <FloatingShape/> */}
        </section>


    )
}

export default ContactSection
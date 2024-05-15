'use client'
import React, { useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import { Bebas_Neue } from '@next/font/google';
import { Github, LinkedinIcon, Twitter } from 'lucide-react';

type Props = {}
// @ts-ignore
const Bebas = Bebas_Neue({
    weight: ['400'],
    preload: false
})
const Footer = (props: Props) => {
    const container = useRef();

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })



    return (

        <div className="w-full overflow-hidden" ref={container}>
            <Logos scrollProgress={scrollYProgress} />
        </div>

    )

}



const Logos = ({ scrollProgress }) => {
    const y = useTransform(scrollProgress, [0, 1], [-225, 0])
    return (
        

        <div className="w-full h-[250px] bg-black dark:bg-white overflow-hidden">
            <motion.div style={{ y }} className='flex justify-center items-center flex-col'>
                {
                    // [...Array(5)].map((_, i) => {
                    //     return <img key={`img_${i}`} className="w-[80px] h-[80px]" src={`/medias/${i + 1}.jpg`} />
                    // })\
                    <>
                        <p className={`${Bebas.className} w-full h-full bg-black dark:bg-white font-strong text-5xl uppercase  text-white dark:text-black flex justify-center gap-2 items- p-10`}>
                            Made With Love<span className='text-sm'>&copy;2024</span>
                        </p>
                        <ul className='flex text-white dark:text-black'>
                            <li className="px-3 text-white dark:text-black transition-all duration-500 hover:text-amber-400 dark:hover:text-amber-400 "><a href="https://github.com/AshvinjeetSingh"><Github /></a></li>
                            <li className="px-3 text-white dark:text-black transition-all duration-500 hover:text-amber-400 dark:hover:text-amber-400"><a href="www.linkedin.com/in/ashvinjeetsingh"><LinkedinIcon /></a></li>
                            <li className="px-3 text-white dark:text-black transition-all duration-500 hover:text-amber-400 dark:hover:text-amber-400"><a href="https://twitter.com/AshvinjeetS"><Twitter /></a></li>
                        </ul>
                    
                    </>
                }

            </motion.div>






        </div>
             
    )
}

export default Footer
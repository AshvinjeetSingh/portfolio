'use client'
import React, { useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

type Props = {}
// @ts-ignore
const Footer = (props: Props) => {
    const container = useRef();
    const paths = useRef([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    useEffect(() => {
        scrollYProgress.on("change", e => {
            paths.current.forEach((path, i) => {
                path.setAttribute("startOffset", -40 + (i * 40) + (e * 40) + "%");
            })
        })
    }, [])

    return (
        <div ref={container} className='dark:bg-black bg-white rounded-md'>
            <svg className="w-screen mb-40" viewBox="0 0 250 90">
                <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68" />
                <text className="text-lg uppercase text-amber-400 fill-current">
                    {
                        [...Array(1)].map((_, i) => {
                            return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 40 + "%"} href="#curve">Developer &#9650; Designer &#9650; Problem Solver</textPath>
                        })
                    }
                </text>
            </svg>
            <Logos scrollProgress={scrollYProgress} />
        </div>
    )
}

const Logos = ({ scrollProgress}) => {
    const y = useTransform(scrollProgress, [0, 1], [-700, 0])
    return (
        <div className="h-[16px] dark:bg-black bg-white rounded-md  !overflow-visible">
            <motion.div style={{ y }} className="h-full dark:bg-black bg-white rounded-md flex justify-center gap-10 items-center p-10">
                <p className='w-full text-center text-xl text-black dark:text-white'>Made with Love</p>
            </motion.div>
        </div>
    )
}

export default Footer
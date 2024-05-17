// @ts-nocheck

import React, { useEffect, useRef, useState } from 'react'
import LeftLink from '../Links/left-links'
import RightLink from '../Links/right-link'
import { HeroHighlight } from './hero-highlight'
import { Bebas_Neue } from "@next/font/google";
import { motion, useInView } from "framer-motion"
import localFont from "@next/font/local";
import { LocalTime } from '../localtime';
import { opacity, slideUp } from './anim';


type Props = {}
const Bebas = Bebas_Neue({
    weight: ['400'],
    preload: false
})

const HeroSection = (props: Props) => {
    // const [time, setTime] = useState(post.frontmatter.date)
    const phrase = "Crafting Digital Experiences";
    const phrase2 = "Where Art Meets Functionality";
    let date = new Date();
    const heading = useRef(null);
    const isInView2 = useInView(heading)
    const para = useRef(null);
    const isInView = useInView(para)
    
    
    return (
        <section className="h-full w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased" id="hero">
            {/* LEFT LINK START */}
            <LeftLink />
            {/* <!-- LEFT LINK END--> */}
            {/* <!-- RIGHT LINK sTART--> */}
            <RightLink />
            {/* <!-- rIGHT LINK END--> */}
            {/* <TextGenerateEffect words={Words} /> */}
            <HeroHighlight className=" text-neutral-700 dark:text-white  2xl:max-w-4xl  xl:max-w-3xl lg:max-w-2xl md:max-w-xl sm:max-w-lg xs:max-w-sm xxs:max-w-xs leading-relaxed lg:leading-snug text-center mx-auto z-10 flex justify-between align-baseline">


                <div className="text-left flex justify-center items-baseline flex-col z-20" ref={heading}>
                    {/* <DotLottiePlayer/> */}
                    <h3 className={`${Bebas.className} leading-7 font-light uppercase tracking-wider text-gray-400 text-sm mb-0.5 z-2 cursor-default`}>Web developer</h3>
                    <h4 className={`[&>*:nth-child(1)]:gap-2 font-extrabold uppercase tracking-wide text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-3 z-2 cursor-default ${Bebas.className}`}>
                        {phrase.split(" ").map((word, index) => {
                            return <span key={index} className="mr-2 relative overflow-hidden inline-flex [&>*:nth-child(2)]:text-base  [&>*:nth-child(2)]:font-light  [&>*:nth-child(2)]:w-[80%]]"><motion.span variants={slideUp} custom={index} animate={isInView2 ? "open" : "closed"} key={index}>{`${word}\t`}</motion.span></span>
                        })}
                        <br/>
                        {phrase2.split(" ").map((word, index) => {
                            return <span key={index} className="mr-2 relative overflow-hidden inline-flex [&>*:nth-child(2)]:text-base  [&>*:nth-child(2)]:font-light  [&>*:nth-child(2)]:w-[80%]]"><motion.span variants={slideUp} custom={index} animate={isInView2 ? "open" : "closed"} key={index}>{`${word}\t`}</motion.span></span>
                        })}
                    </h4>
                    <motion.p ref={para} className={`leading-6 font-light tracking-wide 2xl:text-lg xl:text-md lg:text-sm capitalize  2xl:mb-20 xl:mb-10 mb-5 z-2 cursor-default`} variants={opacity} animate={isInView ? "open" : "closed"} >Crafting Innovative Solutions Tailored Specifically to Capture and Amplify the Essence of Your
                        Distinct Brand
                       Identity,
                        Elevating Your Online Presence to Unprecedented Heights of Recognition and Impact.</motion.p>

                    {/* <div className={` flex justify-between w-full font-light flex-wrap 2xl:text-lg xl:text-md lg:text-sm `}> */}
                    <div className={` w-full grid grid-cols-3 gap-5 relative overflow-hidden text-justify xxs:mt-5`}>
                       
                        <p className='text-left 2xl:text-lg xl:text-md lg:text-sm text-xs'>Currently Available for<br />Freelance Projects</p>
                        <p className='text-center 2xl:text-lg xl:text-md lg:text-sm text-xs'>Based in <br />Toronto,CN </p>
                        <p className='text-right 2xl:text-lg xl:text-md lg:text-sm text-xs'>My Local Time:<br /><span id="l_time">{date.toDateString()}
                        </span></p>
                    </div>
                </div>


            </HeroHighlight>
        </section>
    )
}



export default HeroSection
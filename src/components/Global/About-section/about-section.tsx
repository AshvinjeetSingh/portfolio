import React, { useRef } from 'react'
import Rhom from "@/../public/Images/rhom.svg"
import Triangle from "@/../public/Images/triangle.svg"
import Parallelogram from "@/../public/Images/parrallelogram.svg"
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Bebas_Neue } from "@next/font/google";
import { useInView,motion } from 'framer-motion'
import { slideRight, slideUp } from './anim'

const Bebas = Bebas_Neue({
    weight: ['400'],
    preload: false
})

type Props = {}

const AboutSection = (props: Props) => {
    const phrase1 = "Hey there! I'm a software developer with experience from HSBC and have a Master's degree from the University of Windsor.I've got a thing for crafting cool stuff on the web, especially when it comes to software development especially frontend techniques.";
    const phrase2 = "I'm all about that sweet spot where creativity meets tech. I get a kick out of working on frontend projects that not only look awesome but also run like a well - oiled machine.You know, the kind that challenges you to make things both super fast and super slick.";
    const description = useRef(null);
    const isInView = useInView(description)
    const watToDo=useRef(null);
    const isInView2 = useInView(watToDo)
    return (
        <section className="h-full w-full  dark:bg-black bg-white rounded-md  !overflow-visible relative flex flex-col items-center  antialiased" id="about">

            <div className='text-lg px-4 md:text-lg lg:text-2xl font-bold text-neutral-700 dark:text-white  2xl:max-w-4xl  xl:max-w-3xl lg:max-w-2xl md:max-w-xl sm:max-w-lg xs:max-w-sm xxs:max-w-xs leading-relaxed lg:leading-snug  mx-auto z-10 justify-between align-baseline flex flex-col text-left pt-36 pb-18 '>


                <div className={`mb-9 `} ref={description}>
                    <h1 className={`${Bebas.className}  text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase lg:leading-10 leading-none relative z-20 mb-4 flex`}>About me <span className='text-sm lg:text-base pl-1 text-gray-foreground flex leading-none lg:block xxs:hidden'>[2]</span></h1>
               
                <div>
                        <p className='xxs:text-base overflow-hidden tracking-wide leading-8 relative font-normal xxs:text-justify'>
                      
                            
                                {
                                    phrase1.split(" ").map((word, index) => {
                                        return <span key={index} className="mr-1 lg:mb-1 lg:mr-1 relative overflow-hidden inline-flex [&>*:nth-child(2)]:text-base  [&>*:nth-child(2)]:font-light  [&>*:nth-child(2)]:w-[80%]]"><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{`${word}\t`}</motion.span></span>
                                    })
                                }
                                <br/>
                                {
                                    phrase2.split(" ").map((word, index) => {
                                        return <span key={index} className="mr-1 lg:mr-1 lg:mb-1 relative overflow-hidden inline-flex [&>*:nth-child(2)]:text-base  [&>*:nth-child(2)]:font-light  [&>*:nth-child(2)]:w-[80%]]"><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{`${word}\t`}</motion.span></span>
                                    })
                                }
                            
                    </p>
                </div>
                </div>
                <div >


                    <div className={`${Bebas.className} uppercase leading-9 mb-8 text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl`}>
                        <h1>I can help you with ...</h1>
                    </div>
                    {/* content: "";
                    position: absolute;
                    width: 2px;
                    left: 0px;
                    height: 100%;

                    @include themify($themes) {
                        background - color: themed('smallLine');
                        } */}
                    <div className='grid md:grid-cols-3 md:gap-x-5 relative overflow-hidden gap-y-5' >
                        <motion.div className='pl-10 relative before:absolute before:w-1 before:h-full before:left-0 before:bg-gray-200' variants={slideRight} ref={watToDo}  animate={isInView2 ? "open" : "closed"}>
                            <span><img src="../images/rhom.svg" alt="icon" className='mb-4'/></span>
                            <h2 className={`${Bebas.className} text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-2`}>Design</h2>
                            <p className={`xxs:text-base font-normal lg:text-left leading-6`}> make web designs that engage your audience and create the user experience you want.</p>
                        </motion.div>
                        <motion.div className='pl-10 relative before:absolute before:w-1 before:h-full before:left-0 before:bg-gray-200' variants={slideRight} animate={isInView2 ? "open" : "closed"}><span className='mb-4'><img src="../images/parrallelogram.svg" alt="icon" className='mb-4' /></span>
                            <h2 className={`${Bebas.className} text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-2`}>Development</h2>
                            <p className={` xxs:text-base font-normal lg:text-left leading-6`}>Bringing visuals to life through developing highly functional web solutions.</p>
                        </motion.div>
                        <motion.div className='pl-10 relative before:absolute before:w-1 before:h-full before:left-0 before:bg-gray-200' variants={slideRight} animate={isInView2 ? "open" : "closed"}><span><img src="../images/triangle.svg" alt="icon" className='mb-4' /></span>
                            <h2 className={`${Bebas.className} text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-2`}>SEO</h2>
                            <p className={` xxs:text-base font-normal lg:text-left leading-6`}>Jazzing up your online game, boosting visibility in search rankings and digital
                                landscape!</p>
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutSection
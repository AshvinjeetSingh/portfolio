import React from 'react'
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

const Bebas = Bebas_Neue({
    weight: ['400'],
    preload: false
})

type Props = {}

const AboutSection = (props: Props) => {
    return (
        <section className="h-full w-full  dark:bg-black bg-white rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">

            <div className='text-lg px-4 md:text-lg lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug  mx-auto z-10 justify-between align-baseline flex flex-col text-left py-36'>


                <div className={`mb-9 `}>
                    <h1 className={`${Bebas.className}  text-5xl  uppercase leading-10 relative z-20 mb-4 flex`}>About me <span className='text-lg pl-1 text-gray-foreground flex leading-none'>[2]</span></h1>
               
                <div>
                    <p className='text-base overflow-hidden tracking-wide leading-8 relative font-normal'>
                        Hey there! I'm a software developer with experience from HSBC and have a Master's degree from
                        the University of
                        Windsor. I've got a
                        thing for crafting cool stuff on the web, especially when it comes to software development
                        especially
                        frontend
                        techniques.
                        <br />
                        I'm all about that sweet spot where creativity meets tech. I get a kick out of working on
                        frontend
                        projects that not
                        only look awesome but also run like a well-oiled machine. You know, the kind that challenges
                        you
                        to
                        make
                        things both
                        super fast and super slick.
                    </p>
                </div>
                </div>
                <div>


                    <div className={`${Bebas.className} text-4xl uppercase leading-9 mb-8`}>
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
                    <div className='grid grid-cols-3 gap-x-5 relative'>
                        <div className='pl-10 relative before:absolute before:w-1 before:h-full before:left-0 before:bg-gray-200'>
                            <span><img src="../images/rhom.svg" alt="icon" className='mb-4'/></span>
                            <h2 className={`${Bebas.className} text-3xl mb-2`}>Design</h2>
                            <p className={`text-base font-normal leading-6`}> make web designs that engage your audience and create the user experience you want.</p>
                        </div>
                        <div className='pl-10 relative before:absolute before:w-1 before:h-full before:left-0 before:bg-gray-200'><span className='mb-4'><img src="../images/parrallelogram.svg" alt="icon" className='mb-4' /></span>
                            <h2 className={`${Bebas.className} text-3xl mb-2`}>Development</h2>
                            <p className={` text-base font-normal leading-6`}>Bringing visuals to life through developing highly functional web solutions.</p>
                        </div>
                        <div className='pl-10 relative before:absolute before:w-1 before:h-full before:left-0 before:bg-gray-200'><span><img src="../images/triangle.svg" alt="icon" className='mb-4' /></span>
                            <h2 className={`${Bebas.className} text-3xl mb-2`}>SEO</h2>
                            <p className={` text-base font-normal leading-6`}>Jazzing up your online game, boosting visibility in search rankings and digital
                                landscape!</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutSection
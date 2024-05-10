import React from 'react'
import Rhom from "../../../public/rhom.svg"
import Triangle from "../../../public/triangle.svg"
import Parallelogram from "../../../public/parrallelogram.svg"
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {}

const AboutSection = (props: Props) => {
    return (
        <section className="h-full w-full  dark:bg-black bg-white rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">

            <div className='text-lg px-4 md:text-lg lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug  mx-auto z-10 justify-between align-baseline flex flex-col text-left py-36'>


                <div className='flex mb-4 align-baseline'>
                    <h1 className='text-4xl pr-1 uppercase leading-10 relative z-20'>About me</h1><span className='text-sm text-gray-foreground '>[2]</span>
                </div>
                <div>
                    <p className='text-lg overflow-hidden tracking-wide leading-8 relative'>
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
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger><Image src={Rhom} alt="icon" width={39} height={39} /><span>Design</span></AccordionTrigger>
                            <AccordionContent>
                                Make web designs that engage your audience and create the user experience you want.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger><Image src={Parallelogram} alt="icon" width={39} height={39} /><span>Development</span></AccordionTrigger>
                            <AccordionContent>
                                Bringing visuals to life through developing highly functional web solutions.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger><Image src={Triangle} alt="icon" width={39} height={39} /><span>SEO</span></AccordionTrigger>
                            <AccordionContent>
                                Jazzing up your online game, boosting visibility in search rankings and digital
                                landscape!
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>

        </section>
    )
}

export default AboutSection
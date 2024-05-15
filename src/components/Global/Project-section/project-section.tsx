// @ts-nocheck

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../bento-grid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
    IconBrandGithub
} from "@tabler/icons-react";
import { Bebas_Neue } from "@next/font/google"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {LampComponent} from "../lamp";
import Image from "next/image";
import { Github } from "lucide-react";
import styles from "./styles.module.scss"
import image1 from "@/../public/Images/Autopulse.png"
import image2 from "@/../public/Images/main_home_black.png"
import image3 from "@/../public/Images/knowYourCoin.png"
import image4 from "@/../public/Images/Eng4.png"

const Bebas = Bebas_Neue({
    weight: ['400'],
    preload: false
})


export default function Projects() {
    return (
        <section className="h-full w-full  dark:bg-black bg-white rounded-md  !overflow-visible relative flex flex-col items-center  antialiased" id="projects">
                <div className='text-lg md:text-lg lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug  mx-auto z-10 justify-between align-baseline flex flex-col text-left pt-36 pb-18'>
                {/* <LampComponent/> */}
                {/* <div className="flex relative items-end text-3xl justify-between after:h-[3px] after:w-full after:bg-amber-400 after:absolute after:bottom-0 mb-8 pb-8">
                    <div>
                        <h1 className={`${Bebas.className} uppercase leading-none flex items-start text-5xl z-20`}>SELECTED WORK <span className="text-lg pl-1 text-gray-foreground flex leading-none">[3]</span></h1>
                    </div>
                    <p className="text-sm">A piece from my selection of favorites</p>
                </div> */}

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 ,}}
                    transition={{
                        delay: 0.1,
                        duration: 0.5,
                        ease: 'easeInOut',
                    }}
                    // viewport={{ once: true, amount: 0.5 }}
                    className="flex relative items-end text-3xl justify-between after:h-[3px] after:w-full after:bg-amber-400 after:absolute after:bottom-0 mb-8 pb-8"
                >

                    <div>
                        <h1 className={`${Bebas.className} uppercase leading-none flex items-start text-5xl z-20`}>SELECTED WORK <span className="text-lg pl-1 text-gray-foreground flex leading-none">[3]</span></h1>
                    </div>
                    <p className="text-sm">A piece from my selection of favorites</p>

                </motion.div>
                <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={item.className}
                            icon={item.icon}
                            githubLink={item.Githublink}
                            websiteLink={item.websiteLink}
                            backgroundImage={item.backgroundImage}
                        />
                    ))}
                </BentoGrid>
                <motion.div className="relative mt-8" initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut'}} >
                    <div className="mt-8 before:absolute before:h-[3px] before:w-full before:bg-amber-400 before:top-0 mb-8 pb-8">
                        <h3 className={`${Bebas.className} text-3xl uppercase`}>Want to see more?</h3>
                        <p className={`text-lg font-normal`}> Reach me out at
                            <Button variant="ghost"><a href="mailto:Ashvinjeetsingh22@gmail.com"
                            className={`${styles.link} no-underline text-lg italic font-medium`}>Ashvinjeetsingh22@gmail.com</a></Button>


                        </p>
                    </div>
                </motion.div>
            </div>
            </section>


    );
}
const  Images=[

]
const Skeleton = () => (
    <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black`}>
        {/* <Image src={Github} alt="img" fill/> */}
    </div>
);
const items = [
    {
        title: "AutoPulse-SASS Automation Builder",
        description: "NextJS/TypeScript/Notion API/Discord API/Slack API/Stripe API/PostgreSQL/TailwindCSS",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-6 w-6 text-neutral-500" />,
        Githublink:"https://github.com/AshvinjeetSingh/AutoPulse",
        websiteLink:"",
        backgroundImage: "/images/Autopulse.png"
    },
    {
        title: "Portfolio",
        description: "NextJS/TypeScript",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-6 w-6 text-neutral-500" />,
        Githublink: "https://github.com/AshvinjeetSingh/Portfolio",
        websiteLink:"https://ashvinjeet.dev/",
        backgroundImage: "/images/main_home_black.png"
    },
    {
        title: "Know Your Coin",
        description: "ReactJS/Redux Toolkit/Ant Design",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-6 w-6 text-neutral-500" />,
        Githublink: "https://github.com/AshvinjeetSingh/knowyourcoinV2",
        websiteLink:"https://knowyourcoinv2.netlify.app/",
        backgroundImage: "/images/knowYourCoin.png"
    },
    {
        title: "Engineering 4.0",
        description:
            "ReactJS/Redux/TailwindCSS/Firebase",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-6 w-6 text-neutral-500" />,
        Githublink: "https://github.com/engineering4-0/website",
        websiteLink:"https://engineering4-0.club/",
        backgroundImage: "/images/Eng4.png"
    },
];

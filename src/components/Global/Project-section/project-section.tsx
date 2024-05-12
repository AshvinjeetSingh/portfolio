import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../bento-grid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { Bebas_Neue } from "@next/font/google"

const Bebas = Bebas_Neue({
    weight: ['400'],
    preload: false
})


export default function Projects() {
    return (
        <section className="h-full w-full  dark:bg-black bg-white rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">

            <div className='text-lg px-4 md:text-lg lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug  mx-auto z-10 justify-between align-baseline flex flex-col text-left py-36'>
                <div className="flex relative items-end text-3xl justify-between after:h-[3px] after:w-full after:bg-amber-400 after:absolute after:bottom-0 mb-8 pb-8">
                    <div>
                        <h1 className="uppercase leading-none flex items-start">SELECTED WORK <span className="text-xs pl-2">[3]</span></h1>
                    </div>
                    <p className="text-xs">A piece from my selection of favorites</p>
                </div>
                <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={item.className}
                            icon={item.icon}
                        />
                    ))}
                </BentoGrid>
                <div >
                    <h3>Want to see more?</h3>
                    <p> Reach me out at <a href="mailto:Ashvinjeetsingh22@gmail.com"
                        >Ashvinjeetsingh22@gmail.com</a>
                    </p>
                </div>
                </div></section>
                
        
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
    {
        title: "AutoPulse-SASS Automation Builder",
        description: "NextJS/TypeScript/Notion API/Discord API/Slack API/Stripe API/PostgreSQL/TailwindCSS",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Portfolio",
        description: "NextJS/TypeScript",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Know Your Coin",
        description: "ReactJS/Redux Toolkit/Ant Design",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Engineering 4.0",
        description:
            "ReactJS/Redux/TailwindCSS/Firebase",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];

import { cn } from "@/lib/utils";
import { Github, LinkedinIcon } from "lucide-react";
import { IconBrandGithub, IconShare2 } from "@tabler/icons-react"

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    githubLink,
    websiteLink,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    githubLink?: string;
    websiteLink?: string;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input  dark:shadow-none  p-4 dark:bg-black dark:border-white/[0.2] dark:hover:border-white/[0.6] bg-white border border-black/[0.2] justify-between flex flex-col space-y-4",
                className
            )}
        >
            {header}
            <div className="flex flex-col  transition duration-200">
                <div className="flex w-full  justify-between items-baseline">
                {icon}
                    <ul className="flex">
                        <li className=" pl-3 text-neutral-700 dark:text-white transition-all duration-500 "><a href={githubLink}><IconBrandGithub className="h-6 w-6 transition-all duration-500  text-neutral-500 hover:text-amber-500 dark:hover:text-amber-500" /></a></li>
                        <li className="pl-3 text-neutral-700 dark:text-white transition-all duration-500 "><a href={websiteLink}><IconShare2 className=" transition-all duration-500  hover:text-amber-500 dark:hover:text-amber-500 h-6 w-6 text-neutral-500" /></a></li>
                        
                    </ul>
                </div>
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    );
};

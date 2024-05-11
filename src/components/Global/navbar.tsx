import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { ModeToggle } from './mode-toggle'
import Logo_Light from "../../../public/Images/logo.svg"
import Logo_Dark from "../../../public/Images/logo_2.svg"
import { useTheme } from 'next-themes'
// import styles from "../fonts.module.scss"

type Props = {}

const Navbar = (props: Props) => {
    const {theme} = useTheme()
    useEffect(()=>{
        theme
    },[])
    console.log(theme)
    return (
        <header className='fixed right-0 left-0 top-0 py-4 px-4 dark:bg-black/40 bg-white/20 backdrop-blur-lg z-[100] flex items-center border-b-[1px] dark:border-neutral-900  justify-between text-gray-900 dark:text-white'>
            <aside className='flex items-center gap-[2px]'>
                {theme && theme=="light"?<Image src={Logo_Light} alt="logo" width={39}
                    height={39} />:<Image src={Logo_Dark} alt="logo" width={39}
                        height={39} />}
            </aside>
            <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
                <ul className="flex items-center gap-20 list-none">
                    <li>
                        <Link href="#">Home</Link>
                    </li>
                    <li>
                        <Link href="#">About</Link>
                    </li>
                    <li>
                        <Link href="#">Projects</Link>
                    </li>
                    <li>
                        <Link href="#">Contact</Link>
                    </li>
                </ul>
            </nav>
            <aside className="flex items-center gap-4">
                <ModeToggle />
                <MenuIcon className="md:hidden" />
            </aside>
        </header>
    )
}

export default Navbar
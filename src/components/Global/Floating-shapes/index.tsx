'use client';

import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment, Text, Html } from '@react-three/drei'
import { useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image'
import AT from "@/../public/Images/at.png"
import { Bebas_Neue } from '@next/font/google'
import styles from "./styles.module.scss"
import { MoveUpRight } from 'lucide-react'
import { useTheme } from 'next-themes';


type Props = {}
const Bebas = Bebas_Neue({
    weight: ['400'],
    preload: false
})

const FloatingShape = (props: Props) => {
    const { theme } = useTheme()
    var color = "black"
    useEffect(() => {
        theme == "dark" ? color = "white" : color = "black"
    }, [theme])
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }



    const smoothMouse = {
        x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
        y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 })
    }


    const manageMouse = e => {

        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;
        const x = clientX / innerWidth
        const y = clientY / innerHeight
        mouse.x.set(x);
        mouse.y.set(y);
    }



    useEffect(() => {
        window.addEventListener("mousemove", manageMouse)
        return () => window.removeEventListener("mousemove", manageMouse)
    }, [])
    return (

        <Canvas className='h-full w-full  dark:bg-black bg-white rounded-md  overflow-visible relative flex flex-col items-center  antialiased' orthographic camera={{ position: [0, 0, 200], zoom: 5 }}>

            {/* <Text position={[0, 0, 99]} fontSize={3}  anchorX="center" anchorY="middle" className="text-black" >
                In 2024 — alongside my ongoing projects I'm keen to explore additional opportunities
                that spark
                creativity and
                challenge. If you have a project in mind, feel free to schedule a time to chat.
            </Text> */}

            <Html position={[0, 0, 99]}>
                <div className='text-lg px-4 md:text-lg lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug  mx-auto z-10 justify-between align-baseline flex flex-col text-left py-36'>


                    <div className={`${styles.left_col} flex flex-col`}>

                        <div className='flex flex-auto gap-6'>
                            <div className='flex flex-col flex-wrap'>
                                <h1 className={`${Bebas.className}  text-5xl  uppercase leading-10 relative z-20 mb-4 flex`}>Contact <span className='text-lg pl-1 text-gray-foreground flex leading-none'>[4]</span></h1>
                                <p className='text-lg leading-7 font-normal'>
                                    In 2024 — alongside my ongoing projects I'm keen to explore additional opportunities
                                    that spark
                                    creativity and
                                    challenge. If you have a project in mind, feel free to schedule a time to chat.
                                </p>
                                <a href="mailto:Ashvinjeetsingh22@gmail.com" className={`bg-black text-white dark:bg-white dark:text-black  ${styles.button} mt-4`}>
                                    <span className=' text-base leading-6 '>Drop me a line</span>
                                    <div className={styles.button__icon}>
                                        <div className={`bg-white dark:bg-black ${styles.button__icon__bg}`}></div>
                                        <svg fill="none"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path className='fill-[black] dark:fill-[white]'
                                                d="m7.012 18.069 9.702-9.702v7.298l1.499.028-.014-8.81-1.132-1.132-8.81-.014.028 1.499h7.298L5.88 16.937l1.131 1.132Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <div className={`${styles.right_col} flex w-full`}>
                                <Image src={AT} alt="icon" width={900} height={900} />
                            </div>
                        </div>



                    </div>

                </div>


            </Html>



            <Model />
            <Environment preset="studio" />
        </Canvas>

    )
}

export default FloatingShape
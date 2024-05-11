import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect } from 'react'
import styles from "./styles.module.scss"

type Props = {}

const StickyCursor = (props: Props) => {
    const cursorSize = 20;

    const mouse = {

        x: useMotionValue(0),

        y: useMotionValue(0)

    }



    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }

    const smoothMouse = {

        x: useSpring(mouse.x, smoothOptions),

        y: useSpring(mouse.y, smoothOptions)

    }



    // const manageMouseMove =( e:any) => {

    //     const { clientX, clientY } = e;

    //     mouse.x.set(clientX - cursorSize / 2);

    //     mouse.y.set(clientY - cursorSize / 2);

    // }
    const manageMouseMove =( e:any) => {

        const { clientX, clientY } = e;
        // const x = Math.round((clientX / window.innerWidth) * 100);
        // const y = Math.round((clientY / window.innerHeight) * 100);
        // gsap.to(cursor, { x: clientX, y: clientY });

        mouse.x.set(Math.round((clientX / window.innerWidth) * 100));

        mouse.y.set(Math.round((clientY / window.innerHeight) * 100));

    }



    useEffect(() => {

        window.addEventListener("mousemove", manageMouseMove);

        return () => {

            window.removeEventListener("mousemove", manageMouseMove)

        }

    }, [])



    return (

        <div className={styles.cursorContainer}>

            <motion.div

                style={{

                    left: smoothMouse.x,

                    top: smoothMouse.y,

                }}

                className={styles.cursor}>

            </motion.div>

        </div>

    )


}

export default StickyCursor
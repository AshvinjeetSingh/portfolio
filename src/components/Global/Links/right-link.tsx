import React from 'react'
import styles from "./styles.module.scss"

type Props = {}

const RightLink = (props: Props) => {
    return (
        <>
            
                <div className={`${styles.right_email_link} flex flex-col justify-center  items-center relative`}>
                    <a href="mailto:Ashvinjeetsingh22@gmail.com" className="rotate-90 my-4 hover:transition-all duration-500 hover:text-gray-muted dark:hover:text-gray-muted dark:hover:transition-all hover:-translate-y-2">Ashvinjeetsingh22@gmail.com</a>
                </div>

           
            <div className={styles.side_line_right}></div>
        </>
    )
}

export default RightLink
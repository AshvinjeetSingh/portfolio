import React from 'react'
import { Github, Linkedin, LinkedinIcon, LucideLinkedin, Twitter } from "lucide-react";
import styles from "./styles.module.scss"
type Props = {}

const LeftLink = (props: Props) => {
  return (
    //   <div className="fixed w-10 top-1/2 bottom-1/4 left-2 -right-full z-20 flex flex-col justify-between items-center h-2/4 after:w-1 after:h-1/4 after:fixed after:bottom-0 after:z-20 after:left-7 after:bg-amber-400 " >
    <>
      <div className={styles.left_social_links}>
          <ul>
              <li className="p-3 text-neutral-700 dark:text-white transition-all duration-500 hover:text-amber-400 dark:hover:text-amber-400 "><a href="https://github.com/AshvinjeetSingh"><Github /></a></li>
              <li className="p-3 text-neutral-700 dark:text-white transition-all duration-500 hover:text-amber-400 dark:hover:text-amber-400"><a href="www.linkedin.com/in/ashvinjeetsingh"><LinkedinIcon /></a></li>
              <li className="p-3 text-neutral-700 dark:text-white transition-all duration-500 hover:text-amber-400 dark:hover:text-amber-400"><a href="https://twitter.com/AshvinjeetS"><Twitter /></a></li>
          </ul>
      </div>
      <div className={styles.side_line_left}></div>
      </>
  )
}

export default LeftLink
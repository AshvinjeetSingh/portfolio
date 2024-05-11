import Image from 'next/image'
import React from 'react'
import AT from "@/../public/Images/at.png"

type Props = {}

const ContactSection = (props: Props) => {
    return (
        <section className="h-full w-full  dark:bg-black bg-white rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">

            <div className='text-lg px-4 md:text-lg lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug  mx-auto z-10 justify-between align-baseline flex flex-col text-left py-36'>

                <div >
                    <div>
                        <div>
                            <h1>Contact</h1><span>(4)</span>
                        </div>
                        <div>
                            <p>
                                In 2024 — alongside my ongoing projects I'm keen to explore additional opportunities
                                that spark
                                creativity and
                                challenge. If you have a project in mind, feel free to schedule a time to chat.
                            </p>
                            <a href="mailto:Ashvinjeetsingh22@gmail.com"> <span >Drop
                                me a line</span>
                                {/* <div>
                          <div></div><svg fill="none"
                              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path
                                  d="m7.012 18.069 9.702-9.702v7.298l1.499.028-.014-8.81-1.132-1.132-8.81-.014.028 1.499h7.298L5.88 16.937l1.131 1.132Z"
                                  fill="currentColor"></path>
                          </svg>
                      </div> */}
                            </a>
                        </div>
                    </div>
                    <div >
                        <Image src={AT} alt="icon" width={200} height={200} />
                    </div>
                </div>

            </div></section>


    )
}

export default ContactSection
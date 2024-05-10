import React from 'react'
import LeftLink from '../Links/left-links'
import RightLink from '../Links/right-link'
import { HeroHighlight } from './hero-highlight'

type Props = {}

const HeroSection = (props: Props) => {
  return (
      <section className="h-full w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
          {/* LEFT LINK START */}
          <LeftLink />
          {/* <!-- LEFT LINK END--> */}
          {/* <!-- RIGHT LINK sTART--> */}
          <RightLink />
          {/* <!-- rIGHT LINK END--> */}
          {/* <TextGenerateEffect words={Words} /> */}
          <HeroHighlight className="text-lg px-4 md:text-lg lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto z-10 flex justify-between align-baseline">


              <div className="text-left flex justify-center items-baseline flex-col z-20">
                  {/* <DotLottiePlayer/> */}
                  <h3 className="leading-7 font-light uppercase tracking-wide text-gray-400 text-sm mb-0.5 z-2 cursor-default">Web developer</h3>
                  <h4 className="leading-16 font-extrabold uppercase tracking-wide text-4xl mb-4 z-2 cursor-default">Crafting Digital Experiences<br />Where Art Meets Functionality
                  </h4>
                  <p className="leading-8 font-light tracking-wide text-md capitalize  mb-20 z-2 cursor-default">Crafting Innovative Solutions Tailored Specifically to Capture and Amplify the Essence of Your
                      Distinct Brand
                      Identity,
                      Elevating Your Online Presence to Unprecedented Heights of Recognition and Impact.</p>

                  <div className="flex justify-between w-full text-sm font-light flex-wrap">
                      <div >

                          <p>Currently Available for<br />Freelance Projects</p>
                      </div>
                      <p>Based in <br />Toronto,CN <span></span></p>
                      <p>My Local Time:<br /><span id="l_time"></span></p>
                  </div>
              </div>


          </HeroHighlight>
      </section>
  )
}

export default HeroSection
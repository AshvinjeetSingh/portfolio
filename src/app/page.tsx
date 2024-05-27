// @ts-nocheck

"use client"
import Navbar from "@/components/Global/Navbar/navbar";
import HeroSection from "@/components/Global/Hero-section/hero-section";
import AboutSection from "@/components/Global/About-section/about-section";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Global/Preloader";
import Projects from "@/components/Global/Project-section/project-section";
import ContactSection from "@/components/Global/Contact-section/contact-section";
import Footer from "@/components/Global/Footer";
import { VelocityScroll } from "@/components/Global/scroll-based-velocity";
const text = `\tHTML ◇ \tCSS ◇ \tJavascript ◇ \tTypescript ◇ \t Java ◇ \tPython ◇ \tNodeJS ◇ \tNextJS ◇ \tReactJS ◇ \tRedux ◇ \tDocker ◇ \tGit ◇ `
type Props = {}
export default function Home(props:Props) {
  const Words = `Developer Designer Probem Solver`
  const [loading, isLoading] = useState(true)
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          isLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AnimatePresence mode='wait'>
        {loading && <Preloader />}
      </AnimatePresence>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <Projects/>
      <VelocityScroll
        text={text}
        default_velocity={1}
        className="font-display text-center text-sm font-bold tracking-[0.1em] text-black drop-shadow-sm dark:text-white md:text-3xl md:leading-[3rem] uppercase my-1"
      />
      <ContactSection/>
      <Footer />

    </main>
  );
}

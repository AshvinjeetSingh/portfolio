"use client"
import Navbar from "@/components/Global/navbar";
import HeroSection from "@/components/Global/Hero-section/hero-section";
import AboutSection from "@/components/Global/about-section";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Global/Preloader";
import Projects from "@/components/Global/Project-section/project-section";

type Props = {}
export default function Home(props:Props) {
  const Words = `Developer Designer Probem Solver`
  const [loading, isLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      isLoading(false)
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0);
    }, 2000)
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
    </main>
  );
}

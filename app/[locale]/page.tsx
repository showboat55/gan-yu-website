'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { initLenis, destroyLenis } from '@/lib/lenis';

import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initLenis();
    return () => {
      destroyLenis();
    };
  }, []);

  return (
    <>
      <ScrollProgress />

      <ParticleBackground />
      <CustomCursor />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 pointer-events-none z-0 noise-overlay"
        aria-hidden="true"
      />
    </>
  );
}

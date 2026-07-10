import React from 'react';
import { motion } from 'motion/react';
import { Typewriter } from './Typewriter';
import { Link } from 'react-router-dom';

export const Hero = () => (
  <section id="home" className="min-h-[85vh] flex flex-col pt-32 md:pt-40 pb-20 items-center justify-center text-center px-4 relative z-10">
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-base md:text-lg text-[var(--color-text-dim)] mb-3 font-sans"
    >
      Hello, I'm
    </motion.p>
    
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative inline-block mb-4"
    >
      <h1 className="text-6xl md:text-[80px] lg:text-[100px] leading-tight font-display font-bold tracking-tight bg-[linear-gradient(to_right,rgb(78,205,196),rgb(216,178,242),rgb(78,205,196),rgb(216,178,242))] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text pb-2 px-4">
        B. Sai Naga Sowri
      </h1>
    </motion.div>
    
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-[var(--color-text-dim)] text-base md:text-lg mb-8 font-sans"
    >
      Bachelor's in Computer Science Student
      <br/>
      <span className="text-base md:text-lg mt-3 inline-block font-sans font-medium text-[var(--color-cyan)]">
        <Typewriter texts={["Data Structures & Algorithms", "Web Development", "Full-Stack Developer", "AI/ML Enthusiast","Continuous Learning..."]} />
      </span>
    </motion.p>
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-wrap justify-center gap-6 mt-4"
    >
      <Link to="/projects" className="w-[160px] h-[45px] rounded-full bg-white text-black flex items-center justify-center font-bold uppercase tracking-[2px] text-xs hover:scale-105 transition-transform">
        View Projects
      </Link>
      <Link to="/contact" className="w-[160px] h-[45px] glass-panel rounded-full flex items-center justify-center text-[var(--color-text-dim)] uppercase tracking-[2px] text-xs hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-all">
        Get In Touch
      </Link>
    </motion.div>
  </section>
);

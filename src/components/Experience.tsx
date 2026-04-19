import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, Code2 } from 'lucide-react';
import { Typewriter } from './Typewriter';

export const Experience = () => {
  return (
    <section id="experience" className="py-8 px-8 md:px-24 relative z-10 flex flex-col justify-center min-h-[80vh]">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Center Info (Scaled down version of Hero as requested) */}
        <div className="flex flex-col items-center justify-center text-center mb-20 mt-8">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-[var(--color-text-dim)] mb-2 font-sans"
          >
            Hello, I'm
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative inline-block mb-2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-display font-bold tracking-tight bg-[linear-gradient(to_right,rgb(78,205,196),rgb(216,178,242),rgb(78,205,196),rgb(216,178,242))] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text pb-1 px-4">
              B. Sai Naga Sowri
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[var(--color-text-dim)] text-sm font-sans"
          >
            Bachelor's in Computer Science Student
            <br/>
            <span className="text-sm mt-3 inline-block font-sans font-medium text-[var(--color-cyan)]">
              <Typewriter texts={["Continuous Learning..."]} />
            </span>
          </motion.p>
        </div>

        {/* 3 Experience/Stat Boxes */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Box 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-10 flex flex-col items-center text-center justify-center"
          >
            <div className="text-[var(--color-cyan)] mb-4">
              <Users size={32} strokeWidth={2} />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">30+</h3>
            <p className="text-[var(--color-text-dim)] text-sm tracking-wide leading-relaxed">
              Taught & Mentored Programming Basics and DSA to Junior Students
            </p>
          </motion.div>

          {/* Box 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-10 flex flex-col items-center text-center justify-center"
          >
            <div className="text-[var(--color-cyan)] mb-4">
              <Award size={32} strokeWidth={2} />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">6+</h3>
            <p className="text-[var(--color-text-dim)] text-sm tracking-wide leading-relaxed">
              Participated in Various Hackathons
            </p>
          </motion.div>

          {/* Box 3 - Solving Problems / LeetCode */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-10 flex flex-col items-center text-center justify-center transition-all hover:bg-white/[0.03] group cursor-pointer"
          >
            <a 
              href="https://leetcode.com/u/Sowri777/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center w-full focus:outline-none"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--color-cyan)]/10 flex items-center justify-center mb-6 border border-[var(--color-cyan)]/20 group-hover:bg-[var(--color-cyan)]/20 transition-all">
                <svg 
                  className="w-8 h-8 text-[var(--color-cyan)]" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.396.702-1.863l4.332-4.363c.467-.467 1.112-.662 1.824-.662s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.332V1.36c0-.741-.606-1.341-1.366-1.341s-1.366.6-1.366 1.341v4.823A5.056 5.056 0 0 0 7.82 7.51l-4.332 4.363c-.92.934-1.383 2.16-1.383 3.385s.463 2.451 1.383 3.385l4.332 4.363c.92.934 2.15 1.385 3.38 1.385s2.46-.451 3.38-1.385l2.609-2.636c.514-.515.496-1.366-.039-1.901-.535-.535-1.386-.553-1.9-.038v-.001ZM20.811 13.01H10.666c-.741 0-1.341.606-1.341 1.341s.6 1.341 1.341 1.341h10.145c.741 0 1.341-.606 1.341-1.341s-.6-1.341-1.341-1.341Z"/>
                </svg>
              </div>
              <p className="text-[var(--color-text-dim)] text-sm tracking-wide leading-relaxed group-hover:text-white transition-colors">
                View my LeetCode Profile,DSA Progress
              </p>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

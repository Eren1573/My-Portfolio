import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, GraduationCap, FileText, ArrowRight, ExternalLink, ArrowUpRight } from 'lucide-react';

export const About = () => (
  <section id="about" className="py-8 px-8 md:px-24 relative z-10 flex flex-col">
    <div className="max-w-6xl mx-auto w-full">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-8 text-[var(--color-text-main)]">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-purple-light)] to-[var(--color-purple)]">Me</span>
      </h2>
      <p className="text-center text-[var(--color-text-dim)] mb-16 max-w-3xl mx-auto text-sm uppercase tracking-[4px]">
        Passionate about building efficient solutions at the intersection of Algorithms, Web Development, and real-world problem solving.
      </p>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 text-[var(--color-text-dim)] text-[14px] leading-relaxed tracking-wide">
          <p>
            Hi! I'm B. Sai Naga Sowri, currently pursuing my Bachelor's degree in Computer Science at CMRCET (2023–2027). With a strong foundation in <span className="text-[var(--color-text-main)] font-medium">Data Structures & Algorithms (Python,Java) and Web Development </span>, I enjoy building efficient and scalable solutions.
          </p>
          <p>
            I'm passionate about leveraging technology to solve real-world problems. I continuously focus on improving my problem-solving and development skills, applying technical knowledge to build intelligent, impactful applications.
          </p>
          <p>
            As an aspiring software developer, I continually enhance my abilities through intensive coding practice and hands-on projects, aiming to innovate and grow within the software engineering field.
          </p>
        </div>
        
        <div className="flex flex-col gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass)] flex items-center justify-center shrink-0 mt-1">
                <span className="text-[var(--color-cyan)]">
                  <GraduationCap size={24} />
                </span>
              </div>
              <div>
                <h3 className="text-xl text-[var(--color-text-main)] font-bold tracking-wide mb-1">Bachelor's in Computer Science</h3>
                <p className="text-[var(--color-cyan)] font-medium text-sm mb-3">CMRCET</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-dim)] mb-3">
                  <span className="flex items-center gap-1.5 min-w-fit">
                    <Calendar size={14} /> Aug 2023 - 2027
                  </span>
                  <span className="flex items-center gap-1.5 min-w-fit">
                    <MapPin size={14} /> Hyderabad, Medchal
                  </span>
                </div>
                <div className="text-[var(--color-text-main)] font-bold text-sm bg-[var(--color-glass)] inline-block px-3 py-1.5 rounded-md border border-[var(--color-glass-border)]">
                  GPA: <span className="text-[var(--color-cyan)]">7.5 / 10.00</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resume Link */}
          <motion.a
            href="https://drive.google.com/file/d/1BUfGCc2Reb66Dm_qU15ADigSHSqQ30So/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-2xl p-6 bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-purple)] flex items-center justify-between group cursor-pointer hover:shadow-[0_0_30px_var(--color-accent-glow)] transition-all mt-2"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/30 bg-white/20 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-white/30 transition-colors">
                <span className="text-white">
                  <FileText size={24} />
                </span>
              </div>
              <div className="text-left">
                <h3 className="text-lg text-white font-bold tracking-wide mb-1">My Resume</h3>
                <p className="text-white/80 text-xs tracking-wide font-medium">Click to view</p>
              </div>
            </div>
            <div className="text-white shrink-0 group-hover:scale-110 transition-transform">
              <ArrowUpRight size={24} />
            </div>
          </motion.a>
          
        </div>
      </div>
    </div>
  </section>
);

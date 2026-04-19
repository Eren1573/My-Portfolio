import React from 'react';
import { Mail } from 'lucide-react';

export const Contact = () => (
  <section id="contact" className="py-8 px-8 md:px-24 relative z-10 flex flex-col">
    <div className="max-w-6xl mx-auto w-full">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-8 text-white">
        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4fd1c5] to-[#b3cde0]">Touch</span>
      </h2>
      <p className="text-center text-[var(--color-text-dim)] mb-16 max-w-2xl mx-auto text-sm uppercase tracking-[4px]">
        Have a project in mind or want to collaborate? Feel free to reach out! I'm always open to discussing new opportunities.
      </p>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-[10px] uppercase tracking-[2px] text-[var(--color-cyan)] font-medium mb-6">Let's Connect</h3>
          <p className="text-[var(--color-text-dim)] mb-10 text-sm leading-relaxed tracking-wide">
            I'm currently pursuing my Bachelor's at CMRCET and actively seeking opportunities in full-stack development, software engineering, and solving algorithmic challenges.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-6 glass-card">
              <div className="nav-icon w-12 h-12">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-white text-sm mb-1 font-medium">Email Me</div>
                <div className="text-[var(--color-text-dim)] text-[12px] font-mono">contact@example.com</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 glass-card">
              <div className="w-2 h-2 rounded-full bg-[var(--color-cyan)] shadow-[0_0_10px_#00e5ff] animate-pulse mx-2"></div>
              <div className="text-[var(--color-cyan)] uppercase tracking-[2px] text-[10px] font-bold">Available for opportunities</div>
            </div>
          </div>
        </div>
        
        <form className="space-y-6 glass-panel p-8 rounded-xl">
          <div className="flex flex-col gap-2">
            <label className="uppercase tracking-[2px] text-[10px] text-[var(--color-text-dim)] font-medium">Name</label>
            <input type="text" placeholder="Your name" className="p-3 bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-lg text-white focus:outline-none focus:border-[var(--color-cyan)] transition-all font-sans text-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="uppercase tracking-[2px] text-[10px] text-[var(--color-text-dim)] font-medium">Email</label>
            <input type="email" placeholder="your.email@example.com" className="p-3 bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-lg text-white focus:outline-none focus:border-[var(--color-cyan)] transition-all font-sans text-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="uppercase tracking-[2px] text-[10px] text-[var(--color-text-dim)] font-medium">Subject</label>
            <input type="text" placeholder="What's this about?" className="p-3 bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-lg text-white focus:outline-none focus:border-[var(--color-cyan)] transition-all font-sans text-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="uppercase tracking-[2px] text-[10px] text-[var(--color-text-dim)] font-medium">Message</label>
            <textarea rows={4} placeholder="Tell me about your project or idea..." className="p-3 bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-lg text-white focus:outline-none focus:border-[var(--color-cyan)] transition-all font-sans text-sm resize-none"></textarea>
          </div>
          <button type="button" className="w-full py-4 glass-panel border-[var(--color-cyan)] text-[var(--color-cyan)] hover:bg-[var(--color-cyan)] hover:text-[#05070a] text-[10px] uppercase tracking-[2px] transition-all rounded-lg font-bold mt-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

import React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="bg-transparent border-t border-white/10 pt-16 pb-8 px-8 md:px-24 text-[var(--color-text-dim)] text-sm relative z-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
      <div className="md:w-1/3">
        <h3 className="text-[var(--color-cyan)] font-display text-xl mb-3 font-bold">B. Sai Naga Sowri</h3>
        <p className="leading-relaxed">Bachelor's in Computer Science student passionate about algorithmic problem solving, full-stack development, and emerging technologies.</p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Quick Links</h4>
        <ul className="space-y-3">
          {[
            {name: 'Home', path: '/'}, 
            {name: 'About', path: '/about'}, 
            {name: 'Experience', path: '/experience'}, 
            {name: 'Projects', path: '/projects'}, 
            {name: 'Blog', path: '/blog'}, 
            {name: 'Contact', path: '/contact'}
          ].map(link => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-[var(--color-cyan)] transition-colors">{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Connect</h4>
        <ul className="space-y-4">
          <li><a href="mailto:isowri4ku@gmail.com" className="flex items-center gap-3 hover:text-[var(--color-cyan)] transition-colors"><Mail size={16}/> Email</a></li>
          {/* Phone placeholder – let user update later if needed */}
          <li><a href="#" className="flex items-center gap-3 hover:text-[var(--color-cyan)] transition-colors"><Phone size={16}/> Phone</a></li>
          <li className="flex items-center gap-4 mt-4 text-white">
            <a href="https://github.com/Eren1573" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-cyan)] transition-colors"><Github size={18}/></a>
            <a href="https://www.linkedin.com/in/sai-naga-sowri-bhallamudi-b5149b327/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-cyan)] transition-colors"><Linkedin size={18}/></a>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center pt-8 border-t border-white/10 relative">
      <div className="text-center space-y-2">
        <p>© 2026 B. Sai Naga Sowri. All rights reserved.</p>
        <p>Built with 💜 using React, TypeScript, and Tailwind CSS</p>
      </div>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="absolute right-0 bottom-0 md:top-8 w-10 h-10 rounded-full bg-[var(--color-cyan)] text-[var(--color-bg-deep)] flex items-center justify-center hover:scale-110 transition-transform"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  </footer>
);

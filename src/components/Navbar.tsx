import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && 
            element.offsetTop <= scrollPosition && 
            (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    if (nextIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 bg-[var(--color-nav-bg)] backdrop-blur-xl border border-[var(--color-glass-border)] rounded-2xl w-[90%] max-w-5xl shadow-2xl transition-colors duration-300">
      <a href="#home" className="text-xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-purple-light)] to-[var(--color-cyan)] cursor-pointer hover:opacity-80 transition-opacity">
        B. Sai Naga Sowri
      </a>
      <div className="hidden md:flex gap-2 items-center">
        {[
          { name: 'Home', id: 'home' },
          { name: 'About', id: 'about' },
          { name: 'Experience', id: 'experience' },
          { name: 'Projects', id: 'projects' },
          { name: 'Contact', id: 'contact' }
        ].map((item) => (
          <a 
            key={item.name} 
            href={`#${item.id}`} 
            className={`px-4 py-2 text-sm rounded-lg transition-all font-medium ${activeSection === item.id ? 'text-[var(--color-text-main)] bg-[var(--color-cyan-dim)]' : 'text-[var(--color-text-dim)] hover:text-[var(--color-text-main)] hover:bg-[var(--color-cyan-dimmer)]'}`}
          >
            {item.name}
          </a>
        ))}
      </div>
      <button 
        onClick={toggleTheme}
        className="p-2 rounded-lg border border-[var(--color-glass-border)] text-[var(--color-text-dim)] hover:text-[var(--color-cyan)] bg-[var(--color-glass)] transition-all flex items-center justify-center cursor-pointer hover:scale-105"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
};

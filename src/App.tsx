import React from 'react';
import { Stars } from './components/Stars';
import { Navbar } from './components/Navbar';
import { SidebarIcons } from './components/SidebarIcons';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen text-[var(--color-text-main)] font-sans selection:bg-[var(--color-cyan)] selection:text-black bg-[var(--color-bg-deep)] overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <SidebarIcons />
      
      <main className="relative w-full bg-[var(--color-bg-deep)] transition-colors duration-300">
        <div className="fixed inset-x-0 inset-y-0 overflow-hidden pointer-events-none z-0">
          <div className="atmosphere flex-1 w-full"></div>
          <div className="glow-orb"></div>
          <Stars />
        </div>
        <div className="relative z-10 pl-0 lg:pl-[72px]">
          <Hero />
          <About />
          <Experience />
          <Projects hideViewAll={true} />
          <Contact />
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

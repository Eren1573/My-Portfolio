import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Stars } from './components/Stars';
import { Navbar } from './components/Navbar';
import { SidebarIcons } from './components/SidebarIcons';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full min-h-screen bg-gradient-to-b from-[#09101a] via-[#101722] to-[#222831] flex flex-col justify-between">
    <div className="relative z-10 pl-0 lg:pl-[72px] flex flex-col min-h-screen">
      <div className="flex-grow pt-32 pb-12">
        {children}
      </div>
      <Footer />
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-white font-sans selection:bg-[var(--color-cyan)] selection:text-black bg-[var(--color-bg-deep)] overflow-x-hidden">
        <Navbar />
        <SidebarIcons />
        
        <main className="relative z-10 transition-all flex flex-col w-full">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={
              <div className="relative w-full bg-[#09101a]">
                <div className="absolute inset-x-0 inset-y-0 overflow-hidden pointer-events-none z-0">
                  <div className="atmosphere flex-1 w-full"></div>
                  <div className="glow-orb"></div>
                  <Stars />
                </div>
                <div className="relative z-10 pl-0 lg:pl-[72px]">
                  <Hero />
                  <Projects />
                  <div className="relative z-10">
                    <Footer />
                  </div>
                </div>
              </div>
            } />
            
            {/* Subpages routes */}
            <Route path="/about" element={
              <PageWrapper>
                <About />
              </PageWrapper>
            } />

            <Route path="/experience" element={
              <PageWrapper>
                <Experience />
              </PageWrapper>
            } />

            <Route path="/projects" element={
              <PageWrapper>
                <Projects hideViewAll={true} />
              </PageWrapper>
            } />

            <Route path="/contact" element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            } />
            
            {/* Catch-all route to home */}
            <Route path="*" element={
              <PageWrapper>
                <Hero />
              </PageWrapper>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

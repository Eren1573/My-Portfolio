import React from 'react';
import { Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 bg-[#0d131a]/80 backdrop-blur-xl border border-white/10 rounded-2xl w-[90%] max-w-5xl shadow-2xl">
      <Link to="/" className="text-xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-[#d1b3ff] to-[#4fd1c5] cursor-pointer">
        B. Sai Naga Sowri
      </Link>
      <div className="hidden md:flex gap-2 items-center">
        {[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Experience', path: '/experience' },
          { name: 'Projects', path: '/projects' },
          { name: 'Contact', path: '/contact' }
        ].map((item) => (
          <Link 
            key={item.name} 
            to={item.path} 
            className={`px-4 py-2 text-sm rounded-lg transition-all font-medium ${currentPath === item.path ? 'text-white bg-[#4fd1c5]/20' : 'text-[var(--color-text-dim)] hover:text-white hover:bg-[#4fd1c5]/10'}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <button className="p-2 rounded-lg border border-[var(--color-glass-border)] text-gray-400 hover:text-[var(--color-cyan)] bg-[var(--color-glass)] transition-all">
        <Moon size={16} />
      </button>
    </nav>
  );
};

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const SidebarIcons = () => (
  <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50 items-center">
    <a href="https://github.com/Eren1573" target="_blank" rel="noopener noreferrer" className="nav-icon">
      <Github size={18} />
    </a>
    <a href="https://www.linkedin.com/in/sai-naga-sowri-bhallamudi-b5149b327/" target="_blank" rel="noopener noreferrer" className="nav-icon">
      <Linkedin size={18} />
    </a>
    <a href="mailto:isowri4ku@gmail.com" className="nav-icon">
      <Mail size={18} />
    </a>
  </div>
);

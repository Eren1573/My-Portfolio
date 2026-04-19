import React from 'react';
import { motion } from 'motion/react';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Projects = ({ hideViewAll = false }: { hideViewAll?: boolean }) => {
  const featuredProjects = [
    {
      title: "Data Structures & Algorithms Repository",
      type: "DNA / JAVA",
      description: "A comprehensive collection of optimized data structures and algorithms implemented in Java, focusing on problem-solving patterns.",
      features: [
        "Graph and Tree traversals with optimized paths",
        "Dynamic programming solutions for classic problems"
      ],
      tags: ["JAVA", "DSA", "ALGORITHMS", "OPTIMIZATION"],
      githubUrl: "#"
    },
    {
      title: "WebDev Portfolio | Decentralized Interface",
      type: "WEB DEVELOPMENT",
      description: "Scalable frontend architectures showing highly optimized rendering pathways and experimental UI implementations.",
      features: [
        "CSS animations and pixel-perfect layouts",
        "React state management optimization"
      ],
      tags: ["REACT.JS", "TAILWIND CSS", "MOTION", "FRONTEND"],
      githubUrl: "#"
    },
    {
      title: "Intelligent Task Manager",
      type: "FULL-STACK SYSTEM",
      description: "Real-world problem solving application designed to boost developer productivity with smart tracking.",
      features: [
        "Real-time database integration",
        "Secure authentication flows"
      ],
      tags: ["NODE.JS", "EXPRESS", "MONGODB", "REACT"],
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className={`${hideViewAll ? 'py-8' : 'min-h-screen py-24'} px-8 md:px-24 relative z-10 flex flex-col justify-center`}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 text-white">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4fd1c5] to-[#b3cde0]">Projects</span>
        </h2>
        <p className="text-center text-[var(--color-text-dim)] mb-16 max-w-2xl mx-auto text-sm uppercase tracking-[4px]">
           A selection of my recent work showcasing algorithmic problem solving and web development
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 flex flex-col group relative"
            >
              <div className="text-[10px] uppercase tracking-[2px] text-[var(--color-cyan)] font-semibold mb-3 tracking-widest">{project.type}</div>
              <h3 className="text-xl mb-4 font-sans text-white font-bold">{project.title}</h3>
              <p className="text-[var(--color-text-dim)] mb-6 text-sm leading-relaxed whitespace-pre-wrap">{project.description}</p>
              
              <ul className="list-disc list-inside text-[var(--color-text-dim)] text-xs mb-8 space-y-2 opacity-80 flex-grow">
                {project.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              
              <div className="flex flex-col mt-auto pt-5 border-t border-[var(--color-glass-border)] gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded text-[10px] text-[var(--color-text-dim)] uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center w-full mt-2">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-cyan)] text-sm font-medium hover:text-white transition-colors">
                    <Github size={18} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!hideViewAll && (
          <div className="text-center mt-16">
            <Link to="/projects" className="inline-block px-10 py-4 glass-panel rounded-full text-[var(--color-text-dim)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-all uppercase tracking-[2px] text-sm font-bold shadow-lg hover:shadow-[var(--color-accent-glow)]">
              VIEW ALL PROJECTS
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

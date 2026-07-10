import React from 'react';
import { motion } from 'motion/react';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Projects = ({ hideViewAll = false }: { hideViewAll?: boolean }) => {
  const featuredProjects = [
    {
      title: "🍎 BodyByte",
      type: "AI POWERED WEB APP",
      description: "A smart, AI-powered nutrition tracker built for Indian and global diets. Log meals by typing or snapping a photo, track macros and micros, monitor water intake, and get weekly AI-generated insights",
      features: [
        "Smart calorie and nutrition tracking system",
        "Personalized health analytics dashboard",
        "AI-ready scalable health tracking platform"
      ],
      tags: ["REACT JS", "VITE", "TAILWIND CSS", "JAVASCRIPT", "FASTAPI", "PYTHON"],
      githubUrl: "https://github.com/Eren1573/BodyByte"
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
  title: "PATH AI",
  type: "AUTONOMOUS DRIVING SIMULATION",
  description: "AI-powered autonomous driving system built using RL and simulated LIDAR perception to perform intelligent lane switching, obstacle avoidance, and real-time decision making in a dynamic multi-lane highway environment.",
  features: [
    "Reinforcement Learning based autonomous navigation",
    "Simulated LIDAR sensor using ray-casting",
    "3-lane highway environment with lane switching",
    "Dynamic traffic vehicle generation",
    "Animal crossing obstacle simulation",
    "Real-time collision detection and avoidance",
    "Deep Q-Network (DQN) based decision making",
    "Real-time simulation visualization using Pygame"
  ],
  tags: [
    "PYTHON",
    "PYGAME",
    "PYTORCH",
    "REINFORCEMENT LEARNING",
    "DQN",
    "LIDAR",
    "AUTONOMOUS DRIVING",
    "AI",
    "SIMULATION"
  ],
      githubUrl: "https://github.com/Eren1573/Path-Ai"
    },

  {
  title: "MEDICO",
  type: "HOSPITAL APPOINTMENT MANAGEMENT PLATFORM",
  description: "A digital-first, multi-hospital appointment booking website built to streamline healthcare scheduling, optimize resource management, and eliminate long wait times through real-time slot allocation and automated tracking.",
  features: [
    "Multi-hospital and doctor profile integration",
    "Real-time appointment slot selection and locking",
    "Unique appointment ID generation module",
    "Automated pre-appointment email and SMS reminders",
    "Dynamic schedule filtering by location and specialty",
    "Dedicated admin dashboard for hospital staff",
    "Live, instant updates for schedule changes and cancellations",
    "Comprehensive front-desk operational workload reduction",
    "Model-View-Controller (MVC) system architecture",
    "Responsive user interface optimized for desktop and mobile layouts"
  ],
  tags: [
    "REACT.JS",
    "TYPESCRIPT",
    "JAVASCRIPT",
    "NODE.JS",
    "MONGODB",
    "TAILWIND CSS",
    "EXPRESS.JS",
    "REST API",
    "MVC ARCHITECTURE",
    "HEALTHCARE TECH"
  ],
  githubUrl:"https://github.com/Eren1573/Medico"
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
        
        <div className={`grid grid-cols-1 md:grid-cols-2 ${hideViewAll ? 'lg:grid-cols-3' : 'max-w-5xl mx-auto'} gap-8`}>
          {(hideViewAll ? featuredProjects : featuredProjects.slice(0, 2)).map((project, idx) => (
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

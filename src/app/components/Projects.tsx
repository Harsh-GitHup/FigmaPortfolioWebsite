import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Neon Commerce',
    category: 'E-commerce Platform',
    image: 'https://images.unsplash.com/photo-1758404196311-70c62a445e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY3liZXJwdW5rJTIwY2l0eSUyMG5lb258ZW58MXx8fHwxNzcwMjkxODM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2025'
  },
  {
    id: 2,
    title: 'DataVision',
    category: 'Analytics Dashboard',
    image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjB1aSUyMGRhcmslMjBtb2RlfGVufDF8fHx8MTc3MDQwNDAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2024'
  },
  {
    id: 3,
    title: 'Swift Banking',
    category: 'Fintech Mobile App',
    image: 'https://images.unsplash.com/photo-1766503206606-27de0861e8a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBzaG93Y2FzZSUyMHNsZWVrfGVufDF8fHx8MTc3MDQwNDAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2024'
  },
  {
    id: 4,
    title: 'Void Architecture',
    category: 'Portfolio Website',
    image: 'https://images.unsplash.com/photo-1694500069324-d782decdd190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMDNkJTIwc2hhcGVzJTIwZGFya3xlbnwxfHx8fDE3NzA0MDQwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2023'
  }
];

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Selected <span className="text-[#39ff14]">Works</span>
        </h2>

        <div className="flex flex-col">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative border-t border-white/10 py-12 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex flex-col md:flex-row justify-between items-baseline relative z-10 mix-blend-difference">
                <h3 className="text-3xl md:text-6xl font-bold text-gray-400 group-hover:text-[#39ff14] transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <span className="text-lg text-gray-500">{project.category}</span>
                  <span className="text-sm border border-white/20 px-3 py-1 rounded-full text-gray-400">
                    {project.year}
                  </span>
                  <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
              
              {/* Hover Image Reveal - Desktop Only */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
                    transition={{ duration: 0.2 }}
                    className="hidden md:block absolute right-20 -top-20 z-20 pointer-events-none w-[400px] h-[300px] rounded-xl overflow-hidden border-2 border-[#39ff14]/50 shadow-2xl shadow-[#39ff14]/20"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#39ff14]/10 mix-blend-overlay" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Image (Always visible but small) */}
              <div className="md:hidden mt-6 rounded-lg overflow-hidden border border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Terminal, 
  Braces, 
  FileJson, 
  Layers, 
  Box, 
  GitBranch,
  Github,
  BookOpen,
  Container,
  FileCode,
  Globe,
  Shield,
  Zap,
  BarChart,
  Cloud,
  Package,
  Cpu,
  Lock,
  Workflow,
  FlaskConical,
} from 'lucide-react';

const categories = [
  {
    title: "Backend & Security",
    skills: [
      { name: 'Django & DRF', icon: Server, color: 'text-green-600' },
      { name: 'Flask', icon: Box, color: 'text-gray-300' },
      { name: 'REST APIs', icon: Globe, color: 'text-blue-400' },
      { name: 'Webhooks', icon: Code2, color: 'text-purple-400' },
      { name: 'JWT & OAuth2', icon: Shield, color: 'text-yellow-500' },
      { name: 'Security (Bcrypt/CORS)', icon: Lock, color: 'text-red-400' },
    ]
  },
  {
    title: "Frontend Ecosystem",
    skills: [
      { name: 'React.js', icon: Code2, color: 'text-blue-400' },
      { name: 'Angular', icon: Braces, color: 'text-red-500' },
      { name: 'Tailwind CSS', icon: Layout, color: 'text-cyan-400' },
      { name: 'Bootstrap', icon: Layers, color: 'text-purple-500' },
      { name: 'Vite / Webpack', icon: Package, color: 'text-yellow-300' },
      { name: 'npm / pnpm', icon: Terminal, color: 'text-orange-400' },
    ]
  },
  {
    title: "Data & Analytics",
    skills: [
      { name: 'MySQL & SQLite', icon: Database, color: 'text-blue-300' },
      { name: 'MongoDB', icon: Database, color: 'text-green-500' },
      { name: 'SQLAlchemy / ORM', icon: FileCode, color: 'text-indigo-400' },
      { name: 'Redis', icon: Zap, color: 'text-red-500' },
      { name: 'Pandas & NumPy', icon: BarChart, color: 'text-blue-500' },
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: 'Docker', icon: Container, color: 'text-blue-500' },
      { name: 'GitHub Actions', icon: Workflow, color: 'text-white' },
      { name: 'AWS (EC2/S3)', icon: Cloud, color: 'text-orange-500' },
      { name: 'Vercel / Render', icon: Cloud, color: 'text-white' },
      { name: 'Git & Workflows', icon: GitBranch, color: 'text-orange-600' },
      {name: 'Postman', icon: FlaskConical, color: 'text-white' },
    ]
  }
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center mb-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tech <span className="text-[#39ff14]">Stack</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Comprehensive toolkit for building secure, scalable, and high-performance applications.
            </p>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-[#39ff14]/50 to-transparent md:hidden" />
        </div>

        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <div key={category.title}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="text-2xl font-bold text-white mb-8 border-l-4 border-[#39ff14] pl-4 flex items-center gap-3"
              >
                {category.title}
              </motion.h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIndex * 0.1) + (index * 0.05) }}
                    whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                    className="p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[#39ff14]/30 transition-all group cursor-default flex flex-col items-center text-center h-full"
                  >
                    <div className={`p-3 rounded-lg bg-black/50 w-fit mb-4 group-hover:scale-110 transition-transform duration-300 ${tech.color}`}>
                      <tech.icon size={28} />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                      {tech.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

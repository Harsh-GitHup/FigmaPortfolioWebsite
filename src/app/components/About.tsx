import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, User } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#39ff14]/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                About <span className="text-[#39ff14]">Me</span>
              </h2>
              
              <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-6">
                <p>
                  Hello! I'm <span className="text-white font-semibold">Harsh Kesharwani</span>, a passionate software developer with a strong foundation in full-stack web development.
                </p>
                <p>
                  I am a <span className="text-[#39ff14]">B.Tech graduate</span> in Computer Science & Engineering from the <span className="text-white">Corporate Institute of Science & Technology</span>, Class of 2024. My academic journey provided me with deep insights into algorithms, data structures, and software engineering principles.
                </p>
                <p>
                  To further hone my practical skills, I completed comprehensive <span className="text-[#39ff14]">Full Stack Python training</span> at <span className="text-white">Naresh IT</span>, where I mastered modern web technologies including Django, React, and database management. I love building scalable applications that solve real-world problems.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card 
                  icon={GraduationCap}
                  title="Education"
                  subtitle="B.Tech in CSE (2024)"
                  detail="Corporate Institute of Science & Technology"
                />
                <Card 
                  icon={Award}
                  title="Certification"
                  subtitle="Full Stack Python"
                  detail="Naresh IT"
                />
              </div>
            </motion.div>
          </div>

          {/* Visual/Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-[#39ff14]/20 rounded-full blur-xl animate-pulse" />
              <div className="relative w-full h-full rounded-full border-2 border-[#39ff14]/50 bg-black/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <User size={120} className="text-gray-400" />
                {/* Note: If you have a real photo, replace the Icon above with an img tag:
                    <img src="/path/to/photo.jpg" alt="Harsh Kesharwani" className="w-full h-full object-cover" /> 
                */}
              </div>
              
              {/* Orbiting elements for decoration */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border border-[#39ff14]/20 rounded-full border-dashed"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Card = ({ icon: Icon, title, subtitle, detail }: { icon: any, title: string, subtitle: string, detail: string }) => (
  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#39ff14]/30 transition-colors">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-[#39ff14]/10 text-[#39ff14]">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        <p className="text-gray-300 font-medium text-sm">{subtitle}</p>
        <p className="text-gray-500 text-sm mt-1">{detail}</p>
      </div>
    </div>
  </div>
);

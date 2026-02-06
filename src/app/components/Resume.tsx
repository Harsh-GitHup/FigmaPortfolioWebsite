import React from "react";
import { motion } from "motion/react";
import {
  Download,
  FileText,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

export const Resume = () => {
  return (
    <section
      id="resume"
      className="py-24 bg-[#050505] relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-[#39ff14]">Resume</span>
            </h2>
            <p className="text-gray-400 text-lg">
              A summary of my professional experience and
              education.
            </p>
          </div>

          <motion.a
            href="/resume.pdf"
            download="Resume_Dev_Portfolio.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-[#39ff14] text-black font-bold rounded-full hover:bg-[#32d911] transition-colors shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)]"
          >
            <Download size={20} />
            Download CV
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-[#39ff14]/10 rounded-lg text-[#39ff14]">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Experience
              </h3>
            </div>

            <TimelineItem
              role="Senior Full Stack Developer"
              company="TechCorp Innovations"
              period="2023 - Present"
              description="Leading development of scalable web applications using Python (Django) and React. Architecting cloud-native solutions on AWS."
            />

            <TimelineItem
              role="Python Developer"
              company="DataFlow Systems"
              period="2021 - 2023"
              description="Developed automated data processing pipelines and RESTful APIs using Flask and PostgreSQL. Optimized database queries improving performance by 40%."
            />

            <TimelineItem
              role="Junior Web Developer"
              company="StartUp Inc"
              period="2019 - 2021"
              description="Collaborated on frontend development using Angular and Bootstrap. Implemented responsive designs and integrated backend APIs."
            />
          </div>

          {/* Education & Preview Column */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Education
                </h3>
              </div>

              <TimelineItem
                role="Bachelor of Technology in Computer Science"
                company="RGPV University"
                period="2020 - 2024"
                description="Specialized in Software Development and Database Systems. Graduated with Honors."
              />
            </div>

            {/* Resume Preview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />

              <div className="relative h-[300px] bg-white rounded-xl overflow-hidden">
                {/* Mock Resume Visual */}
                <div className="w-full h-full p-8 flex flex-col gap-4 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <div className="w-1/3 h-8 bg-black rounded" />
                  <div className="w-full h-4 bg-gray-300 rounded" />
                  <div className="w-full h-4 bg-gray-300 rounded" />
                  <div className="mt-8 w-1/4 h-6 bg-black rounded" />
                  <div className="w-full h-2 bg-gray-200 rounded" />
                  <div className="w-full h-2 bg-gray-200 rounded" />
                  <div className="w-full h-2 bg-gray-200 rounded" />
                </div>
              </div>

              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-white text-black rounded-full shadow-lg"
                >
                  <ExternalLink size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({
  role,
  company,
  period,
  description,
}: {
  role: string;
  company: string;
  period: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 border-l border-white/10 pb-8 last:pb-0"
  >
    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#39ff14] shadow-[0_0_10px_#39ff14]" />
    <h4 className="text-xl font-bold text-white">{role}</h4>
    <div className="flex items-center gap-3 text-sm text-gray-400 mt-1 mb-3">
      <span className="text-[#39ff14]">{company}</span>
      <span>•</span>
      <span>{period}</span>
    </div>
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>
  </motion.div>
);
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
           {/* Logo / Brand */}
           <div className="text-2xl font-bold tracking-tighter">
            <span className="text-white">DEV</span>
            <span className="text-[#39ff14]">.IO</span>
          </div>

          <div className="flex gap-6">
            <SocialLink href="#" icon={<Github size={20} />} />
            <SocialLink href="#" icon={<Linkedin size={20} />} />
            <SocialLink href="#" icon={<Twitter size={20} />} />
            <SocialLink href="mailto:hello@dev.io" icon={<Mail size={20} />} />
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Dev Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-[#39ff14] hover:bg-white/10 transition-all hover:scale-110"
  >
    {icon}
  </a>
);

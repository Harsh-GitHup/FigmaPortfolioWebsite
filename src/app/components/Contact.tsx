import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#39ff14]/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's <span className="text-[#39ff14]">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Have a project in mind or want to discuss the latest in Python and Web Development? Drop me a message and I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#39ff14]">
                  <Send size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Me</h4>
                  <a href="mailto:harshkesharwani037@gmail.com" className="hover:text-[#39ff14] transition-colors">harshkesharwani037@gmail.com</a>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mt-8">
                <h4 className="text-[#39ff14] font-semibold mb-2">Current Status</h4>
                <p className="text-sm text-gray-400">
                  Open for freelance projects and full-time opportunities.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
          >
            {formState === 'success' ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-[#39ff14]/20 text-[#39ff14] rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle size={40} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I'll be in touch shortly.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-[#39ff14] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14] transition-all placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14] transition-all placeholder:text-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-[#39ff14] focus:ring-1 focus:ring-[#39ff14] transition-all placeholder:text-gray-600 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formState === 'submitting'}
                  type="submit"
                  className="w-full py-4 bg-[#39ff14] text-black font-bold rounded-xl hover:bg-[#32d911] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

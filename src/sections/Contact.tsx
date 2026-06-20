import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-[100px] -z-10 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1.5 w-20 bg-electric mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities as a Software Developer or Mobile Developer. 
            Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-electric/10 rounded-2xl flex items-center justify-center text-electric">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">Email</p>
                <a href={`mailto:${portfolioData.contact.email}`} className="text-lg font-bold hover:text-electric transition-colors">
                  {portfolioData.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-electric/10 rounded-2xl flex items-center justify-center text-electric">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">LinkedIn</p>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-electric transition-colors">
                  Ruth Fidia Siregar
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-electric/10 rounded-2xl flex items-center justify-center text-electric">
                <Github size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">GitHub</p>
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-electric transition-colors">
                  {/* {portfolioData.name.replace(/\s+/g, '').toLowerCase()} */}
                  twinklestar-o
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Prompt / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-navy-800 p-8 rounded-3xl border border-gray-100 dark:border-navy-700 shadow-xl"
          >
            <div className="flex items-center space-x-3 text-electric mb-6">
               <MessageSquare size={24} />
               <h3 className="text-xl font-bold">Feedback & Collaboration</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I am open to discussions regarding mobile app development (Flutter), system analysis, or full-stack web projects. 
              Let's connect and build something amazing together!
            </p>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex items-center justify-center space-x-2 w-full bg-electric hover:bg-cyan text-navy-900 px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-electric/20 group"
            >
              <span>Send Message</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="mt-6 text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
               Typical response time: Within 24 hours
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

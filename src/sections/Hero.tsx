import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 dark:opacity-20">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-electric rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-navy-800 border border-gray-200 dark:border-navy-700 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">Available for Opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">
              {portfolioData.name}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
            {portfolioData.headline}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="flex items-center space-x-2 bg-electric hover:bg-cyan text-navy-900 px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-electric/20"
            >
              <span>View Projects</span>
              <ArrowRight size={20} />
            </a>
            <a
              href="/"
              className="flex items-center space-x-2 bg-gray-100 dark:bg-navy-800 hover:bg-gray-200 dark:hover:bg-navy-700 px-6 py-3 rounded-xl font-bold transition-all"
            >
              <Download size={20} />
              <span>Download CV</span>
            </a>
          </div>

          <div className="flex space-x-6">
            {[
              { icon: Github, href: portfolioData.contact.github, label: 'GitHub' },
              { icon: Linkedin, href: portfolioData.contact.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${portfolioData.contact.email}`, label: 'Email' },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-gray-500 hover:text-electric transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Abstract Initials Graphic */}
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-electric to-cyan rounded-3xl rotate-6 opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-white dark:bg-navy-800 rounded-3xl border-2 border-electric/30 flex items-center justify-center -rotate-3 transition-transform hover:rotate-0 duration-500 overflow-hidden group">
               {/* Decorative Code Lines */}
               <div className="absolute inset-0 opacity-10 font-mono text-[10px] p-4 flex flex-col gap-2 overflow-hidden pointer-events-none">
                <div className="text-electric">const developer = {"{"}</div>
                <div className="pl-4">name: 'Ruth',</div>
                <div className="pl-4">role: 'Mobile & Full-Stack',</div>
                <div className="pl-4">skills: ['Flutter', 'React', 'C#'],</div>
                <div className="pl-4 text-cyan">status: 'Ready to build'</div>
                <div>{"};"}</div>
                <div className="mt-2 text-electric">while(learning) {"{"}</div>
                <div className="pl-4">passion++;</div>
                <div className="pl-4">innovation = true;</div>
                <div>{"}"}</div>
              </div>
              
              <span className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-electric to-cyan opacity-20 select-none">
                RS
              </span>
              <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                 <div className="h-1 w-8 bg-electric rounded-full opacity-50"></div>
                 <div className="h-1 w-4 bg-cyan rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

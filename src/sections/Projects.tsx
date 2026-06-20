import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, Github, Lock, Code2 } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-navy-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1.5 w-20 bg-electric mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-navy-800 rounded-2xl border border-gray-100 dark:border-navy-700 overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900">
                {project.image ? (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 blur-[2px] brightness-[0.8] scale-110 group-hover:blur-none group-hover:scale-100 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-60"></div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center relative">
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                      <div className="absolute top-0 left-0 p-4 font-mono text-[8px] text-electric">
                        {`// ${project.title.replace(/\s+/g, '-').toLowerCase()}.js`}
                      </div>
                    </div>
                    <Code2 size={64} className="text-electric/20 group-hover:text-electric/40 transition-colors" />
                  </div>
                )}
                
                {project.isPrivate && (
                  <div className="absolute top-4 right-4 bg-navy-900/60 backdrop-blur-md p-2 rounded-lg text-gray-400 z-10">
                    <Lock size={16} />
                  </div>
                )}
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-electric transition-colors">{project.title}</h3>
                  <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                     <span className="font-bold text-electric/80">{project.role}</span>
                     <span>•</span>
                     <span>{project.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6 flex-grow">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Context</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{project.problem}</p>
                  </div>
                  <div>
                     <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Impact</h4>
                     <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{project.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-gray-100 dark:bg-navy-700 text-[10px] font-bold rounded uppercase tracking-tighter text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-100 dark:border-navy-700">
                  {project.repoUrl ? (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm font-bold hover:text-electric transition-colors">
                      <Github size={16} />
                      <span>Repo</span>
                    </a>
                  ) : (
                    <span className="flex items-center space-x-2 text-xs text-gray-400 italic">
                      <Lock size={14} />
                      <span>Private / Unavailable</span>
                    </span>
                  )}
                  
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm font-bold hover:text-electric transition-colors ml-auto">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

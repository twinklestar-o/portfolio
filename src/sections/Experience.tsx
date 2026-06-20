import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1.5 w-20 bg-electric mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0 group"
            >
              {/* Timeline Line */}
              {index !== portfolioData.experience.length - 1 && (
                <div className="absolute left-[11px] top-7 bottom-0 w-0.5 bg-gray-200 dark:bg-navy-700 group-hover:bg-electric/30 transition-colors"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-white dark:border-navy-900 bg-electric shadow-sm z-10"></div>

              <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-gray-100 dark:border-navy-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 dark:text-white">{exp.role}</h3>
                    <p className="text-electric font-semibold">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center md:justify-end space-x-2">
                       <Calendar size={14} />
                       <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center md:justify-end space-x-2 mt-1">
                       <MapPin size={14} />
                       <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 text-sm md:text-base">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-electric/50 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

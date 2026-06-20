import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { CheckCircle2 } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
          <div className="h-1.5 w-20 bg-electric mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {portfolioData.skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-gray-100 dark:border-navy-700 hover:border-electric/30 transition-all group"
            >
              <h3 className="text-lg font-bold mb-6 flex items-center text-navy-900 dark:text-white group-hover:text-electric transition-colors">
                <span className="w-8 h-1 bg-electric mr-3 rounded-full"></span>
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 size={16} className="text-electric flex-shrink-0" />
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

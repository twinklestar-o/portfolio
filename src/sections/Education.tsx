import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-navy-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Leadership</h2>
          <div className="h-1.5 w-20 bg-electric mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-gray-100 dark:border-navy-700 shadow-sm"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center text-electric">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-electric font-semibold">{edu.school}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1.5">
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <MapPin size={14} />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center space-x-1.5 px-2 py-0.5 bg-electric/10 rounded-full text-electric font-bold">
                  <Award size={14} />
                  <span>GPA: {edu.gpa}</span>
                </div>
              </div>

              <ul className="space-y-4">
                {edu.details.map((detail, i) => (
                  <li key={i} className="flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-electric flex-shrink-0"></div>
                    <span className="text-sm md:text-base">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Additional Leadership / Certifications visual filler if needed, but spec focus is academic merit and leadership */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bg-gradient-to-br from-electric to-cyan p-0.5 rounded-2xl shadow-xl shadow-electric/10"
          >
             <div className="bg-white dark:bg-navy-900 w-full h-full p-8 rounded-2xl flex flex-col justify-center">
                <div className="mb-6">
                   <span className="bg-electric/10 text-electric text-[10px] uppercase font-black px-2 py-1 rounded tracking-widest">Scholarship Recognition</span>
                </div>
                <h3 className="text-2xl font-black mb-4">Merit Scholarship Recipient</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">
                   Recognized for academic excellence at Institut Teknologi Del for 3 consecutive semesters.
                </p>
                <div className="flex items-center space-x-4">
                   <div className="h-1 flex-grow bg-electric/10 rounded-full">
                      <div className="h-full w-full bg-electric rounded-full"></div>
                   </div>
                   <span className="text-xs font-bold text-electric">TOP TIER</span>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

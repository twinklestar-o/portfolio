import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-navy-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Overview</h2>
            <div className="h-1.5 w-20 bg-electric mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-gray-100 dark:border-navy-700 shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center text-electric mx-auto mb-4">
                <Briefcase size={24} />
              </div>
              <h3 className="font-bold mb-2">Experience</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Software & Mobile Developer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-gray-100 dark:border-navy-700 shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center text-cyan mx-auto mb-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-bold mb-2">Education</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Informatics Engineering at Institut Teknologi Del</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-navy-800 p-8 rounded-2xl border border-gray-100 dark:border-navy-700 shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center text-electric mx-auto mb-4">
                <Award size={24} />
              </div>
              <h3 className="font-bold mb-2">Merit</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">3-Semester Scholarship Holder</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            <p className="mb-6">{portfolioData.about}</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
               <div className="flex items-center space-x-2 text-sm">
                  <span className="text-electric font-bold">GPA:</span>
                  <span>{portfolioData.education[0].gpa}</span>
               </div>
               <div className="flex items-center space-x-2 text-sm">
                  <span className="text-electric font-bold">Location:</span>
                  <span>Indonesia</span>
               </div>
               <div className="flex items-center space-x-2 text-sm">
                  <span className="text-electric font-bold">Specialty:</span>
                  <span>Flutter, React, C#, Laravel</span>
               </div>
               {/* <div className="flex items-center space-x-2 text-sm">
                  <span className="text-electric font-bold">Currently:</span>
                  <span className="text-navy-900 dark:text-white font-medium">Software Dev & Program Analyst @ Tera Multi Wahana</span>
               </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

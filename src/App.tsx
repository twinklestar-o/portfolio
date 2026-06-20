import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import JsonLd from './components/JsonLd';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 text-navy-900 dark:text-gray-300 selection:bg-electric selection:text-navy-900 transition-colors duration-300">
      <JsonLd />
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm border-t border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-800">
        <p>&copy; {new Date().getFullYear()} Ruth Fidia Siregar.</p>
      </footer>
    </div>
  );
}

export default App;

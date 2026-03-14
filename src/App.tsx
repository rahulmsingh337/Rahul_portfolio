import { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { EducationExtra } from './components/EducationExtra';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 selection:text-blue-200">
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AnimatedBackground />
          <Navigation />
          
          <main>
            <Hero />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Experience />
              <Achievements />
              <Projects />
              <Skills />
              <EducationExtra />
            </motion.div>
          </main>

          <footer className="py-12 px-6 border-t border-white/5 text-center">
            <div className="max-w-5xl mx-auto">
              <div className="text-2xl font-bold text-white mb-6">RS<span className="text-blue-500">.</span></div>
              <p className="text-slate-500 text-sm mb-8">
                © {new Date().getFullYear()} Rahul Singh. All rights reserved.
              </p>
              <div className="flex justify-center gap-6 text-slate-400">
                <a href="mailto:rs58598@gmail.com" className="hover:text-blue-400 transition-colors">Email</a>
                <a href="https://www.linkedin.com/in/rahul-singh-a7793916b/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

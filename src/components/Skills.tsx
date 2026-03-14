import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Info } from 'lucide-react';

const skillCategories = [
  {
    title: "Core ABAP",
    skills: [
      { name: "SAP ABAP", level: 90, detail: "Expertise in 7.5 coding techniques, Object Oriented ABAP, and Runtime Analysis." },
      { name: "ALV / SALV", level: 95, detail: "Advanced reporting using Classical, Interactive, and ALV Grid/SALV patterns." },
      { name: "BRF Plus", level: 75, detail: "Business Rule Framework plus for flexible business logic management." },
      { name: "Smart/Adobe Forms", level: 85, detail: "Designing complex layouts and programming for document outputs." }
    ]
  },
  {
    title: "HANA & Modern UI",
    skills: [
      { name: "SAP HANA", level: 80, detail: "In-depth knowledge of HANA architecture, CDS views, and AMDP push-down." },
      { name: "SAP UI5 / Fiori", level: 85, detail: "Building responsive web applications and standard Fiori app enhancements." },
      { name: "Web Dynpro", level: 80, detail: "Experience in building web-based applications using Web Dynpro ABAP." },
      { name: "CDS Views", level: 85, detail: "Core Data Services for data modeling and high-performance analytics." }
    ]
  },
  {
    title: "Integration & Modules",
    skills: [
      { name: "ALE IDocs", level: 85, detail: "Asynchronous integration and data migration using IDocs and BAPIs." },
      { name: "SAP FICO", level: 80, detail: "Functional understanding of Finance and Controlling modules for technical integration." },
      { name: "External APIs", level: 85, detail: "Integrating SAP systems with external REST/SOAP APIs." },
      { name: "SQL Trace", level: 90, detail: "Performance tuning using SQL Trace and System Dump Analysis." }
    ]
  }
];

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Skills Showcase</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A categorized breakdown of technical expertise in the SAP ecosystem, from core development to modern cloud-ready architectures.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              {category.title}
            </h3>

            <div className="space-y-8">
              {category.skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-300 font-medium text-sm">{skill.name}</span>
                      <Info size={14} className="text-slate-600 group-hover:text-blue-400 transition-colors cursor-help" />
                    </div>
                    <span className="text-blue-400 text-xs font-bold">{skill.level}%</span>
                  </div>
                  
                  <div className="h-1.5 bg-slate-800/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: (catIndex * 0.1) + (index * 0.05) }}
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
                    />
                  </div>

                  <AnimatePresence>
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute z-20 bottom-full left-0 mb-4 p-4 rounded-xl bg-slate-800 border border-blue-500/30 shadow-2xl w-64 pointer-events-none"
                      >
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {skill.detail}
                        </p>
                        <div className="absolute -bottom-2 left-4 w-4 h-4 bg-slate-800 border-r border-b border-blue-500/30 rotate-45" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

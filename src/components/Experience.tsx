import { motion } from 'framer-motion';
import { Briefcase, ChevronDown, Award } from 'lucide-react';
import { useState } from 'react';

const experience = [
  {
    company: "Accenture Limited",
    role: "Software Developer Lead",
    dates: "2025/12 – Present",
    location: "Noida",
    impact: "Lead Developer",
    bullets: [
      "Used the ABAP Runtime analysis, while executing, SQL Trace and System Dump Analysis to analyse and improve Runtime performance of the existing ABAP programs.",
      "Usage of correct BAPIs for the migration data to its master tables.",
      "Worked on latest coding techniques for SAP ABAP 7.5.",
      "Created various Utilities in different functional modules which are Infosys certified and SAP certified also.",
      "Integration of SAP with various external APIs."
    ]
  },
  {
    company: "INFOSYS Private Limited",
    role: "SAP ABAP CONSULTANT",
    dates: "2021/05 – 2025/12",
    location: "Noida",
    impact: "Consultant",
    bullets: [
      "Excellent contributor to any project team and possesses excellent communication, presentation, and problem-solving skills.",
      "Involved in interacting with clients and understanding various client requirements and was supporting the functional team regarding the technical requirement.",
      "Responsibilities included coding, testing, deployment, quality management and documentation.",
      "Experience in Report programming - Classical, Interactive and ALV.",
      "Experience in interface programming including Proxies, RFC functional Call and Idocs, web dynpro.",
      "Experience in designing layout and programming in Smart forms and Adobe forms.",
      "Worked on Data Dictionary concepts."
    ]
  }
];

export const Experience = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full" />
      </motion.div>

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div 
              onClick={() => setExpanded(expanded === index ? null : index)}
              className={`p-8 rounded-2xl border transition-all cursor-pointer ${
                expanded === index 
                  ? 'bg-slate-900/60 border-blue-500/50 shadow-lg shadow-blue-500/10' 
                  : 'bg-slate-900/20 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-right hidden md:block">
                    <p className="text-slate-300 font-medium">{exp.dates}</p>
                    <p className="text-slate-500 text-sm">{exp.location}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === index ? 180 : 0 }}
                    className="text-slate-500"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={false}
                animate={{ height: expanded === index ? 'auto' : 0, opacity: expanded === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="pt-8 space-y-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                      {exp.impact}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Calendar, Filter } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: "AMS Track Lead",
    dates: "2022/08 – 2025/12",
    type: "Lead",
    tech: ["Debugging", "KT", "P1/P2 Support"],
    bullets: [
      "Helped team in complex technical issues and provided KT for advanced debugging skills.",
      "Submitted POC for new projects and joined design discussion.",
      "Managed to deliver all the projects/Enhancement without any major escalation.",
      "Joined Critical calls with user/business for P1/P2."
    ]
  },
  {
    title: "Creation of New Output type",
    dates: "2024/02 – 2024/05",
    type: "Automation",
    tech: ["Email Automation", "BOL", "Packing Slip"],
    bullets: [
      "Led assessment and enhancement of US email automation for BOL and packing slip outputs.",
      "Consolidated multiple PO's/DN's into a single document when only one stop is present."
    ]
  },
  {
    title: "LT03 Enhancement",
    dates: "2023/11 – 2024/01",
    type: "Enhancement",
    tech: ["Transaction Code", "POC", "Analysis"],
    bullets: [
      "Led solution development for LT03 transaction code in SAP.",
      "Conducted thorough analysis, proposed solution, and executed Proof of Concept.",
      "Successfully implemented solution, receiving client appreciation."
    ]
  },
  {
    title: "COPA report Reconciliation",
    dates: "2023/09 – 2023/12",
    type: "Reporting",
    tech: ["FI", "COPA", "Background Jobs"],
    bullets: [
      "Fetch frozen index and user from background job, calculate FI, COPA, Statistical value."
    ]
  },
  {
    title: "Traceability report",
    dates: "2024/08 – 2025/04",
    type: "Reporting",
    tech: ["Business Process", "Data Summary"],
    bullets: [
      "Simplify business process or to gather summary data of order / delivery information."
    ]
  },
  {
    title: "Smartshift project",
    dates: "2025/12 – Present",
    type: "Automation",
    tech: ["Automation Tool", "Business Activities"],
    bullets: [
      "Working with Smart shift team to develop the automation tool to enhance business activities."
    ]
  }
];

const categories = ["All", "Automation", "Reporting", "Enhancement", "Lead"];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Key Projects</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeFilter === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'bg-slate-900/40 text-slate-400 border border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all flex flex-col group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Code2 size={20} />
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                  <Calendar size={14} />
                  {project.dates}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-blue-500/70">
                    {t}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-3 flex-grow">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

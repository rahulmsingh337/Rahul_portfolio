import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Calendar } from 'lucide-react';

const resumeData = {
  name: "Rahul Singh",
  title: "SAP ABAP Consultant",
  summary: "As an experienced professional in S/4 HANA implementation and conversion, I possess in-depth knowledge of ABAP on HANA development and have experience building Web dynpro, CDS views, AMDP, and other code push-down techniques. I am well-versed in the architecture of HANA with deployment options and have a comprehensive understanding of in-memory concepts.",
  location: "Noida, Uttar Pradesh",
  email: "rs58598@gmail.com",
  phone: "+918989805836",
  dob: "1999/04/20",
  linkedin: "https://www.linkedin.com/in/rahul-singh-a7793916b/"
};

export const Hero = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            Available for Opportunities
          </motion.div>
          
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            {resumeData.name}
          </h1>
          <h2 className="text-2xl lg:text-3xl font-medium text-blue-400 mb-8">
            {resumeData.title}
          </h2>
          
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
            {resumeData.summary}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToExperience}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              View Experience
            </button>
            <a
              href="#resume"
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 transition-all active:scale-95"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <div className="relative z-10 p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Mail size={20} />
                </div>
                <span>{resumeData.email}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Phone size={20} />
                </div>
                <span>{resumeData.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <MapPin size={20} />
                </div>
                <span>{resumeData.location}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Calendar size={20} />
                </div>
                <span>Born: {resumeData.dob}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Linkedin size={20} />
                </div>
                <a href={resumeData.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

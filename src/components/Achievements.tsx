import { motion } from 'framer-motion';
import { Trophy, Star, Award, Heart } from 'lucide-react';

const achievements = [
  {
    title: "UNIT RISE Award",
    context: "INFOSYS PRIVATE LIMITED",
    description: "Received 5 Unit Rise Award within the SAP unit in recognition of outstanding work and delivery of exceptional results.",
    icon: <Trophy className="text-yellow-400" size={32} />
  },
  {
    title: "Best performer IN EASSAP",
    context: "INFOSYS PRIVATE LIMITED",
    description: "Received the best performer Award in the for exceptional performance in the EASSAP UNIT.",
    icon: <Star className="text-blue-400" size={32} />
  },
  {
    title: "INSTA REWARDS",
    context: "INFOSYS PRIVATE LIMITED",
    description: "Received 16 consecutive Insta Rewards for consistently demonstrating commitment and delivering exceptional results.",
    icon: <Award className="text-purple-400" size={32} />
  },
  {
    title: "Ace COE performer",
    context: "INFOSYS PRIVATE LIMITED",
    description: "Received the ACE COE performer Award in the for exceptional performance in the EASSAP UNIT.",
    icon: <Trophy className="text-emerald-400" size={32} />
  }
];

const topImpact = [
  { label: "Insta Rewards", value: "16", suffix: "Consecutive" },
  { label: "Unit Rise Awards", value: "5", suffix: "Total" },
  { label: "Experience", value: "5+", suffix: "Years" }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Recognition & Impact</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A testament to commitment, technical excellence, and consistent delivery of high-quality SAP solutions.
          </p>
        </motion.div>

        {/* Impact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {topImpact.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-800/40 border border-white/5 text-center group hover:border-blue-500/30 transition-all"
            >
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {item.value}
              </div>
              <div className="text-sm text-blue-400 font-semibold uppercase tracking-wider mb-1">
                {item.suffix}
              </div>
              <div className="text-slate-400 text-sm">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-blue-500/20 transition-all group"
            >
              <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-blue-400 text-sm font-semibold mb-4">{item.context}</p>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

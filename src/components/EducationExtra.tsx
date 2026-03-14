import { motion } from 'framer-motion';
import { GraduationCap, Languages, Heart, Users } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "Vellore Institute of Technology",
    location: "Vellore",
    dates: "2016 – 2020"
  },
  {
    degree: "Intermediate",
    institution: "DAV PUBLIC SCHOOL",
    location: "DUDHICUHA",
    dates: "2014 – 2016"
  },
  {
    degree: "Matriculation",
    institution: "DAV PUBLIC SCHOOL",
    location: "CWS JAYANT",
    dates: "2002 – 2014"
  }
];

const extra = {
  organizations: [
    {
      name: "LEO Club",
      role: "PUBLICITY HEAD",
      location: "Vellore, Tamil Nadu",
      description: "We encourage youths to develop leadership qualities by participating in social service activities."
    }
  ],
  volunteer: [
    {
      title: "LEO education",
      institution: "DON BOSCO school",
      description: "Founder of LEO education and collaborates with DON BOSCO School, Vellore for going to Slum areas to teach the students."
    }
  ],
  interests: ["Cricket", "Drawing", "Dance", "Watching movies", "Coding", "Travelling"],
  languages: ["English", "Hindi", "Bhojpuri"]
};

export const EducationExtra = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>

          <div className="space-y-8 relative before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-px before:bg-slate-800">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-12 h-12 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
                </div>
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <p className="text-blue-400 text-sm font-medium">{edu.institution}</p>
                <div className="flex items-center gap-4 mt-2 text-slate-500 text-xs">
                  <span>{edu.dates}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Extra */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <Users size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Organizations & Volunteering</h2>
            </div>
            <div className="space-y-6">
              {extra.organizations.map((org, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900/40 border border-white/5">
                  <h3 className="text-white font-bold">{org.name} — {org.role}</h3>
                  <p className="text-slate-400 text-sm mt-2">{org.description}</p>
                </div>
              ))}
              {extra.volunteer.map((v, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900/40 border border-white/5">
                  <h3 className="text-white font-bold">{v.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{v.institution}</p>
                  <p className="text-slate-400 text-sm mt-2">{v.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4 text-white font-bold">
                <Languages size={18} className="text-blue-400" />
                Languages
              </div>
              <div className="flex flex-wrap gap-2">
                {extra.languages.map((lang, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-slate-800/50 text-slate-300 text-xs">
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4 text-white font-bold">
                <Heart size={18} className="text-pink-400" />
                Interests
              </div>
              <div className="flex flex-wrap gap-2">
                {extra.interests.map((interest, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-slate-800/50 text-slate-300 text-xs">
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

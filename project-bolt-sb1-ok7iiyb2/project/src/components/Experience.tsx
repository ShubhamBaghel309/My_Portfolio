import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Undergraduate Research Intern",
    company: "National Institute of Technology, Kurukshetra / ISRO",
    period: "Dec 2024 - Ongoing",
    location: "Haryana, India",
    achievements: [
      "Proposed jamming mitigation through jammed signal reconstruction using GANs.",
      "Preprocessed raw GNSS signal data into a structured format for analysis.",
      "Achieved 98% accuracy in GNSS jamming classification with VGG16 and ML models (SVM, LR,RF) using 10-fold cross-validation."
    ]
  },
  {
    title: "BCG GenAI Job Simulation",
    company: "Forage (Virtual Internship)",
    period: "Nov 2024",
    achievements: [
      "Developed an AI-powered chatbot for BCG's GenAI Consulting team, automating financial analysis from 10-K and 10-Q reports, improving turnaround time by 60%.",
      "Engineered rule-based logic for chatbot responses, enhancing data interpretation accuracy by 30%."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#111111] rounded-xl overflow-hidden group p-6"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 bg-purple-500/10 rounded-full text-purple-500"
                >
                  <Briefcase className="w-6 h-6" />
                </motion.div>

                <div className="flex-1">
                  <motion.h3 
                    className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {exp.title}
                  </motion.h3>
                  <p className="text-purple-400 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {exp.period} {exp.location && `• ${exp.location}`}
                  </p>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="text-gray-300 text-sm flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + (i * 0.1) }}
                      >
                        <span className="text-purple-400 mt-1.5">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
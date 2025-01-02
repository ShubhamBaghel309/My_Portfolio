import { motion } from 'framer-motion';
import { Code2, Wrench, Terminal, Cpu, GraduationCap, Award } from 'lucide-react';

const skills = [
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Python", "SQL", "C","HTML5"]
  },
  {
    category: "Frameworks/Tools",
    icon: <Wrench className="w-6 h-6" />,
    items: ["TensorFlow", "PyTorch", "Keras", "LangChain", "Scikit-learn", "Streamlit", "Django"]
  },
  {
    category: "Developer Tools",
    icon: <Terminal className="w-6 h-6" />,
    items: ["GitHub", "Git", "Google Colab", "Azure", "AWS", "Anaconda", "CUDA"]
  },
  {
    category: "Specializations",
    icon: <Cpu className="w-6 h-6" />,
    items: ["LLMs", "Vector Databases", "NLP", "Computer Vision", "Deep Learning", "Machine Learning"]
  }
];

const certifications = [
  "Azure AI-900 (890/1000)",
  "Supervised Machine Learning",
  "Generative AI Beginner (Google Cloud)",
  "Postman API Fundamentals Expert"
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111111] rounded-xl p-6 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="p-3 bg-purple-500/10 rounded-full text-purple-500"
              >
                <GraduationCap className="w-6 h-6" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-semibold text-purple-400"
                whileHover={{ x: 5 }}
              >
                Education & Background
              </motion.h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                🎓 2nd-year B.Tech Student in Artificial Intelligence and Machine Learning at <span className="text-purple-400">NIT Kurukshetra</span>
              </p>
              <p className="text-gray-300 leading-relaxed">
                🚀 Currently serving as an Undergraduate Research Assistant, contributing to ISRO-funded projects and solving real-world problems with AI and ML innovations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Passionate about creating impactful solutions for students and beyond, with a focus on Machine Learning, Deep Learning, and Generative AI.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111111] rounded-xl p-6 group"
            >
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="p-3 bg-purple-500/10 rounded-full text-purple-500 w-fit mb-4"
              >
                {skill.icon}
              </motion.div>
              
              <motion.h3 
                className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                {skill.category}
              </motion.h3>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <motion.span
                    key={item}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111111] rounded-xl p-6 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="p-3 bg-purple-500/10 rounded-full text-purple-500"
            >
              <Award className="w-6 h-6" />
            </motion.div>
            <motion.h3 
              className="text-2xl font-semibold text-purple-400"
              whileHover={{ x: 5 }}
            >
              Certifications
            </motion.h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-purple-500/10 rounded-lg p-4 text-purple-300"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
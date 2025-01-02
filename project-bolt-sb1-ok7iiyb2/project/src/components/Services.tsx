import { motion } from 'framer-motion';
import { Brain, Code, Database } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Expertise in developing and deploying machine learning models for real-world applications."
  },
  {
    icon: Code,
    title: "AI Development",
    description: "Building intelligent systems and applications using cutting-edge AI technologies."
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Creating robust data pipelines and infrastructure for AI/ML applications."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-400">Specialized in AI and Machine Learning solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1A1A1A] p-6 rounded-xl"
            >
              <service.icon className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
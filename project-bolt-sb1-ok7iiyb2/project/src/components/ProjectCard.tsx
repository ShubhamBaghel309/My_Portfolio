import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technologies?: string[];
}

export default function ProjectCard({ title, description, link, technologies = [] }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-[#111111] p-6 rounded-xl"
    >
      <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
        {title}
        <div className="flex gap-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
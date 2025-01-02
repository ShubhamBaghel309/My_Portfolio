import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange(() => {
      setIsScrolled(scrollY.get() > 0);
    });
  }, [scrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <motion.a
          href="/"
          className="text-2xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          
        </motion.a>

        <ul className="flex items-center gap-2 md:gap-4">
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              About
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, 'experience')}
              className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Experience
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Projects
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Contact
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/images/projects/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Resume
            </a>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
}
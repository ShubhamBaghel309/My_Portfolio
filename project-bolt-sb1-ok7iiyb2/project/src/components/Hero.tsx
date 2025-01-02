import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import meImage from './me.png';

const FloatingParticle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [1, 2, 1],
      opacity: [0, 0.8, 0],
      y: [-20, -100],
      x: [-20, 20],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
  />
);

const AnimatedGradientOrb = ({ className }: { className: string }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 30px rgba(128, 90, 213, 0.6)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div 
      className="min-h-screen pt-20 bg-gradient-to-b from-[#030303] via-[#050505] to-[#111111] text-white flex items-center relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
        ))}

        {/* Animated gradient orbs */}
        <AnimatedGradientOrb className="w-[500px] h-[500px] -top-40 -right-40 bg-purple-500/20" />
        <AnimatedGradientOrb className="w-[400px] h-[400px] -bottom-40 -left-40 bg-blue-500/20" />
        <AnimatedGradientOrb className="w-[300px] h-[300px] top-1/2 left-1/4 bg-pink-500/10" />

        {/* Animated grid */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.02) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
          animate={{
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M0 100 Q 250 50 500 100 T 1000 100"
            stroke="rgba(168, 85, 247, 0.1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
              pathOffset: [0, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>

        {/* Glowing dots */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
            boxShadow: [
              "0 0 20px rgba(168, 85, 247, 0.5)",
              "0 0 40px rgba(168, 85, 247, 0.8)",
              "0 0 20px rgba(168, 85, 247, 0.5)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Keep your existing content here, but wrapped in motion.div for entrance animations */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block"
              whileHover={{
                scale: 1.05,
                color: "#fbbf24",
                transition: { duration: 0.2 }
              }}
            >
              Shubham Baghel
            </motion.span>
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-transparent bg-clip-text"
            variants={itemVariants}
          >
            AI/ML Engineer & Research Intern at NIT Kurukshetra/ISRO
          </motion.h2>
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-6 text-yellow-100"
            variants={itemVariants}
          >
            Transforming complexity into simplicity through AI-driven innovation
          </motion.h2>
          
          <motion.div 
            className="flex gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-yellow-600 text-white px-6 py-2.5 rounded-full font-medium flex items-center gap-2 group hover:bg-yellow-700 transition-colors"
            >
              View My Work
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.a>
            <motion.a
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-transparent border-2 border-yellow-500/20 text-yellow-100 px-6 py-2.5 rounded-full font-medium hover:bg-yellow-500/10 transition-colors"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image section with enhanced animations */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="relative w-full aspect-square max-w-md mx-auto"
            variants={imageVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-30 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <img 
              src={meImage}
              alt="Shubham Baghel"
              className="rounded-full w-full h-full object-cover relative z-10 border-4 border-purple-500/30"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(17, 17, 17, 0.5), #111111)',
          maskImage: 'linear-gradient(to bottom, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
        }}
      >
        {/* Floating particles that cross the boundary */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              x: [-20, 20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
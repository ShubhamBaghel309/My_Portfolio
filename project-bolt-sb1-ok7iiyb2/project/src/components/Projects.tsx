import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: "AI Resume Tailoring Tool",
    description: "Optimized resumes for ATS compatibility, boosting ATS scores by up to 30%, streamlining the process of generating tailored resumes and skill matching.",
    longDescription: [
      "1. Resume Processing:",
      "• Text extraction from PDF/DOCX",
      "• Content normalization",
      "• Structure analysis",
      "",
      "2. Job Analysis:",
      "• Requirement extraction",
      "• Skill identification",
      "• Experience mapping",
      "",
      "3. Skill Matching:",
      "• Direct keyword matching",
      "• Semantic similarity analysis",
      "• Technical variation handling",
      "",
      "4. ATS Scoring:",
      "• TF-IDF vectorization",
      "• Cosine similarity calculation",
      "• Multi-factor scoring",
      "",
      "5. Resume Optimization:",
      "• Keyword integration",
      "• Format enhancement",
      "• Content restructuring",
      "",
      "6. Output Generation:",
      "• DOCX file creation",
      "• Cold email drafting",
      "• Analysis report compilation"
    ],
    image: "/images/projects/resume-tool.png",
    technologies: ["Llama 3.3", "PyPDF2", "LangChain", "Streamlit"],
    liveDemo: "#",
    sourceCode: "https://github.com/ShubhamBaghel309/Resume_Tailor.git"
  },
  {
    title: "YouTube Video Summarizer",
    description: "Developed with Google Generative AI and YouTube Transcript API, offering various summary types and video history tracking, reducing review time by 70%.",
    longDescription: [
      "### Features Summary:",
      "",
      "1. Video Summaries:",
      "• Generate short, detailed, and bullet-point summaries",
      "• Cached for fast retrieval",
      "• Downloadable summaries",
      "• Stored in database for quick access",
      "",
      "2. Interactive Chat:",
      "• AI-powered Q&A system",
      "• NLP for precise video-based answers",
      "• Context-aware responses",
      "",
      "3. Transcription:",
      "• Primary: YouTube transcripts",
      "• Fallback: AI transcription (Whisper)",
      "• Multilingual support",
      "",
      "4. Audio Processing:",
      "• Chunk-based processing",
      "• GPU acceleration support",
      "• Progress tracking",
      "• Memory-efficient streaming",
      "",
      "5. Database:",
      "• ChromaDB integration",
      "• Fast and efficient storage",
      "• Quick summary retrieval",
      "• Optimized search capabilities"
    ],
    image: "/images/projects/youtube-summarizer.png",
    technologies: ["Google Gen AI", "YouTube API", "Whisper", "Hugging Face"],
    liveDemo: "#",
    sourceCode: "https://github.com/ShubhamBaghel309/Youtube-video-summarizer.git"
  },
  {
    title: "PDF Chat",
    description: "Chat with PDF documents using Llama 3.3 (70B) model via Groq API. Provides an intuitive interface for uploading PDFs and engaging in conversational Q&A.",
    longDescription: [
      "### Features",
      "",
      "1. Document Processing:",
      "• PDF document upload and processing",
      "• Text extraction and chunking",
      "• Efficient document handling",
      "",
      "2. Search Capabilities:",
      "• Semantic search using embeddings",
      "• Context-aware information retrieval",
      "• Intelligent query processing",
      "",
      "3. Conversational Interface:",
      "• Natural language interaction",
      "• Context preservation across messages",
      "• Multi-turn conversation support",
      "",
      "4. Performance Optimization:",
      "• Real-time responses via Groq",
      "• Response caching system",
      "• Optimized memory usage",
      "",
      "5. Advanced Features:",
      "• Multiple PDF support",
      "• Citation tracking",
      "• Context window management"
    ],
    image: "/images/projects/pdf-chat.png",
    technologies: ["Llama 3.3", "Groq API", "PDF Processing"],
    liveDemo: "#",
    sourceCode: "https://github.com/ShubhamBaghel309/PdfChat.git"
  },
  {
    title: "Jarvis AI",
    description: "Voice-activated assistant built using Python. Performs tasks like web browsing, playing music, fetching weather information, and providing news updates.",
    longDescription: [
      "### Features",
      "",
      "1. Voice Recognition:",
      "• Uses speech_recognition library",
      "• Understands natural voice commands",
      "• Real-time voice processing",
      "",
      "2. Text-to-Speech:",
      "• Implements pyttsx3 engine",
      "• Natural vocal responses",
      "• Customizable voice settings",
      "",
      "3. Web Browsing:",
      "• Opens websites on command",
      "• Supports multiple browsers",
      "• Quick access to common sites",
      "",
      "4. Music Playback:",
      "• YouTube music integration",
      "• Plays specific song requests",
      "• Playlist management",
      "",
      "5. Weather Information:",
      "• Real-time weather updates",
      "• City-specific forecasts",
      "• Temperature and conditions",
      "",
      "6. News Updates:",
      "• Latest news headlines",
      "• Category-based news filtering",
      "• Voice-based news reading"
    ],
    image: "/images/projects/jarvis.png",
    technologies: ["Python", "Google Gemini API", "Voice Recognition"],
    liveDemo: "#",
    sourceCode: "https://github.com/shubhambaghel34/Jarvis-AI"
  },
  {
    title: "AI Code Explainer",
    description: "An AI-powered application that provides detailed explanations of code snippets using LangChain and Llama 3.3 (via Groq Cloud).",
    longDescription: [
      "### Features",
      "",
      "1. Code Analysis:",
      "• Paste any code snippet and get a detailed explanation",
      "• Supports multiple programming languages",
      "• Real-time processing and analysis",
      "",
      "2. Explanation Components:",
      "• Covers purpose and functionality",
      "• Identifies key components",
      "• Highlights best practices",
      "",
      "3. User Interface:",
      "• Modern and intuitive design",
      "• Built with Streamlit for ease of use",
      "• Real-time preview and interaction",
      "",
      "4. AI Integration:",
      "• Powered by Llama 3.3 70B model",
      "• Integrated through Groq Cloud",
      "• High-speed inference capabilities",
      "",
      "5. Advanced Features:",
      "• Syntax highlighting",
      "• Code formatting",
      "• Version control compatibility"
    ],
    image: "/images/projects/code-explainer.png",
    technologies: ["LangChain", "Llama 3.3", "Groq Cloud"],
    liveDemo: "#",
    sourceCode: "https://github.com/ShubhamBaghel309/AI-code-explainer-.git"
  },
  {
    title: "Cold Email Generator",
    description: "AI-powered tool designed to streamline the job application process by creating personalized and compelling cold emails tailored to specific job postings.",
    longDescription: [
      "### Features",
      "",
      "1. Web Scraping:",
      "• Automatically extracts job details from job posting URLs",
      "• Utilizes WebBaseLoader for efficient data collection",
      "• Handles multiple job posting formats",
      "",
      "2. AI-Powered Analysis:",
      "• Powered by LLaMA 3.1 70B model",
      "• Processes job data into structured JSON format",
      "• Advanced natural language understanding",
      "",
      "3. Semantic Search:",
      "• ChromaDB integration for efficient retrieval",
      "• Contextually relevant information matching",
      "• Optimized search algorithms",
      "",
      "4. Personalized Email Generation:",
      "• Creates tailored cold emails for each job",
      "• Ensures high relevance and professionalism",
      "• Adapts to specific job requirements",
      "",
      "5. User-Friendly Interface:",
      "• Built with Streamlit for easy interaction",
      "• Simple and intuitive web interface",
      "• Real-time email preview and editing",
      "",
      "6. Cloud-Based Processing:",
      "• Powered by Groq Cloud",
      "• High-speed AI inference",
      "• Seamless scalability"
    ],
    image: "/images/projects/email-generator.png",
    technologies: ["NLP", "Web Scraping", "Semantic Search"],
    liveDemo: "#",
    sourceCode: "https://github.com/ShubhamBaghel309/Cold-Email-Generator.git"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#111111] rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project.title)}
            >
              {/* Project Image Section */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <motion.a
                    href={project.liveDemo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600 p-2 rounded-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600 p-2 rounded-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Project View */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#111111] rounded-xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-6 h-6" />
                </button>
                
                {selectedProject && (() => {
                  const project = projects.find(p => p.title === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-purple-400">
                        {project.title}
                      </h3>
                      
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold">Project Details</h4>
                        <p className="text-gray-300">
                          {project.description}
                        </p>
                        
                        <div className="space-y-2">
                          <h4 className="text-lg font-semibold">How It Works</h4>
                          <div className="space-y-6 text-gray-300">
                            {project.longDescription.map((detail: string, i: number) => (
                              detail === "" ? (
                                <div key={i} className="h-2" /> // Spacer for empty lines
                              ) : detail.startsWith("•") ? (
                                <div key={i} className="ml-6 flex items-start gap-2">
                                  <span className="text-purple-400 mt-1.5">•</span>
                                  <span>{detail.substring(2)}</span>
                                </div>
                              ) : (
                                <h5 key={i} className="text-lg font-semibold text-purple-400">
                                  {detail}
                                </h5>
                              )
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech: string) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4 pt-4">
                          <a
                            href={project.liveDemo}
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" /> Live Demo
                          </a>
                          <a
                            href={project.sourceCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-colors"
                          >
                            <Github className="w-4 h-4" /> Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Resume() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => {
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#0a0a0a] z-50 overflow-hidden flex flex-col"
    >
      <div className="flex justify-between items-center p-4 bg-[#111111]">
        <h2 className="text-xl font-semibold text-white">Resume</h2>
        <motion.button
          onClick={handleClose}
          className="p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X size={24} />
        </motion.button>
      </div>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
          <div className="text-purple-400">Loading resume...</div>
        </div>
      )}

      <div className="flex-1 w-full h-full bg-[#0a0a0a]">
        <object
          data="/assets/resume.pdf"
          type="application/pdf"
          className="w-full h-full"
          onLoad={() => setIsLoading(false)}
        >
          <div className="flex items-center justify-center h-full">
            <p className="text-white">
              PDF cannot be displayed. 
              <a 
                href="/assets/resume.pdf" 
                download 
                className="text-purple-400 hover:text-purple-300 ml-2"
              >
                Download instead
              </a>
            </p>
          </div>
        </object>
      </div>
    </motion.div>
  );
} 
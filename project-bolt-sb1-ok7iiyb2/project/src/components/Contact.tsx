import { motion } from 'framer-motion';
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('Attempting to submit form with data:', formData);
      
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all fields');
      }

      const docRef = await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: serverTimestamp()
      });
      
      console.log('Document written with ID:', docRef.id);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Show success message for 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Detailed error submitting form:', error);
      setSubmitStatus('error');
      
      // Show error message for 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">GET IN TOUCH</h2>
          <p className="text-gray-400 text-lg">Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and AI</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.a
            href="mailto:shubhambaghel307@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-[#0a0a0a] rounded-lg border border-gray-800 hover:border-purple-500 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Email</h3>
            <p className="text-gray-400 text-center">shubhambaghel307@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://github.com/ShubhamBaghel309"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-[#0a0a0a] rounded-lg border border-gray-800 hover:border-purple-500 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
              <Github className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">GitHub</h3>
            <p className="text-gray-400">ShubhamBaghel309</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/shubham-baghel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-[#0a0a0a] rounded-lg border border-gray-800 hover:border-purple-500 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
              <Linkedin className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400">Shubham Baghel</p>
          </motion.a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              placeholder="Your message..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-lg text-white font-medium transition-colors flex items-center justify-center gap-2 ${
              isSubmitting ? 'bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Sending...' : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </motion.button>

          {submitStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-center mt-4"
            >
              Message sent successfully!
            </motion.p>
          )}

          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-center mt-4"
            >
              Error sending message. Please try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
} 
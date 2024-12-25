import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollDirection } from '../hooks/useScrollDirection';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isVisible = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Dumbbell className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold text-white">ELITE FITNESS</span>
          </motion.div>
          
          <div className="hidden md:block">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="ml-10 flex items-center space-x-6"
            >
              <a href="#home" className="text-white hover:text-red-600 transition-colors">Home</a>
              <a href="#classes" className="text-white hover:text-red-600 transition-colors">Classes</a>
              <a href="#trainers" className="text-white hover:text-red-600 transition-colors">Trainers</a>
              <a href="#pricing" className="text-white hover:text-red-600 transition-colors">Pricing</a>
              <a href="#contact" className="text-white hover:text-red-600 transition-colors">Contact</a>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all">
                Join Now
              </button>
            </motion.div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-red-600/20 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-sm"
          >
            <div className="px-4 pt-2 pb-3 space-y-3">
              <a href="#home" className="block text-white hover:text-red-600 transition-colors py-2">Home</a>
              <a href="#classes" className="block text-white hover:text-red-600 transition-colors py-2">Classes</a>
              <a href="#trainers" className="block text-white hover:text-red-600 transition-colors py-2">Trainers</a>
              <a href="#pricing" className="block text-white hover:text-red-600 transition-colors py-2">Pricing</a>
              <a href="#contact" className="block text-white hover:text-red-600 transition-colors py-2">Contact</a>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all">
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
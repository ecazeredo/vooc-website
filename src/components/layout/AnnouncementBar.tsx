import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const MESSAGES = [
  "Free shipping on orders over $75 across Canada",
  "New 2025 harvest oils have arrived",
  "Book a free tasting at our Granville Island shop"
];

export const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % MESSAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-cream text-[11px] uppercase tracking-widest py-2 relative overflow-hidden font-medium">
      <div className="container-px flex justify-center items-center h-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center w-full"
          >
            {MESSAGES[index]}
          </motion.p>
        </AnimatePresence>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 hover:opacity-70 transition-opacity"
          aria-label="Dismiss"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

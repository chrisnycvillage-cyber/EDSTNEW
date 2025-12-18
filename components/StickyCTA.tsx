'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 100vh)
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.8;
      setIsVisible(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link href="/marketing">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-edst-gold/30 blur-xl"
                animate={{
                  scale: isHovered ? 1.3 : 1,
                  opacity: isHovered ? 0.6 : 0.3,
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Button */}
              <div className="relative flex items-center gap-2 px-5 py-3 rounded-full bg-edst-gold text-edst-black font-bold text-sm uppercase tracking-wider shadow-lg shadow-edst-gold/20">
                <Zap className="w-4 h-4" />
                <span className="hidden sm:inline">Get Started</span>
                <motion.div
                  animate={{ x: isHovered ? 3 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


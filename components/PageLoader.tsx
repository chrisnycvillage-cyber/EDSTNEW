'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (isInitial) {
      setIsInitial(false);
      return;
    }
    
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          style={{ background: '#020309' }}
        >
          {/* Background grid */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(rgba(250,204,83,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,83,0.5) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

          {/* Ambient glow */}
          <motion.div 
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(250,204,83,0.1) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* Center content */}
          <div className="relative flex flex-col items-center">
            {/* Rotating ring */}
            <motion.div
              className="absolute w-20 h-20 rounded-full border border-edst-gold/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />

            {/* Logo */}
            <motion.span 
              className="text-3xl font-heading font-bold tracking-tight relative z-10"
              style={{
                background: 'linear-gradient(135deg, #FFE082 0%, #FACC53 50%, #D4A846 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              EDST
            </motion.span>

            {/* Loading dots */}
            <div className="mt-6 flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-edst-gold"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Corner accents */}
          <motion.div 
            className="absolute top-6 left-6 w-12 h-12 border-l border-t border-edst-gold/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <motion.div 
            className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-edst-gold/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

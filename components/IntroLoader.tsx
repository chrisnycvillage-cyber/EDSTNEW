'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const IntroLoader = () => {
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'complete'>('loading');

  useEffect(() => {
    // Phase 1: Loading (0.8s)
    const timer1 = setTimeout(() => setPhase('reveal'), 800);
    // Phase 2: Reveal animation (0.6s)
    const timer2 = setTimeout(() => setPhase('complete'), 1400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (phase === 'complete') return null;

  return (
    <AnimatePresence>
      <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden"
          style={{ background: '#020309' }}
        >
          {/* Subtle scan line effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(250,204,83,0.03) 50%, transparent 100%)',
              backgroundSize: '100% 8px',
            }}
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />

          {/* Animated background pulse */}
          <motion.div 
            className="absolute w-[800px] h-[800px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(250,204,83,0.08) 0%, transparent 60%)' }}
            animate={{ 
              scale: phase === 'reveal' ? [1, 3] : [0.8, 1.2, 0.8],
              opacity: phase === 'reveal' ? [0.4, 0] : [0.2, 0.4, 0.2],
            }}
            transition={{ 
              duration: phase === 'reveal' ? 0.8 : 2,
              repeat: phase === 'reveal' ? 0 : Infinity,
            }}
          />

          {/* Center container */}
          <div className="relative flex flex-col items-center">
            
            {/* Outer ring - pulsing */}
            <motion.div
              className="absolute w-36 h-36 rounded-full"
              style={{ 
                border: '1px solid rgba(250,204,83,0.2)',
                boxShadow: '0 0 30px rgba(250,204,83,0.1)',
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: phase === 'reveal' ? [1, 2] : [1, 1.1, 1],
                opacity: phase === 'reveal' ? [0.8, 0] : [0.4, 0.8, 0.4],
              }}
              transition={{ 
                duration: phase === 'reveal' ? 0.6 : 2,
                repeat: phase === 'reveal' ? 0 : Infinity,
              }}
            />
            
            {/* Inner ring - rotating */}
            <motion.div
              className="absolute w-24 h-24 rounded-full"
              style={{ 
                border: '2px solid transparent',
                borderTopColor: 'rgba(250,204,83,0.6)',
                borderRightColor: 'rgba(250,204,83,0.3)',
              }}
              animate={{ 
                rotate: phase === 'loading' ? 360 : 0,
                scale: phase === 'reveal' ? [1, 1.5] : 1,
                opacity: phase === 'reveal' ? [1, 0] : 1,
              }}
              transition={{ 
                rotate: { duration: 1.5, repeat: Infinity, ease: 'linear' },
                scale: { duration: 0.5 },
                opacity: { duration: 0.5 },
              }}
            />

            {/* Cross lines - elegant unlock effect */}
            <motion.div
              className="absolute w-32 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(250,204,83,0.8), transparent)' }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: phase === 'reveal' ? [1, 2, 0] : [0, 1, 0],
                opacity: phase === 'reveal' ? [1, 0.5, 0] : [0, 0.8, 0],
              }}
              transition={{ 
                duration: phase === 'reveal' ? 0.5 : 1.5,
                repeat: phase === 'reveal' ? 0 : Infinity,
              }}
            />
            <motion.div
              className="absolute w-px h-32"
              style={{ background: 'linear-gradient(180deg, transparent, rgba(250,204,83,0.8), transparent)' }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ 
                scaleY: phase === 'reveal' ? [1, 2, 0] : [0, 1, 0],
                opacity: phase === 'reveal' ? [1, 0.5, 0] : [0, 0.8, 0],
              }}
              transition={{ 
                duration: phase === 'reveal' ? 0.5 : 1.5,
                delay: phase === 'reveal' ? 0 : 0.3,
                repeat: phase === 'reveal' ? 0 : Infinity,
              }}
            />

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: phase === 'reveal' ? [1, 1.15, 1.1] : 1,
              }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <motion.span 
                className="text-5xl md:text-6xl font-heading font-bold tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #FFE082 0%, #FACC53 50%, #D4A846 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 40px rgba(250,204,83,0.3)',
                }}
              >
                EDST
              </motion.span>
            </motion.div>

            {/* Loading indicator */}
            <motion.div 
              className="mt-8 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'loading' ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Animated dots */}
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-edst-gold"
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1, 0.8],
                    }}
                    transition={{ 
                      duration: 0.6, 
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Corner frames */}
          {[
            { top: 24, left: 24, borderTop: true, borderLeft: true },
            { top: 24, right: 24, borderTop: true, borderRight: true },
            { bottom: 24, left: 24, borderBottom: true, borderLeft: true },
            { bottom: 24, right: 24, borderBottom: true, borderRight: true },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12"
              style={{
                top: pos.top,
                bottom: pos.bottom,
                left: pos.left,
                right: pos.right,
                borderTop: pos.borderTop ? '1px solid rgba(250,204,83,0.25)' : 'none',
                borderBottom: pos.borderBottom ? '1px solid rgba(250,204,83,0.25)' : 'none',
                borderLeft: pos.borderLeft ? '1px solid rgba(250,204,83,0.25)' : 'none',
                borderRight: pos.borderRight ? '1px solid rgba(250,204,83,0.25)' : 'none',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: phase === 'reveal' ? [0.8, 0] : 0.8,
                scale: phase === 'reveal' ? [1, 1.3] : 1,
              }}
              transition={{ 
                duration: 0.5,
                delay: i * 0.05,
              }}
            />
          ))}

          {/* Reveal flash */}
          {phase === 'reveal' && (
            <motion.div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(circle at center, rgba(250,204,83,0.1) 0%, transparent 70%)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.6 }}
            />
          )}
        </motion.div>
    </AnimatePresence>
  );
};

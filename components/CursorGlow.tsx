'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export const CursorGlow = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    // Check for touch device on client only
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  useEffect(() => {
    if (!mounted || isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mounted, isTouchDevice, cursorX, cursorY, isVisible]);

  // Don't render until mounted or on touch devices
  if (!mounted || isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Outer glow - larger, more diffuse */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(250, 204, 83, 0.08) 0%, transparent 70%)',
          }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Inner glow - smaller, brighter */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="w-4 h-4 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(250, 204, 83, 0.6) 0%, rgba(250, 204, 83, 0.2) 50%, transparent 70%)',
            boxShadow: '0 0 20px rgba(250, 204, 83, 0.3)',
          }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  );
};

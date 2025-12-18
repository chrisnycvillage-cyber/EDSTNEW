'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  type: 'star' | 'glow' | 'pulse' | 'float';
}

export const DataPulse = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const items: Particle[] = [];
    
    // Stars - twinkling dots
    for (let i = 0; i < 60; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 4,
        type: 'star',
      });
    }
    
    // Glows - larger ambient orbs
    for (let i = 60; i < 68; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 100 + Math.random() * 150,
        delay: Math.random() * 3,
        duration: 10 + Math.random() * 8,
        type: 'glow',
      });
    }
    
    // Pulses - data-like expanding rings
    for (let i = 68; i < 74; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 4 + Math.random() * 6,
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 4,
        type: 'pulse',
      });
    }
    
    // Floating elements - subtle movement
    for (let i = 74; i < 80; i++) {
      items.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 3 + Math.random() * 4,
        delay: Math.random() * 4,
        duration: 15 + Math.random() * 10,
        type: 'float',
      });
    }
    
    setParticles(items);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep space gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-edst-black via-[#030308] to-edst-black" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(250,204,83,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(250,204,83,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(250,204,83,0.03) 0%, transparent 50%)',
        }}
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Secondary gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 70% 80%, rgba(250,204,83,0.02) 0%, transparent 40%)',
        }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      
      {/* Particles - only render after mount */}
      {mounted && particles.map((particle) => {
        if (particle.type === 'star') {
          return (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                opacity: [0.1, 0.6, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
            />
          );
        }
        
        if (particle.type === 'glow') {
          return (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                background: 'radial-gradient(circle, rgba(250,204,83,0.08) 0%, transparent 70%)',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
            />
          );
        }
        
        if (particle.type === 'pulse') {
          return (
            <motion.div
              key={particle.id}
              className="absolute rounded-full border border-edst-gold/20"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 3, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeOut',
              }}
            />
          );
        }
        
        if (particle.type === 'float') {
          return (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-edst-gold/10"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
            />
          );
        }
        
        return null;
      })}
      
      {/* Horizontal data streams */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-edst-gold/10 to-transparent"
        style={{ top: '25%' }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-edst-gold/10 to-transparent"
        style={{ top: '75%' }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />
      
      {/* Vertical accent lines */}
      <motion.div
        className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-edst-gold/5 to-transparent"
        style={{ left: '20%' }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-edst-gold/5 to-transparent"
        style={{ left: '80%' }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, delay: 3 }}
      />
    </div>
  );
};

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  velocityX: number;
  velocityY: number;
  delay: number;
}

// Gold-focused colors
const colors = ['#FACC53', '#FFE082', '#D4A846', '#ffffff', '#FFF8E1'];

export const useConfetti = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const triggerConfetti = (originX?: number, originY?: number) => {
    const x = originX ?? window.innerWidth / 2;
    const y = originY ?? window.innerHeight / 2;

    // More particles, bigger burst
    const newParticles: Particle[] = Array.from({ length: 80 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 12 + 6,
      rotation: Math.random() * 360,
      velocityX: (Math.random() - 0.5) * 30,
      velocityY: Math.random() * -20 - 8,
      delay: Math.random() * 0.15,
    }));

    setParticles(prev => [...prev, ...newParticles]);

    // Remove particles after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 4000);
  };

  return { particles, triggerConfetti };
};

export const ConfettiCanvas = ({ particles }: { particles: Particle[] }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.x,
              y: particle.y,
              rotate: particle.rotation,
              opacity: 1,
              scale: 0,
            }}
            animate={{
              x: particle.x + particle.velocityX * 25,
              y: particle.y + particle.velocityY * -12 + 400,
              rotate: particle.rotation + 1080,
              opacity: [1, 1, 0],
              scale: [0, 1.5, 0.3],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 3,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: particle.delay,
            }}
            style={{
              position: 'absolute',
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              boxShadow: `0 0 ${particle.size}px ${particle.color}`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

// Premium gold burst effect - more dramatic
export const useGoldBurst = () => {
  const [bursts, setBursts] = useState<Particle[]>([]);

  const triggerBurst = (originX?: number, originY?: number) => {
    const x = originX ?? window.innerWidth / 2;
    const y = originY ?? window.innerHeight / 2;

    // Ring of golden particles
    const newBursts: Particle[] = Array.from({ length: 24 }, (_, i) => {
      const angle = (360 / 24) * i;
      const radian = angle * (Math.PI / 180);
      return {
        id: Date.now() + i,
        x,
        y,
        color: i % 2 === 0 ? '#FACC53' : '#FFE082',
        size: Math.random() * 8 + 6,
        rotation: angle,
        velocityX: Math.cos(radian) * 12,
        velocityY: Math.sin(radian) * 12,
        delay: 0,
      };
    });

    // Center glow particles
    const centerParticles: Particle[] = Array.from({ length: 16 }, (_, i) => ({
      id: Date.now() + 100 + i,
      x,
      y,
      color: '#FACC53',
      size: Math.random() * 20 + 15,
      rotation: Math.random() * 360,
      velocityX: (Math.random() - 0.5) * 8,
      velocityY: (Math.random() - 0.5) * 8,
      delay: 0.05,
    }));

    setBursts(prev => [...prev, ...newBursts, ...centerParticles]);

    setTimeout(() => {
      setBursts(prev => prev.filter(b => 
        !newBursts.find(nb => nb.id === b.id) && 
        !centerParticles.find(cp => cp.id === b.id)
      ));
    }, 1500);
  };

  return { bursts, triggerBurst };
};

export const GoldBurstCanvas = ({ bursts }: { bursts: Particle[] }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {bursts.map((burst) => (
          <motion.div
            key={burst.id}
            initial={{
              x: burst.x,
              y: burst.y,
              opacity: 1,
              scale: 0,
            }}
            animate={{
              x: burst.x + burst.velocityX * 20,
              y: burst.y + burst.velocityY * 20,
              opacity: [1, 0.8, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
              delay: burst.delay,
            }}
            style={{
              position: 'absolute',
              width: burst.size,
              height: burst.size,
              backgroundColor: burst.color,
              borderRadius: '50%',
              boxShadow: `0 0 ${burst.size * 3}px ${burst.color}, 0 0 ${burst.size * 6}px ${burst.color}40`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

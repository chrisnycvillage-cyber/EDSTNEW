'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

export const Logo = ({ size = 'md', glow = true }: LogoProps) => {
  const sizes = {
    sm: { text: 'text-xl', glow: '0 0 20px' },
    md: { text: 'text-2xl', glow: '0 0 30px' },
    lg: { text: 'text-4xl', glow: '0 0 40px' },
  };

  return (
    <motion.div
      className="relative inline-block"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Subtle glow layer */}
      {glow && (
        <motion.span
          className={`absolute inset-0 font-heading font-bold tracking-tight ${sizes[size].text} blur-[8px] opacity-40`}
          style={{
            background: 'linear-gradient(135deg, #FFE082 0%, #FACC53 50%, #D4A846 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          aria-hidden="true"
        >
          EDST
        </motion.span>
      )}
      
      {/* Main logo text */}
      <motion.span 
        className={`relative font-heading font-bold tracking-tight ${sizes[size].text}`}
        style={{
          background: 'linear-gradient(135deg, #FFF8E1 0%, #FFE082 25%, #FACC53 50%, #D4A846 75%, #C49A3A 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: glow ? `${sizes[size].glow} rgba(250, 204, 83, 0.15)` : 'none',
        }}
      >
        EDST
      </motion.span>
    </motion.div>
  );
};

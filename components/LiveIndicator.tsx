'use client';

import { motion } from 'framer-motion';
import { navigation } from '@/lib/config';

interface LiveIndicatorProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  showPulse?: boolean;
}

export const LiveIndicator = ({ 
  text = navigation.statusText, 
  size = 'md',
  showPulse = true 
}: LiveIndicatorProps) => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  const dotSizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-edst-charcoal/60 border border-edst-slate/30 backdrop-blur-sm"
    >
      {/* Pulsing green dot - green only for live status */}
      <span className="relative flex">
        <motion.span
          className={`${dotSizes[size]} rounded-full bg-edst-online`}
          animate={showPulse ? {
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {showPulse && (
          <motion.span
            className={`absolute inset-0 ${dotSizes[size]} rounded-full bg-edst-online`}
            animate={{
              scale: [1, 2.5],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        )}
      </span>

      {/* Text - green for online status */}
      <span className={`${sizeClasses[size]} font-mono text-edst-online tracking-wider uppercase`}>
        {text}
      </span>
    </motion.div>
  );
};

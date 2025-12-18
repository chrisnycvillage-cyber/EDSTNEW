'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export const AnimatedCounter = ({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
  decimals = 0,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(0);

  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [springValue]);

  const formatNumber = (num: number) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return Math.round(num).toLocaleString();
  };

  return (
    <span ref={ref} className={className}>
      {prefix}{formatNumber(displayValue)}{suffix}
    </span>
  );
};

// Formatted counter for large numbers (K, M, B)
interface FormattedCounterProps {
  value: string; // e.g., "30K+", "18.4B+"
  className?: string;
}

export const FormattedCounter = ({ value, className = '' }: FormattedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  // Parse the value
  const numMatch = value.match(/^([\d.]+)([KMB]?)(\+?)$/i);
  if (!numMatch) {
    return <span className={className}>{value}</span>;
  }

  const [, numStr, suffix, plus] = numMatch;
  const targetNum = parseFloat(numStr);
  
  const [displayNum, setDisplayNum] = useState(0);
  
  const springValue = useSpring(0, {
    duration: 1500,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(targetNum);
    }
  }, [isInView, springValue, targetNum]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayNum(latest);
    });
    return () => unsubscribe();
  }, [springValue]);

  const formatDisplay = () => {
    if (numStr.includes('.')) {
      return displayNum.toFixed(1);
    }
    return Math.round(displayNum).toString();
  };

  return (
    <motion.span 
      ref={ref} 
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {formatDisplay()}{suffix}{plus}
    </motion.span>
  );
};


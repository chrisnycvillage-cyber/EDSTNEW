'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, X, Sparkles, ArrowRight, Check } from 'lucide-react';

// 4 prizes - equal segments
const prizes = [
  { label: '1K Followers', value: '1,000 Followers', weight: 40 },
  { label: '2K Followers', value: '2,000 Followers', weight: 25 },
  { label: 'PR Article', value: 'PR Article', weight: 20 },
  { label: 'Pop Pack', value: 'Pop Pack', weight: 15 },
];

const SEGMENT_ANGLE = 360 / prizes.length; // 90 degrees each

const selectPrize = () => {
  const totalWeight = prizes.reduce((sum, p) => sum + p.weight, 0);
  const random = Math.random() * totalWeight;
  let cumulative = 0;
  for (let i = 0; i < prizes.length; i++) {
    cumulative += prizes[i].weight;
    if (random <= cumulative) return i;
  }
  return 0;
};

// Calculate rotation needed to land on a specific prize index
const getRotationForPrize = (prizeIndex: number, spins: number = 6): number => {
  // Each segment is 90 degrees
  // Segment 0 is at top at 0 rotation
  // To land on segment N, we rotate so segment N ends up at top
  // Segment N's center is at (N * 90 + 45) degrees from segment 0
  // To bring it to top, rotate by that amount
  const targetAngle = prizeIndex * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
  return (spins * 360) + (360 - targetAngle);
};

export const SpinWheel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [hasSpun, setHasSpun] = useState(false);
  const [wonPrizeIndex, setWonPrizeIndex] = useState<number | null>(null);

  const wonPrize = wonPrizeIndex !== null ? prizes[wonPrizeIndex] : null;

  // Listen for open event from Navbar
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-spin-wheel', handleOpen);
    return () => window.removeEventListener('open-spin-wheel', handleOpen);
  }, []);

  // Load saved prize on mount
  useEffect(() => {
    const saved = localStorage.getItem('edst-wheel-v3');
    if (saved) {
      const data = JSON.parse(saved);
      setHasSpun(true);
      setWonPrizeIndex(data.prizeIndex);
      setRotation(getRotationForPrize(data.prizeIndex, 6));
    }
  }, []);

  const spinWheel = () => {
    if (isSpinning || hasSpun) return;

    // Select prize FIRST
    const prizeIndex = selectPrize();
    const spins = 6 + Math.floor(Math.random() * 3);
    const finalRotation = getRotationForPrize(prizeIndex, spins);
    
    setIsSpinning(true);
    setRotation(finalRotation);

    // After animation completes, reveal the prize
    setTimeout(() => {
      setIsSpinning(false);
      setHasSpun(true);
      setWonPrizeIndex(prizeIndex);
      localStorage.setItem('edst-wheel-v3', JSON.stringify({ prizeIndex }));
    }, 4000);
  };

  return (
    <>
      {/* No floating button - bonus is now controlled from Navbar */}

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            onClick={() => !isSpinning && setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm bg-gradient-to-b from-edst-charcoal/80 to-edst-black rounded-3xl border border-edst-gold/30 p-8 overflow-hidden"
            >
              {/* Ambient glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-edst-gold/10 blur-3xl pointer-events-none" />
              
              {/* Close */}
              <button
                onClick={() => !isSpinning && setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-edst-silver/50 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="text-center mb-6 relative">
                {!hasSpun ? (
                  <>
                    <h2 className="text-2xl font-bold text-edst-white">Spin to Win</h2>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-edst-gold/20 border border-edst-gold/40 mb-3"
                    >
                      <Sparkles className="w-4 h-4 text-edst-gold" />
                      <span className="text-sm font-bold text-edst-gold">You Won!</span>
                    </motion.div>
                    <p className="text-sm text-edst-silver">Claim with any membership</p>
                  </>
                )}
              </div>

              {/* Wheel */}
              <div className="relative w-64 h-64 mx-auto mb-6">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-edst-gold/50 shadow-lg shadow-edst-gold/10" />
                
                {/* Pointer - Fixed at top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="w-6 h-8 bg-edst-gold rounded-t-sm" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }} />
                  </div>
                </div>

                {/* Spinning wheel - Always shows prizes */}
                <motion.div
                  className="absolute inset-3 rounded-full overflow-hidden shadow-inner"
                  animate={{ rotate: rotation }}
                  transition={{ duration: 4, ease: [0.2, 0.8, 0.3, 1] }}
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {prizes.map((prize, index) => {
                      const startAngle = index * SEGMENT_ANGLE;
                      const endAngle = (index + 1) * SEGMENT_ANGLE;
                      const startRad = (startAngle - 90) * (Math.PI / 180);
                      const endRad = (endAngle - 90) * (Math.PI / 180);
                      
                      const x1 = 100 + 100 * Math.cos(startRad);
                      const y1 = 100 + 100 * Math.sin(startRad);
                      const x2 = 100 + 100 * Math.cos(endRad);
                      const y2 = 100 + 100 * Math.sin(endRad);
                      
                      const pathD = `M 100 100 L ${x1} ${y1} A 100 100 0 0 1 ${x2} ${y2} Z`;
                      
                      const midAngle = (startAngle + SEGMENT_ANGLE / 2 - 90) * (Math.PI / 180);
                      const textX = 100 + 62 * Math.cos(midAngle);
                      const textY = 100 + 62 * Math.sin(midAngle);
                      const textRotation = startAngle + SEGMENT_ANGLE / 2;
                      
                      const isWinner = wonPrizeIndex === index && hasSpun;

                      return (
                        <g key={index}>
                          <path 
                            d={pathD} 
                            fill={index % 2 === 0 ? '#0c0c0c' : '#181818'} 
                            stroke="#FACC53" 
                            strokeWidth="1.5" 
                          />
                          {isWinner && (
                            <path 
                              d={pathD} 
                              fill="rgba(250, 204, 83, 0.25)" 
                            />
                          )}
                          <text
                            x={textX}
                            y={textY}
                            fill={isWinner ? "#FACC53" : "#888"}
                            fontSize="9"
                            fontWeight={isWinner ? "800" : "600"}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            transform={`rotate(${textRotation}, ${textX}, ${textY})`}
                          >
                            {prize.label}
                          </text>
                        </g>
                      );
                    })}
                    {/* Center hub */}
                    <circle cx="100" cy="100" r="28" fill="#0a0a0a" stroke="#FACC53" strokeWidth="2.5" />
                    <circle cx="100" cy="100" r="23" fill="#0f0f0f" />
                    <text x="100" y="100" fill="#FACC53" fontSize="13" fontWeight="800" textAnchor="middle" dominantBaseline="middle" letterSpacing="1">
                      EDST
                    </text>
                  </svg>
                </motion.div>
              </div>

              {/* Won Prize Display */}
              {hasSpun && wonPrize && !isSpinning && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-4"
                >
                  <div className="text-3xl font-bold text-edst-gold mb-4">{wonPrize.value}</div>
                  <div className="p-4 rounded-xl bg-edst-charcoal/50 border border-edst-slate/30">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 rounded-full bg-edst-gold/20 mt-0.5">
                        <Check className="w-3 h-3 text-edst-gold" />
                      </div>
                      <p className="text-sm text-edst-light leading-relaxed text-left">
                        Started within 24 hours of joining.<br />
                        Our team reaches out personally.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Action */}
              {!hasSpun ? (
                <motion.button
                  onClick={spinWheel}
                  disabled={isSpinning}
                  whileHover={{ scale: isSpinning ? 1 : 1.03 }}
                  whileTap={{ scale: isSpinning ? 1 : 0.97 }}
                  className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all ${
                    isSpinning
                      ? 'bg-edst-charcoal text-edst-silver cursor-not-allowed'
                      : 'bg-edst-gold text-edst-black hover:bg-edst-gold-light'
                  }`}
                >
                  {isSpinning ? 'Spinning...' : 'Spin'}
                </motion.button>
              ) : (
                <motion.a
                  href="/marketing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold uppercase tracking-wider bg-edst-gold text-edst-black"
                >
                  Claim Bonus
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

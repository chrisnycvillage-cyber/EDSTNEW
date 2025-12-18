'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { TrendingUp, ArrowUpRight, Rocket } from 'lucide-react';

// Realistic coaching business order amounts
const orderAmounts = [97, 497, 997, 97, 1497, 497, 2497, 97, 997, 4997, 497, 1497, 97, 997];

// Order types for variety
const orderTypes = ['Coaching Call', '1:1 Session', 'Group Program', 'VIP Package', 'Mastermind'];

// Revenue caps - resets when it hits max
const MIN_REVENUE = 5000;
const MAX_REVENUE = 155000;

export const LiveRevenueWidget = () => {
  // Start at $5K, grows to $155K then resets
  const [monthlyRevenue, setMonthlyRevenue] = useState(5000);
  const [recentOrders, setRecentOrders] = useState<{amount: number, type: string}[]>([]);
  const [isClient, setIsClient] = useState(false);
  
  // Use refs to track mutable values without causing re-renders
  const orderIndexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    // Add order function using refs to avoid stale closures
    const addOrder = () => {
      const amount = orderAmounts[orderIndexRef.current % orderAmounts.length];
      const type = orderTypes[Math.floor(Math.random() * orderTypes.length)];
      
      setMonthlyRevenue(prev => {
        const newRevenue = prev + amount;
        // Reset to $5K when hitting $155K cap
        if (newRevenue >= MAX_REVENUE) {
          return MIN_REVENUE;
        }
        return newRevenue;
      });
      setRecentOrders(prev => [{amount, type}, ...prev.slice(0, 3)]);
      orderIndexRef.current += 1;
    };
    
    // Add orders at varying intervals (every 2-4 seconds for excitement)
    const scheduleNextOrder = () => {
      const nextDelay = 2000 + Math.random() * 2000;
      timeoutRef.current = setTimeout(() => {
        addOrder();
        scheduleNextOrder();
      }, nextDelay);
    };
    
    // Start the cycle
    const initialTimeout = setTimeout(() => {
      addOrder();
      scheduleNextOrder();
    }, 1000);
    
    return () => {
      clearTimeout(initialTimeout);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isClient]);

  const formatCurrency = (num: number) => {
    return '$' + num.toLocaleString('en-US');
  };

  if (!isClient) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative h-full"
    >
      {/* Subtle glow effect */}
      <motion.div 
        className="absolute -inset-1 bg-gradient-to-r from-green-500/15 to-edst-gold/15 rounded-2xl blur-xl"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <div className="relative h-full p-6 rounded-xl bg-edst-charcoal/60 border border-edst-slate/25 backdrop-blur-xl flex flex-col">
        {/* Header - Real Story */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-edst-gold/15">
              <Rocket className="w-4 h-4 text-edst-gold" />
            </div>
            <div>
              <span className="text-sm font-semibold text-edst-white">Client Growth Story</span>
              <span className="text-xs text-edst-silver block">Online Coaching Business</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/15 border border-green-500/25">
            <motion.span 
              className="w-1.5 h-1.5 rounded-full bg-green-400"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs font-mono text-green-400">LIVE</span>
          </div>
        </div>

        {/* Journey indicator */}
        <div className="mb-4 p-3 rounded-lg bg-edst-slate/20 border border-edst-slate/15">
          <div className="flex items-center justify-between text-xs text-edst-silver mb-2">
            <span>Started at $5K/mo</span>
            <span className="text-edst-gold">Goal: $155K</span>
          </div>
          <div className="h-1.5 bg-edst-slate/30 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-edst-gold to-green-400 rounded-full"
              initial={{ width: '3%' }}
              animate={{ width: `${Math.min(((monthlyRevenue - MIN_REVENUE) / (MAX_REVENUE - MIN_REVENUE)) * 100, 100)}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Main revenue display */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <motion.span
              key={monthlyRevenue}
              initial={{ opacity: 0.7, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-3xl md:text-4xl font-heading font-bold text-edst-white"
            >
              {formatCurrency(monthlyRevenue)}
            </motion.span>
            <motion.span 
              className="flex items-center text-green-400 text-sm font-mono"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.span>
          </div>
          <p className="text-sm text-edst-silver mt-1">Monthly Revenue</p>
        </div>

        {/* Recent orders feed */}
        <div className="flex-1 border-t border-edst-slate/15 pt-3">
          <span className="text-xs text-edst-silver uppercase tracking-wider mb-2 block">Recent Orders</span>
          <div className="space-y-2">
            {recentOrders.length > 0 ? (
              recentOrders.map((order, i) => (
                <motion.div
                  key={`${order.amount}-${i}-${Date.now()}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1 - (i * 0.2), x: 0 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-green-400"
                      animate={i === 0 ? { scale: [1, 1.5, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="text-sm text-edst-light">{order.type}</span>
                  </div>
                  <span className="text-sm font-mono text-green-400">+{formatCurrency(order.amount)}</span>
                </motion.div>
              ))
            ) : (
              <div className="flex items-center gap-2">
                <motion.span 
                  className="w-1.5 h-1.5 rounded-full bg-edst-gold"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="text-sm text-edst-silver">Processing...</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom note */}
        <div className="flex items-center justify-center gap-1.5 mt-4 pt-3 border-t border-edst-slate/15">
          <TrendingUp className="w-3 h-3 text-edst-gold" />
          <span className="text-xs text-edst-silver">$5K → $155K in 8 months</span>
        </div>
      </div>
    </motion.div>
  );
};


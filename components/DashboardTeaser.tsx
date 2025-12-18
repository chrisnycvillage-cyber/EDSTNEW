'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  Share2, 
  Eye, 
  Heart,
  ArrowUpRight,
  Crown,
  ArrowRight,
} from 'lucide-react';

// Campaign metrics
const campaignMetrics = [
  { label: 'Campaign Views', value: '185M', change: '+24M', icon: Eye },
  { label: 'Likes', value: '9.6M', change: '+1.2M', icon: Heart },
  { label: 'Shares', value: '1.87M', change: '+340K', icon: Share2 },
  { label: 'Content Distributed', value: '789', change: '+47', icon: TrendingUp },
];

// Approved campaign chat messages - authentic manager comms
const chatMessages = [
  "This is going VIRAL",
  "Campaign is crushing right now",
  "This one's hitting different 🚀",
  "Content is exploding rn",
  "We're winning on this one",
  "Algorithm is loving this",
  "Results coming in hot",
  "Another piece trending",
  "Targets exceeded already",
  "This campaign is on fire",
  "Client is gonna be hyped",
  "We're cooking on this one",
  "Just keeps growing",
  "This is exactly what we wanted",
  "Straight execution 🎯",
];

// iMessage style chat feed - cycles through ALL messages, NEVER repeats back-to-back
const CampaignChat = () => {
  const [messages, setMessages] = useState<Array<{ id: number; text: string }>>([]);
  const [isClient, setIsClient] = useState(false);
  const indexRef = useRef(0);
  const queueRef = useRef<string[]>([]);
  const lastMessageRef = useRef<string>('');

  // Initialize shuffled queue on mount
  useEffect(() => {
    setIsClient(true);
    // Fisher-Yates shuffle
    const shuffled = [...chatMessages];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    queueRef.current = shuffled;
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const addMessage = () => {
      // Get next message from queue
      let text = queueRef.current[indexRef.current];
      
      // SAFETY CHECK: If somehow this matches the last message, skip to next
      if (text === lastMessageRef.current && queueRef.current.length > 1) {
        indexRef.current = (indexRef.current + 1) % queueRef.current.length;
        text = queueRef.current[indexRef.current];
      }
      
      // Store as last message
      lastMessageRef.current = text;
      
      setMessages(prev => [{ id: Date.now(), text }, ...prev].slice(0, 4));
      
      // Advance index
      indexRef.current++;
      
      // If we've used all messages, reshuffle (ensuring first item isn't same as last shown)
      if (indexRef.current >= queueRef.current.length) {
        const lastShown = lastMessageRef.current;
        let reshuffled = [...chatMessages];
        
        // Shuffle
        for (let i = reshuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [reshuffled[i], reshuffled[j]] = [reshuffled[j], reshuffled[i]];
        }
        
        // If first item matches last shown, move it to the end
        if (reshuffled[0] === lastShown) {
          const first = reshuffled.shift()!;
          reshuffled.push(first);
        }
        
        queueRef.current = reshuffled;
        indexRef.current = 0;
      }
    };

    // Initial message
    const timeout = setTimeout(addMessage, 500);
    
    // Then every 4 seconds
    const interval = setInterval(addMessage, 4000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="space-y-2">
      <AnimatePresence mode="popLayout">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1 - (index * 0.15), x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, x: -20 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="flex justify-end"
          >
            <div 
              className={`relative max-w-[85%] px-3.5 py-2 rounded-2xl rounded-br-md ${
                index === 0 
                  ? 'bg-edst-gold text-edst-black' 
                  : 'bg-edst-slate/40 text-edst-light'
              }`}
            >
              <span className="text-sm font-medium">{msg.text}</span>
              {index === 0 && (
                <motion.span 
                  className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-edst-online"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// Animated chart bars
const AnimatedChart = () => {
  const [bars, setBars] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setBars(Array.from({ length: 20 }, () => 25 + Math.random() * 75));
  }, []);

  // Subtle bar movement
  useEffect(() => {
    if (!isClient) return;
    const interval = setInterval(() => {
      setBars(prev => prev.map(bar => {
        const change = (Math.random() - 0.5) * 10;
        return Math.max(20, Math.min(95, bar + change));
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, [isClient]);

  if (!isClient) return <div className="h-28" />;

  return (
    <div className="flex items-end gap-1.5 h-28">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            background: 'linear-gradient(to top, rgba(250, 204, 83, 0.6), rgba(250, 204, 83, 0.15))',
          }}
          animate={{ height: `${height}%` }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export const DashboardTeaser = () => {
  return (
    <section id="dashboard" className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-edst-black" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Animated floating orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(250,204,83,0.12) 0%, transparent 70%)' }}
        animate={{ 
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(250,204,83,0.08) 0%, transparent 70%)' }}
        animate={{ 
          scale: [1.1, 1, 1.1],
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="section-container relative z-10">
        {/* Header - Cleaned up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-mono uppercase tracking-widest text-edst-gold border border-edst-gold/30 rounded-lg"
              animate={{ boxShadow: ['0 0 0 rgba(250,204,83,0)', '0 0 15px rgba(250,204,83,0.2)', '0 0 0 rgba(250,204,83,0)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Crown className="w-4 h-4" />
              Viral Campaigns
            </motion.span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-edst-white mb-4">
            Watch Us <span className="text-gradient-gold">Work.</span>
          </h2>
          <p className="text-base md:text-lg text-edst-silver max-w-lg">
            Real-time tracking for campaigns that crush.
            <br />
            <span className="text-edst-silver/70">Watch the numbers climb.</span>
          </p>
        </motion.div>

        {/* Dashboard mockup - with extra glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Outer glow effect */}
          <motion.div 
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-edst-gold/20 via-edst-gold/10 to-edst-gold/20 blur-xl"
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <div className="relative panel overflow-hidden">
          {/* Window header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-edst-slate/20 bg-edst-charcoal/50">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-3 h-3 rounded-full bg-edst-error/80"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-edst-warning/80"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-edst-online/80"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              />
            </div>
            <div className="flex items-center gap-2">
              <motion.span 
                className="w-2 h-2 rounded-full bg-edst-online"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs font-mono text-edst-online">LIVE</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-6">
            {/* Campaign metrics row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {campaignMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="card-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <metric.icon className="w-4 h-4 text-edst-silver" />
                    <motion.span 
                      className="flex items-center text-sm font-mono text-edst-online"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {metric.change}
                      <ArrowUpRight className="w-3 h-3 ml-0.5" />
                    </motion.span>
                  </div>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-edst-white">{metric.value}</p>
                  <p className="text-sm text-edst-silver">{metric.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Chart + Campaign Chat */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Animated Chart */}
              <div className="md:col-span-2 card-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-medium text-edst-white">Campaign Performance</span>
                  <motion.span 
                    className="text-sm text-edst-silver"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Last 30 days
                  </motion.span>
                </div>
                <AnimatedChart />
              </div>

              {/* Campaign Chat - iMessage style */}
              <div className="card-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-medium text-edst-white">Campaign Chat</span>
                  <motion.span 
                    className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-edst-online/10 border border-edst-online/20"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-edst-online" />
                    <span className="text-[10px] font-mono text-edst-online">LIVE</span>
                  </motion.span>
                </div>
                <CampaignChat />
              </div>
            </div>
          </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <p className="text-sm text-edst-silver">
            This is what it looks like when we run your campaign.
          </p>
          <motion.a
            href="/marketing#enterprise"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-edst-gold text-edst-black rounded-full hover:bg-edst-gold-light transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Viral Campaigns
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { ShoppingCart, CheckCircle, User } from 'lucide-react';

interface Purchase {
  id: number;
  name: string;
  plan: string;
  location: string;
  time: string;
}

// 60+ diverse names
const firstNames = [
  // USA names (90%)
  'Alex', 'Jordan', 'Taylor', 'Casey', 'Morgan', 'Jamie', 'Riley', 'Quinn', 'Cameron', 'Blake',
  'Dylan', 'Parker', 'Skyler', 'Reese', 'Kendall', 'Peyton', 'Drew', 'Sage', 'River', 'Phoenix',
  'Marcus', 'Jayden', 'Ethan', 'Noah', 'Liam', 'Mason', 'Logan', 'Lucas', 'Jackson', 'Aiden',
  'Sophia', 'Emma', 'Olivia', 'Ava', 'Isabella', 'Mia', 'Charlotte', 'Harper', 'Luna', 'Ella',
  'Tyler', 'Brandon', 'Derek', 'Kyle', 'Austin', 'Chase', 'Hunter', 'Cole', 'Trevor', 'Jake',
  'Brittany', 'Ashley', 'Jessica', 'Nicole', 'Samantha', 'Megan', 'Rachel', 'Lauren', 'Amanda', 'Kayla',
];

// 90% USA locations, 10% international
const usaLocations = [
  'Miami, FL', 'Los Angeles, CA', 'New York, NY', 'Austin, TX', 'Chicago, IL',
  'San Diego, CA', 'Phoenix, AZ', 'Houston, TX', 'Atlanta, GA', 'Denver, CO',
  'Seattle, WA', 'Boston, MA', 'Nashville, TN', 'Portland, OR', 'San Francisco, CA',
  'Dallas, TX', 'Las Vegas, NV', 'Charlotte, NC', 'Tampa, FL', 'Orlando, FL',
];
const intlLocations = ['Toronto, CA', 'Vancouver, CA', 'London, UK', 'Dubai, UAE', 'Amsterdam, NL'];

const getLocation = () => {
  return Math.random() < 0.9 
    ? usaLocations[Math.floor(Math.random() * usaLocations.length)]
    : intlLocations[Math.floor(Math.random() * intlLocations.length)];
};

const planNames = ['Organic Pro', 'Organic Edge', 'Organic Prime', 'Growth Bundle', 'All Access', 'Community', 'PR Starter', 'Serious Bundle'];

export const LivePurchaseFeed = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const addPurchase = useCallback(() => {
    const newPurchase: Purchase = {
      id: Date.now(),
      name: firstNames[Math.floor(Math.random() * firstNames.length)],
      plan: planNames[Math.floor(Math.random() * planNames.length)],
      location: getLocation(),
      time: 'Just now',
    };

    setPurchases(prev => [newPurchase, ...prev].slice(0, 1));

    // Remove after display
    setTimeout(() => {
      setPurchases(prev => prev.filter(p => p.id !== newPurchase.id));
    }, 5000);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Initial purchase after 2 seconds
    const initialTimeout = setTimeout(addPurchase, 2000);

    // Then every 12-20 seconds (less frequent, more exclusive feel)
    const addWithDelay = () => {
      addPurchase();
      const nextDelay = 12000 + Math.random() * 8000;
      setTimeout(addWithDelay, nextDelay);
    };
    
    const interval = setTimeout(addWithDelay, 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(interval);
    };
  }, [isClient, addPurchase]);

  if (!isClient) return null;

  return (
    <AnimatePresence>
      {purchases.map((purchase) => (
        <motion.div
          key={purchase.id}
          initial={{ opacity: 0, x: -100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-6 z-50"
        >
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-edst-charcoal/95 border border-edst-slate/30 backdrop-blur-xl shadow-lg max-w-sm">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-edst-gold/20 flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-edst-gold" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-edst-white text-sm">{purchase.name}</span>
                <span className="text-xs text-edst-silver">from {purchase.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-edst-online" />
                <span className="text-sm text-edst-light">
                  Joined <span className="text-edst-gold font-medium">{purchase.plan}</span>
                </span>
              </div>
            </div>

            {/* Time */}
            <span className="text-xs text-edst-silver whitespace-nowrap">{purchase.time}</span>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};


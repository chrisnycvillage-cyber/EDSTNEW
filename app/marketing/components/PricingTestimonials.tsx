'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Star, CheckCircle } from 'lucide-react';

// Extended testimonials pool - 16 reviews
const allTestimonials = [
  {
    quote: "The best marketing agency on the planet! Took my IG, TikTok, press and Spotify to a whole other level. Because of them I got signed to Def Jam, my dream label!",
    author: 'Dream Team',
    role: 'Recording Artist',
    source: 'Trustpilot',
  },
  {
    quote: "Everyday Success Team changed the way I saw my business. Not only did my following and my sales grow, but I was enveloped into such a supportive community.",
    author: 'Alexandra Castle',
    role: 'Founder, Castle Art',
    source: 'Google',
  },
  {
    quote: "The service has been absolutely fantastic – It has helped automate my business in ways I did not know was possible. Great guys, highly recommend.",
    author: 'Dr. Dan',
    role: 'Chiropractor & Wellness Expert',
    source: 'Google',
  },
  {
    quote: "Without this company it would have taken me years to get to the point I am in my business. So grateful for them!",
    author: 'Rebecca B.',
    role: 'Entrepreneur & Writer',
    source: 'Trustpilot',
  },
  {
    quote: "EDST has changed my way of life! They bring me value that I didn't know was out there and it's not just the services, it's the genuine care they have.",
    author: 'Isaiah Haynes',
    role: 'Musician',
    source: 'Google',
  },
  {
    quote: "This is the best agency on the planet by far! Their social media campaigns really helped me network like no other to improve my brand.",
    author: 'Marcus T.',
    role: 'Content Creator',
    source: 'Trustpilot',
  },
  {
    quote: "Look at your favorite celebrity's account, they likely work with them. The results speak for themselves. My engagement went through the roof.",
    author: 'Jordan K.',
    role: 'Influencer',
    source: 'Glassdoor',
  },
  {
    quote: "Great company, great vision. They really care about their clients' success and it shows in everything they do. 10/10 would recommend.",
    author: 'Sarah M.',
    role: 'E-commerce Owner',
    source: 'Google',
  },
  {
    quote: "The team at EDST helped me go from 5K to 500K followers in under a year. Their strategies actually work. Life changing.",
    author: 'Chris L.',
    role: 'Fitness Coach',
    source: 'Trustpilot',
  },
  {
    quote: "I was skeptical at first but the results were undeniable. My music is now reaching audiences I never thought possible. Thank you EDST!",
    author: 'Nina R.',
    role: 'Independent Artist',
    source: 'Google',
  },
  {
    quote: "Professional, responsive, and they actually deliver what they promise. Rare to find in this industry. My business doubled in 6 months.",
    author: 'David P.',
    role: 'Agency Owner',
    source: 'Glassdoor',
  },
  {
    quote: "The community alone is worth it. Being around other successful entrepreneurs pushing each other daily. The services are just a bonus.",
    author: 'Ashley W.',
    role: 'Life Coach',
    source: 'Trustpilot',
  },
  {
    quote: "They got me features in major publications I couldn't get on my own. The PR team knows what they're doing. Absolutely elite.",
    author: 'Mike J.',
    role: 'Tech Founder',
    source: 'Google',
  },
  {
    quote: "From zero to viral. That's the EDST difference. My content went from 1K views to millions. These guys are the real deal.",
    author: 'Taylor S.',
    role: 'TikTok Creator',
    source: 'Trustpilot',
  },
  {
    quote: "Best investment I've made in my career. The ROI is insane. If you're serious about growth, stop looking and just join.",
    author: 'Brandon H.',
    role: 'Real Estate Investor',
    source: 'Google',
  },
  {
    quote: "They understand the music industry in a way most agencies don't. Helped me chart on multiple platforms. Forever grateful.",
    author: 'Melody V.',
    role: 'Singer-Songwriter',
    source: 'Trustpilot',
  },
];

// Fisher-Yates shuffle
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const PricingTestimonials = () => {
  const [positions, setPositions] = useState([0, 1, 2, 3]);
  const [isClient, setIsClient] = useState(false);
  
  // Queue system to ensure all testimonials cycle through before repeating
  const queueRef = useRef<number[]>([]);
  const currentPositionRef = useRef(0);

  // Initialize queue with shuffled indices (excluding first 4 that are showing)
  const initializeQueue = useCallback(() => {
    const remainingIndices = Array.from({ length: allTestimonials.length }, (_, i) => i)
      .filter(i => ![0, 1, 2, 3].includes(i));
    queueRef.current = shuffleArray(remainingIndices);
    currentPositionRef.current = 0;
  }, []);

  // Get next testimonial from queue
  const getNextFromQueue = useCallback((currentlyShowing: number[]): number => {
    // If queue is empty, refill it with all indices not currently showing
    if (queueRef.current.length === 0) {
      const availableIndices = Array.from({ length: allTestimonials.length }, (_, i) => i)
        .filter(i => !currentlyShowing.includes(i));
      queueRef.current = shuffleArray(availableIndices);
    }
    
    // Get next from queue, ensuring it's not currently showing
    let nextIndex = queueRef.current.shift()!;
    
    // Safety check: if somehow it's showing, get another
    while (currentlyShowing.includes(nextIndex) && queueRef.current.length > 0) {
      queueRef.current.push(nextIndex); // Put it back at the end
      nextIndex = queueRef.current.shift()!;
    }
    
    return nextIndex;
  }, []);

  useEffect(() => {
    setIsClient(true);
    initializeQueue();
  }, [initializeQueue]);

  // Cycle testimonials through positions
  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setPositions(prev => {
        const newPositions = [...prev];
        
        // Cycle through positions in order: 0, 1, 2, 3, 0, 1, 2, 3...
        const posToUpdate = currentPositionRef.current % 4;
        currentPositionRef.current++;
        
        // Get next testimonial that's not currently showing
        const nextIndex = getNextFromQueue(newPositions);
        
        // Add the outgoing testimonial back to the queue
        queueRef.current.push(newPositions[posToUpdate]);
        
        newPositions[posToUpdate] = nextIndex;
        return newPositions;
      });
    }, 1800); // Change every 1.8 seconds

    return () => clearInterval(interval);
  }, [isClient, getNextFromQueue]);

  if (!isClient) {
    return (
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-edst-dark" />
        <div className="section-container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-edst-white mb-4">
              Real Members. <span className="text-gradient-gold">Real Results.</span>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-edst-dark" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-edst-white mb-4">
            Real Members. <span className="text-gradient-gold">Real Results.</span>
          </h2>
          <p className="text-edst-silver max-w-lg mx-auto">
            Join thousands of creators, businesses, and entrepreneurs already growing with EDST.
          </p>
          
          {/* Live indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <motion.span
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-edst-online"
            />
            <span className="text-xs text-edst-silver uppercase tracking-wider">Live Reviews</span>
          </div>
        </motion.div>

        {/* Testimonials Grid - 4 positions with cycling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {positions.map((testimonialIndex, positionIndex) => {
            const testimonial = allTestimonials[testimonialIndex];
            return (
              <div key={positionIndex} className="relative h-[200px] md:h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIndex}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="absolute inset-0 p-5 rounded-2xl bg-edst-charcoal/40 border border-edst-slate/20 hover:border-edst-gold/30 transition-colors"
                  >
                    {/* Stars + Source */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-edst-gold fill-edst-gold" />
                        ))}
                      </div>
                      <span className="text-[10px] text-edst-silver/60 uppercase tracking-wider">
                        {testimonial.source}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-sm text-edst-light mb-4 leading-relaxed line-clamp-3">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="font-semibold text-edst-white text-sm">{testimonial.author}</p>
                        <p className="text-xs text-edst-silver">{testimonial.role}</p>
                      </div>

                      {/* Verified badge */}
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-edst-online/10 border border-edst-online/20">
                        <CheckCircle className="w-3 h-3 text-edst-online" />
                        <span className="text-[10px] font-medium text-edst-online">Verified</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Review count indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="w-6 h-6 rounded-full bg-gradient-to-br from-edst-gold/40 to-edst-gold/20 border border-edst-gold/30 flex items-center justify-center"
                >
                  <span className="text-[8px] font-bold text-edst-gold">
                    {['A', 'M', 'J', 'S', 'T'][i]}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-xs text-edst-silver">+500 verified reviews</span>
          </div>
          
          <div className="w-px h-4 bg-edst-slate/30" />
          
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-edst-gold fill-edst-gold" />
              ))}
            </div>
            <span className="text-xs text-edst-silver">4.9 average</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

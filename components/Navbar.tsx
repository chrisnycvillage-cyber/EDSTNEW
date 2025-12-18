'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Gift } from 'lucide-react';
import { navigation } from '@/lib/config';
import { Logo } from './Logo';

export const Navbar = () => {
  const pathname = usePathname();
  const isMarketingPage = pathname === '/marketing' || pathname === '/checkout';
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navHovered, setNavHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [wonBonus, setWonBonus] = useState<string | null>(null);
  const [showBonusModal, setShowBonusModal] = useState(false);
  const [shouldWiggle, setShouldWiggle] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Periodic wiggle animation for the bonus button
  useEffect(() => {
    if (hasInteracted || wonBonus) return; // Don't wiggle if already interacted or won
    
    const triggerWiggle = () => {
      setShouldWiggle(true);
      setTimeout(() => setShouldWiggle(false), 600); // Wiggle duration
    };

    // Initial wiggle after 3 seconds
    const initialTimer = setTimeout(triggerWiggle, 3000);
    
    // Then wiggle every 6-10 seconds randomly
    const interval = setInterval(() => {
      const delay = Math.random() * 4000 + 6000; // 6-10 seconds
      setTimeout(triggerWiggle, delay);
    }, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [hasInteracted, wonBonus]);

  // Check for won bonus
  useEffect(() => {
    const checkBonus = () => {
      const saved = localStorage.getItem('edst-wheel-v3');
      if (saved) {
        const data = JSON.parse(saved);
        const prizes = [
          { label: '1K Followers', value: '1,000 Followers' },
          { label: '2K Followers', value: '2,000 Followers' },
          { label: 'PR Article', value: 'PR Article' },
          { label: 'Pop Pack', value: 'Pop Pack' },
        ];
        if (data.prizeIndex !== undefined && prizes[data.prizeIndex]) {
          setWonBonus(prizes[data.prizeIndex].value);
        }
      }
    };
    checkBonus();
    // Listen for storage changes (when user spins)
    window.addEventListener('storage', checkBonus);
    // Also check periodically in case same-tab update
    const interval = setInterval(checkBonus, 1000);
    return () => {
      window.removeEventListener('storage', checkBonus);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Collapse to dots after scrolling just 50px
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['ecosystem', 'services', 'results', 'analytics'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Show labels when:
  // - Homepage: at top of page OR hovering over nav
  // - Marketing/Checkout pages: ONLY when hovering (always start as dots)
  const showLabels = isMarketingPage ? navHovered : (!isScrolled || navHovered);

  return (
    <>
      {/* Top Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-edst-black/90 backdrop-blur-xl border-b border-edst-slate/10'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-18 py-4">
            
            {/* Left Side: Logo + Nav */}
            <div className="flex items-center gap-5">
              {/* Logo */}
              <a href="/" className="flex items-center">
                <Logo size="lg" />
              </a>

              {/* Divider */}
              <div className="hidden md:block w-px h-6 bg-edst-slate/20" />

              {/* Navigation - Desktop */}
              <div 
                className="hidden md:flex items-center"
                onMouseEnter={() => setNavHovered(true)}
                onMouseLeave={() => setNavHovered(false)}
              >
                <motion.div 
                  className="flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300"
                  style={{ 
                    background: (isScrolled || isMarketingPage) && navHovered ? 'rgba(250,204,83,0.05)' : 'transparent',
                    border: (isScrolled || isMarketingPage) && navHovered ? '1px solid rgba(250,204,83,0.15)' : '1px solid transparent',
                  }}
                >
                  {navigation.links.map((link, index) => {
                    const sectionId = link.href.replace('#', '');
                    const isActive = activeSection === sectionId;
                    
                    return (
                      <motion.button
                        key={link.label}
                        onClick={() => scrollToSection(link.href)}
                        className="relative flex items-center gap-2 px-2 py-1 rounded-full transition-all group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Dot - visible when scrolled OR on marketing page */}
                        <motion.span 
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all ${
                            isActive ? 'bg-edst-gold' : 'bg-edst-silver/40 group-hover:bg-edst-gold/70'
                          }`}
                          animate={{ 
                            scale: isActive ? [1, 1.4, 1] : 1,
                            opacity: (isScrolled || isMarketingPage) ? 1 : 0,
                            width: (isScrolled || isMarketingPage) ? 6 : 0,
                          }}
                          transition={{ duration: isActive ? 1.5 : 0.2, repeat: isActive ? Infinity : 0 }}
                        />
                        
                        {/* Label */}
                        <motion.span
                          animate={{ 
                            opacity: showLabels ? 1 : 0,
                            width: showLabels ? 'auto' : 0,
                          }}
                          transition={{ duration: 0.2, delay: showLabels ? index * 0.03 : 0 }}
                          className={`text-[11px] uppercase tracking-wider whitespace-nowrap overflow-hidden ${
                            isActive ? 'text-edst-gold font-medium' : 'text-edst-silver group-hover:text-edst-white'
                          }`}
                        >
                          {link.label}
                        </motion.span>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </div>
            </div>

            {/* Right Side: Bonus + Get Started */}
            <div className="hidden md:flex items-center gap-3">
              {/* Bonus Button - always visible with periodic wiggle */}
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  rotate: shouldWiggle ? [0, -3, 3, -3, 3, 0] : 0,
                }}
                transition={{
                  rotate: { duration: 0.5, ease: "easeInOut" }
                }}
                onClick={() => {
                  setHasInteracted(true);
                  if (wonBonus) {
                    setShowBonusModal(true);
                  } else {
                    window.dispatchEvent(new Event('open-spin-wheel'));
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                  wonBonus 
                    ? 'bg-edst-gold/10 border border-edst-gold/50' 
                    : 'bg-edst-charcoal/60 border border-edst-gold/30 hover:border-edst-gold/50'
                }`}
              >
                <Gift className="w-3.5 h-3.5 text-edst-gold" />
                <span className="text-[10px] uppercase tracking-wider text-edst-gold font-medium">
                  {wonBonus ? 'Bonus ✓' : 'Bonus'}
                </span>
              </motion.button>
              
              <motion.a
                href="/marketing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2.5 px-5 py-2.5 bg-edst-gold text-edst-black font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-edst-gold-light transition-all"
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-edst-online"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                {navigation.ctaText}
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-edst-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Bonus Modal */}
      <AnimatePresence>
        {showBonusModal && wonBonus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90"
            onClick={() => setShowBonusModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm bg-edst-black rounded-2xl border border-edst-gold/30 p-6 text-center"
            >
              <button
                onClick={() => setShowBonusModal(false)}
                className="absolute top-3 right-3 p-2 text-edst-silver/50 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="p-3 rounded-full bg-edst-gold/10 border border-edst-gold/30 w-fit mx-auto mb-4">
                <Gift className="w-6 h-6 text-edst-gold" />
              </div>
              
              <div className="text-xs uppercase tracking-wider text-edst-gold/70 mb-1">Your Welcome Bonus</div>
              <div className="text-2xl font-bold text-edst-gold mb-4">{wonBonus}</div>
              
              <p className="text-sm text-edst-silver mb-6">
                Delivered within 24 hours of joining any plan.<br />
                Our team reaches out personally.
              </p>
              
              <motion.a
                href="/marketing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-edst-gold text-edst-black font-bold text-sm uppercase tracking-wider rounded-xl"
              >
                Claim Bonus
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-edst-black/98 backdrop-blur-xl pt-20"
          >
            <div className="section-container py-6">
              <div className="flex flex-col gap-4">
                {navigation.links.map((link, index) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-lg font-heading text-edst-white hover:text-edst-gold transition-colors text-left"
                  >
                    {link.label}
                  </motion.button>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="pt-4 border-t border-edst-slate/20"
                >
                  <a
                    href="/marketing"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-edst-gold text-edst-black font-semibold text-sm uppercase tracking-wider rounded"
                  >
                    {navigation.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 mt-4"
                >
                  <span className="w-2 h-2 rounded-full bg-edst-online animate-pulse" />
                  <span className="text-sm font-mono text-edst-online">{navigation.statusText}</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

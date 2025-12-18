'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface LandingFooterProps {
  variant?: 'dark' | 'light';
}

export function LandingFooter({ variant = 'dark' }: LandingFooterProps) {
  const currentYear = new Date().getFullYear();
  
  const textColor = variant === 'dark' ? 'text-white/40' : 'text-edst-silver';
  const hoverColor = variant === 'dark' ? 'hover:text-white/70' : 'hover:text-edst-white';
  const borderColor = variant === 'dark' ? 'border-white/[0.06]' : 'border-edst-slate/20';
  const logoColor = variant === 'dark' ? 'text-edst-gold/80 hover:text-edst-gold' : 'text-edst-gold hover:text-edst-gold-light';

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`py-8 border-t ${borderColor}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Logo */}
          <Link href="/" className={`font-bold text-lg ${logoColor} transition-colors`}>
            EDST
          </Link>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/" className={`text-xs ${textColor} ${hoverColor} transition-colors`}>
              Home
            </Link>
            <Link href="/marketing" className={`text-xs ${textColor} ${hoverColor} transition-colors`}>
              Pricing
            </Link>
            <Link href="/viral" className={`text-xs ${textColor} ${hoverColor} transition-colors`}>
              Viral
            </Link>
            <Link href="/fitness" className={`text-xs ${textColor} ${hoverColor} transition-colors`}>
              Fitness
            </Link>
            <Link href="/musician-campaigns" className={`text-xs ${textColor} ${hoverColor} transition-colors`}>
              Artists
            </Link>
            <Link href="/business-campaigns" className={`text-xs ${textColor} ${hoverColor} transition-colors`}>
              Business
            </Link>
            <Link href="/jointheteam" className={`text-xs ${textColor} ${hoverColor} transition-colors`}>
              Partners
            </Link>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t ${borderColor}`}>
          <p className={`text-[10px] ${textColor}`}>
            © {currentYear} EDST. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <Link href="/terms" className={`text-[10px] ${textColor} ${hoverColor} transition-colors`}>
              Terms
            </Link>
            <Link href="/terms#privacy" className={`text-[10px] ${textColor} ${hoverColor} transition-colors`}>
              Privacy
            </Link>
            <a 
              href="https://instagram.com/everydaysuccessteam" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-[10px] ${textColor} ${hoverColor} transition-colors`}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}





'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-edst-black flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-edst-charcoal/20 via-transparent to-edst-charcoal/20" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(250,204,83,0.03) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-8xl md:text-9xl font-bold text-gradient-gold">404</span>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Page Not Found
          </h1>
          <p className="text-sm text-white/50 mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-edst-gold text-black font-medium text-sm rounded hover:bg-edst-gold-light transition"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/marketing"
            className="flex items-center gap-2 px-6 py-3 bg-white/[0.04] text-white/70 font-medium text-sm rounded hover:bg-white/[0.08] hover:text-white transition border border-white/[0.08]"
          >
            View Pricing
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/[0.06]"
        >
          <p className="text-xs text-white/30 mb-4">Quick Links</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/viral" className="text-xs text-white/40 hover:text-edst-gold transition">
              Viral Marketing
            </Link>
            <Link href="/musician-campaigns" className="text-xs text-white/40 hover:text-edst-gold transition">
              Artist Campaigns
            </Link>
            <Link href="/business-campaigns" className="text-xs text-white/40 hover:text-edst-gold transition">
              Business Campaigns
            </Link>
            <Link href="/jointheteam" className="text-xs text-white/40 hover:text-edst-gold transition">
              Join the Team
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}





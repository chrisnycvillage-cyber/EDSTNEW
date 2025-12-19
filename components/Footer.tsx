'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Logo } from './Logo';
import { Mail, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-edst-black">
      {/* Top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-edst-gold/30 to-transparent" />
      
      <div className="section-container py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Left - Brand & Description */}
          <div className="md:col-span-4">
            <Logo size="lg" />
            <p className="text-xl font-semibold text-edst-white mt-4 mb-2">
              The marketing ecosystem that never sleeps.
            </p>
            <p className="text-sm text-edst-silver mb-6 max-w-sm leading-relaxed">
              Powering creators, artists, and entrepreneurs across 37+ countries.
            </p>
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-edst-charcoal/40 border border-edst-slate/20">
              <motion.span 
                className="w-2 h-2 rounded-full bg-edst-online"
                animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs font-mono text-edst-online">Systems Online</span>
            </div>
          </div>

          {/* Middle - Services */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-edst-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/marketing"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link 
                  href="/viral"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  Viral Marketing
                </Link>
              </li>
              <li>
                <Link 
                  href="/musician-campaigns"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  Artist Campaigns
                </Link>
              </li>
              <li>
                <Link 
                  href="/business-campaigns"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  Business Campaigns
                </Link>
              </li>
              <li>
                <Link 
                  href="/fitness"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  Fitness Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-edst-white mb-4">Industries</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/industries/music"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  Music & Artists
                </Link>
              </li>
              <li>
                <Link 
                  href="/industries/healthcare"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link 
                  href="/industries/real-estate"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link 
                  href="/industries/ecommerce"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  E-commerce
                </Link>
              </li>
              <li>
                <Link 
                  href="/industries"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  View All 50+ →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-edst-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/case-studies"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/compare"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  Compare Options
                </Link>
              </li>
              <li>
                <Link 
                  href="/jointheteam"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/us"
                  className="text-sm text-edst-silver hover:text-edst-gold transition-colors"
                >
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Right - Contact & Social */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-edst-white mb-4">Get In Touch</h4>
            
            {/* Email */}
            <a 
              href="mailto:support@edst.com"
              className="flex items-center gap-3 mb-6 group"
            >
              <div className="p-2 rounded-lg bg-edst-charcoal/50 border border-edst-slate/20 group-hover:border-edst-gold/30 transition-colors">
                <Mail className="w-4 h-4 text-edst-silver group-hover:text-edst-gold transition-colors" />
              </div>
              <span className="text-sm text-edst-silver group-hover:text-edst-gold transition-colors">
                support@edst.com
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/everydaysuccessteam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-edst-charcoal/30 border border-edst-slate/15 hover:border-edst-gold/30 transition-all group"
            >
              {/* IG Icon */}
              <div className="w-10 h-10 rounded-lg bg-edst-charcoal/60 border border-edst-slate/20 flex items-center justify-center group-hover:border-edst-gold/30 transition-colors">
                <svg className="w-5 h-5 text-edst-silver group-hover:text-edst-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              
              {/* Account Info */}
              <div className="flex-1">
                <span className="text-sm font-medium text-edst-white group-hover:text-edst-gold transition-colors block">
                  @everydaysuccessteam
                </span>
                <span className="text-xs text-edst-silver">1.1M+ followers</span>
              </div>

              <ArrowUpRight className="w-4 h-4 text-edst-slate group-hover:text-edst-gold transition-colors" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-edst-slate/10 mb-6" />

        {/* Trust Indicators - Subtle */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6 text-[10px] text-edst-silver/40">
          <span>🔒 256-bit SSL</span>
          <span className="hidden sm:inline">•</span>
          <span>Visa / MC / Amex / Discover</span>
          <span className="hidden sm:inline">•</span>
          <span>Satisfaction Guaranteed</span>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-edst-silver/60">
            © {new Date().getFullYear()} EDST. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/terms#privacy" className="text-xs text-edst-silver/60 hover:text-edst-silver transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-edst-silver/60 hover:text-edst-silver transition-colors">
              Terms of Service
            </Link>
            <a href="https://marketplace.edst.com" className="text-xs text-edst-silver/60 hover:text-edst-silver transition-colors">
              Marketplace
            </a>
            <a href="https://partner.edst.com" className="text-xs text-edst-silver/60 hover:text-edst-silver transition-colors">
              Partner Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

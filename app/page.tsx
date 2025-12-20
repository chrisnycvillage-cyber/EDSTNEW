/**
 * ═══════════════════════════════════════════════════════════════════
 * EDST ALIVE ECOSYSTEM - HOME PAGE
 * ───────────────────────────────────────────────────────────────────
 * A living, breathing, always-online marketing ecosystem.
 * 
 * Optimized for performance with:
 * - Server components where possible
 * - Dynamic imports for heavy below-the-fold sections
 * - Proper component organization
 * ═══════════════════════════════════════════════════════════════════
 */

import dynamic from 'next/dynamic';
import {
  Navbar,
  Hero,
  ResultsFeed,
  Footer,
} from '@/components';

// Dynamic imports for below-the-fold content (lazy loaded)
const ServiceMarquee = dynamic(() => import('@/components/ServiceMarquee').then(m => ({ default: m.ServiceMarquee })), { ssr: true });
const Capabilities = dynamic(() => import('@/components/Capabilities').then(m => ({ default: m.Capabilities })), { ssr: true });
const ChooseYourLane = dynamic(() => import('@/components/ChooseYourLane').then(m => ({ default: m.ChooseYourLane })), { ssr: true });
const HowItWorks = dynamic(() => import('@/components/HowItWorks').then(m => ({ default: m.HowItWorks })), { ssr: true });
const Testimonials = dynamic(() => import('@/components/Testimonials').then(m => ({ default: m.Testimonials })), { ssr: true });
const DashboardTeaser = dynamic(() => import('@/components/DashboardTeaser').then(m => ({ default: m.DashboardTeaser })), { ssr: true });
const OurStory = dynamic(() => import('@/components/OurStory').then(m => ({ default: m.OurStory })), { ssr: true });
const FAQ = dynamic(() => import('@/components/FAQ').then(m => ({ default: m.FAQ })), { ssr: true });
const CTA = dynamic(() => import('@/components/CTA').then(m => ({ default: m.CTA })), { ssr: true });

// Client-only interactive components (no SSR needed)
const CursorGlow = dynamic(() => import('@/components/CursorGlow').then(m => ({ default: m.CursorGlow })), { ssr: false });
const SpinWheel = dynamic(() => import('@/components/SpinWheel').then(m => ({ default: m.SpinWheel })), { ssr: false });
const LiveOrderFeed = dynamic(() => import('@/components/LiveOrderFeed').then(m => ({ default: m.LiveOrderFeed })), { ssr: false });
const AsSeenIn = dynamic(() => import('@/components/AsSeenIn').then(m => ({ default: m.AsSeenIn })), { ssr: true });

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Premium Interactive Features - Client only */}
      <CursorGlow />
      <SpinWheel />

      {/* Fixed Navigation */}
      <Navbar />

      {/* Live Order Notifications - Toast popups */}
      <LiveOrderFeed />

      {/* Hero Section - Viral growth stats (Above the fold - not lazy loaded) */}
      <Hero />

      {/* As Seen In - Press logos */}
      <AsSeenIn />

      {/* Real-Time Activity Ticker */}
      <ResultsFeed />

      {/* Capabilities Section - Merged capabilities (replaces Ecosystem + Services) */}
      <Capabilities />

      {/* Choose Your Lane - Outcome-based targeting */}
      <ChooseYourLane />

      {/* How It Works - Simple 3 steps */}
      <HowItWorks />

      {/* Service Marquee - Scrolling service names */}
      <ServiceMarquee />

      {/* Testimonials Section - Social proof */}
      <section id="results">
        <Testimonials />
      </section>

      {/* Dashboard Section - Analytics preview */}
      <section id="dashboard">
        <DashboardTeaser />
      </section>

      {/* Our Story Section - Inside EDST */}
      <OurStory />

      {/* FAQ Section - Common questions */}
      <FAQ />

      {/* CTA Section - Final call to action */}
      <section id="apply">
        <CTA />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

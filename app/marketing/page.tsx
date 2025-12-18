/**
 * ═══════════════════════════════════════════════════════════════════
 * EDST MARKETING PAGE - Pricing & Subscriptions
 * ───────────────────────────────────────────────────────────────────
 * Super alive, easy to buy, shows constant activity
 * ═══════════════════════════════════════════════════════════════════
 */

import { Navbar, Footer, CursorGlow, FAQ, SpinWheel, VideoTestimonials } from '@/components';
import { 
  PricingHero,
  PricingTiers,
  EnterpriseTiers,
  MarketplaceTeaser,
  PricingTestimonials,
  PricingCTA,
} from './components';

export default function MarketingPage() {
  return (
    <main className="relative overflow-hidden bg-edst-black">
      {/* Premium Interactive Features */}
      <CursorGlow />
      <SpinWheel />

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <PricingHero />

      {/* Pricing Tiers */}
      <PricingTiers />


      {/* Enterprise / High-Level Tiers */}
      <EnterpriseTiers />

      {/* Marketplace Teaser */}
      <MarketplaceTeaser />

      {/* Testimonials */}
      <PricingTestimonials />

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA */}
      <PricingCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}

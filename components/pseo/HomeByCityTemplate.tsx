'use client';

/**
 * ═══════════════════════════════════════════════════════════════════
 * HOME BY CITY TEMPLATE - P-SEO
 * ───────────────────────────────────────────────────────────────────
 * Reusable template for city-specific landing pages.
 * Each city page has UNIQUE content to avoid duplicate content penalties.
 * ═══════════════════════════════════════════════════════════════════
 */

import {
  Navbar,
  ResultsFeed,
  ServiceMarquee,
  EcosystemSection,
  HowItWorks,
  Services,
  Testimonials,
  DashboardTeaser,
  OurStory,
  CTA,
  Footer,
  LiveOrderFeed,
  FAQ,
  CursorGlow,
  SpinWheel,
} from '@/components';

import { CityHero } from './CityHero';
import { CityIntroSection } from './CityIntroSection';
import { CityInternalLinks } from './CityInternalLinks';
import { City } from '@/data/cities';
import { generateLocalBusinessSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo';

export interface HomeByCityTemplateProps {
  city: string;
  state: string;
  stateAbbr: string;
  slug: string;
  stateSlug: string; // For proper URL hierarchy
  // UNIQUE content per city - critical for SEO
  h1: string;
  heroSubheadline: string;
  cityIntro: string;
  localContent: string;
  industries: string[];
  // For dynamic stats
  population?: number;
  // SEO keywords
  primaryKeyword: string;
  secondaryKeywords: string[];
  // Navigation
  ctaUrl: string;
  relatedCities: City[];
}

export const HomeByCityTemplate = ({
  city,
  state,
  stateAbbr,
  slug,
  stateSlug,
  h1,
  heroSubheadline,
  cityIntro,
  localContent,
  industries = [],
  population,
  primaryKeyword,
  secondaryKeywords,
  ctaUrl,
  relatedCities,
}: HomeByCityTemplateProps) => {
  // Generate structured data for this city page
  const localBusinessSchema = generateLocalBusinessSchema(city, state);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'States', url: `${siteConfig.url}/us` },
    { name: state, url: `${siteConfig.url}/us/${stateSlug}` },
    { name: city, url: `${siteConfig.url}/us/${stateSlug}/${slug}` },
  ]);

  return (
    <main className="relative overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Premium Interactive Features */}
      <CursorGlow />
      <SpinWheel />

      {/* Fixed Navigation */}
      <Navbar />

      {/* Live Order Notifications - Toast popups */}
      <LiveOrderFeed />

      {/* City-Specific Hero Section - UNIQUE H1 and subheadline per city */}
      <CityHero 
        city={city}
        state={state}
        h1={h1}
        subheadline={heroSubheadline}
        primaryKeyword={primaryKeyword}
        ctaUrl={ctaUrl}
      />

      {/* Real-Time Activity Ticker */}
      <ResultsFeed />

      {/* City Introduction Section - UNIQUE intro, local content, and industries per city */}
      <CityIntroSection 
        city={city}
        state={state}
        cityIntro={cityIntro}
        localContent={localContent}
        industries={industries}
        population={population}
      />

      {/* Ecosystem Section - Six growth engines */}
      <EcosystemSection />

      {/* How It Works - Simple 3 steps */}
      <HowItWorks />

      {/* Service Marquee - Scrolling service names */}
      <ServiceMarquee />

      {/* Services Section - Full service breakdown */}
      <Services />

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

      {/* City Internal Links - P-SEO internal linking */}
      <CityInternalLinks 
        currentCity={city}
        relatedCities={relatedCities}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
};

'use client';

/**
 * ═══════════════════════════════════════════════════════════════════
 * SERVICE BY CITY TEMPLATE - P-SEO (FOUNDATION)
 * ───────────────────────────────────────────────────────────────────
 * Reusable template for service-specific city landing pages.
 * 
 * Future routes:
 * - /services/fitness/[citySlug] → Fitness marketing in {city}
 * - /services/music/[citySlug] → Music marketing in {city}
 * - /services/business/[citySlug] → Business marketing in {city}
 * - /services/viral/[citySlug] → Viral marketing in {city}
 * 
 * This is the foundation - implement when ready to expand P-SEO.
 * ═══════════════════════════════════════════════════════════════════
 */

import { City } from '@/data/cities';

export type ServiceType = 'fitness' | 'music' | 'business' | 'viral';

export interface ServiceByCityTemplateProps {
  city: string;
  state: string;
  stateAbbr: string;
  slug: string;
  serviceType: ServiceType;
  primaryKeyword: string;
  secondaryKeywords: string[];
  serviceIntro: string;
  ctaUrl: string;
  relatedCities: City[];
}

// Service-specific configuration
export const serviceConfig: Record<ServiceType, {
  name: string;
  headline: string;
  subheadline: (city: string) => string;
  basePage: string;
  ctaText: string;
  color: string;
}> = {
  fitness: {
    name: 'Fitness Marketing',
    headline: 'Fitness Marketing Agency',
    subheadline: (city: string) => `Helping fitness coaches and trainers in ${city} build thriving online businesses.`,
    basePage: '/fitness',
    ctaText: 'Start Your Fitness Business',
    color: 'green',
  },
  music: {
    name: 'Music Marketing',
    headline: 'Music Marketing Agency',
    subheadline: (city: string) => `Helping artists, DJs, and producers in ${city} blow up on streaming and social.`,
    basePage: '/musician-campaigns',
    ctaText: 'Launch Your Music Career',
    color: 'purple',
  },
  business: {
    name: 'Business Marketing',
    headline: 'Social Media Marketing Agency',
    subheadline: (city: string) => `Helping entrepreneurs and brands in ${city} dominate social media and drive real growth.`,
    basePage: '/business-campaigns',
    ctaText: 'Grow Your Business',
    color: 'blue',
  },
  viral: {
    name: 'Viral Marketing',
    headline: 'Viral Marketing Agency',
    subheadline: (city: string) => `Creating viral campaigns for creators and brands in ${city} that actually move the needle.`,
    basePage: '/viral',
    ctaText: 'Go Viral',
    color: 'gold',
  },
};

/**
 * Generate service-specific keywords for a city
 */
export function generateServiceKeywords(serviceType: ServiceType, city: string): {
  primary: string;
  secondary: string[];
} {
  const config = serviceConfig[serviceType];
  
  const keywordMaps: Record<ServiceType, { primary: string; secondary: string[] }> = {
    fitness: {
      primary: `fitness marketing agency in ${city}`,
      secondary: [
        `online fitness coaching ${city}`,
        `personal trainer marketing ${city}`,
        `gym marketing ${city}`,
        `fitness influencer growth ${city}`,
      ],
    },
    music: {
      primary: `music marketing agency in ${city}`,
      secondary: [
        `music promotion ${city}`,
        `artist marketing ${city}`,
        `Spotify promotion ${city}`,
        `DJ marketing ${city}`,
        `music video promotion ${city}`,
      ],
    },
    business: {
      primary: `social media marketing agency in ${city}`,
      secondary: [
        `business Instagram growth ${city}`,
        `brand marketing ${city}`,
        `entrepreneur marketing ${city}`,
        `small business social media ${city}`,
      ],
    },
    viral: {
      primary: `viral marketing agency in ${city}`,
      secondary: [
        `viral content creation ${city}`,
        `TikTok viral marketing ${city}`,
        `Instagram viral campaigns ${city}`,
        `influencer campaigns ${city}`,
      ],
    },
  };

  return keywordMaps[serviceType];
}

/**
 * Placeholder component - implement when ready to expand
 * 
 * Usage example:
 * ```tsx
 * <ServiceByCityTemplate
 *   city="Miami"
 *   state="Florida"
 *   stateAbbr="FL"
 *   slug="miami"
 *   serviceType="fitness"
 *   primaryKeyword="fitness marketing agency in Miami"
 *   secondaryKeywords={['online fitness coaching Miami', ...]}
 *   serviceIntro="Miami's fitness scene is booming..."
 *   ctaUrl="/fitness"
 *   relatedCities={[...]}
 * />
 * ```
 */
export const ServiceByCityTemplate = ({
  city,
  state,
  stateAbbr,
  slug,
  serviceType,
  primaryKeyword,
  secondaryKeywords,
  serviceIntro,
  ctaUrl,
  relatedCities,
}: ServiceByCityTemplateProps) => {
  const config = serviceConfig[serviceType];
  
  // Placeholder - implement full template when ready
  return (
    <div className="min-h-screen bg-edst-black flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-edst-white mb-4">
          {config.headline} in {city}
        </h1>
        <p className="text-edst-silver mb-8">
          {config.subheadline(city)}
        </p>
        <p className="text-sm text-edst-silver/60">
          Service-specific P-SEO template - implement when ready to expand.
        </p>
      </div>
    </div>
  );
};





/**
 * ═══════════════════════════════════════════════════════════════════
 * EDST GLOBAL SEO UTILITIES
 * ───────────────────────────────────────────────────────────────────
 * Centralized SEO metadata, schemas, and utilities for all pages.
 * ═══════════════════════════════════════════════════════════════════
 */

import { Metadata } from 'next';

// ─────────────────────────────────────────────────────────────────
// SITE CONFIGURATION
// ─────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: 'EDST',
  tagline: 'The Marketing Ecosystem That Never Sleeps',
  description: 'EDST helps creators, brands, and entrepreneurs blow up with viral marketing, social media growth, and real results. Join 30K+ clients worldwide.',
  url: 'https://edst.com',
  ogImage: 'https://edst.com/og-image.jpg',
  twitterHandle: '@everydaysuccessteam',
  locale: 'en_US',
  themeColor: '#FACC53',
};

// ─────────────────────────────────────────────────────────────────
// METADATA GENERATOR
// ─────────────────────────────────────────────────────────────────

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  noFollow?: boolean;
}

/**
 * Generate complete metadata object for any page
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage = siteConfig.ogImage,
    ogType = 'website',
    noIndex = false,
    noFollow = false,
  } = config;

  const fullTitle = title.includes('EDST') ? title : `${title} | EDST`;
  const canonicalUrl = canonical || siteConfig.url;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: ogType,
      locale: siteConfig.locale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },
  };
}

// ─────────────────────────────────────────────────────────────────
// JSON-LD SCHEMA GENERATORS
// ─────────────────────────────────────────────────────────────────

/**
 * Organization Schema - Use on homepage/global layout
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EDST',
    alternateName: 'Everyday Success Team',
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: 'EDST is a full-service marketing ecosystem helping creators, brands, and entrepreneurs grow their social media presence with viral campaigns, content distribution, and real results.',
    foundingDate: '2017',
    sameAs: [
      'https://instagram.com/everydaysuccessteam',
      'https://tiktok.com/@everydaysuccessteam',
      'https://twitter.com/edstofficial',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 39.8283,
        longitude: -98.5795,
      },
      geoRadius: '3000 mi',
    },
  };
}

/**
 * Service Schema - For service/campaign pages
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  priceRange?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: 'EDST',
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    ...(service.priceRange && { priceRange: service.priceRange }),
  };
}

/**
 * FAQ Schema - For pages with FAQ sections
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Breadcrumb Schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Local Business Schema - For city pages
 */
export function generateLocalBusinessSchema(city: string, state: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `EDST - ${city}`,
    description: `Social media growth agency serving creators and brands in ${city}, ${state}. Viral marketing, Instagram growth, TikTok campaigns, and more.`,
    url: `${siteConfig.url}/us/${city.toLowerCase().replace(/\s+/g, '-')}`,
    parentOrganization: {
      '@type': 'Organization',
      name: 'EDST',
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: state,
      },
    },
    priceRange: '$$$',
  };
}

/**
 * Website Schema - For homepage
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/us/{search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// ─────────────────────────────────────────────────────────────────
// PAGE-SPECIFIC SEO CONFIGS
// ─────────────────────────────────────────────────────────────────

export const pageSEO = {
  home: {
    title: 'EDST | Social Media Growth & Viral Marketing Agency',
    description: 'The marketing ecosystem that never sleeps. EDST helps 30K+ creators, brands, and entrepreneurs blow up with viral campaigns, social growth, and real results.',
    keywords: ['social media growth', 'viral marketing', 'Instagram growth', 'TikTok marketing', 'creator marketing', 'influencer marketing'],
  },
  pricing: {
    title: 'Pricing & Plans | EDST',
    description: 'Flexible plans for creators, artists, and entrepreneurs. From organic growth packages to high-ticket campaigns. Find your perfect plan and start growing today.',
    keywords: ['social media marketing pricing', 'Instagram growth plans', 'marketing agency pricing', 'creator marketing packages'],
  },
  viral: {
    title: 'Viral Marketing Campaigns | EDST',
    description: 'High-impact viral marketing for serious brands. $100K+ campaigns that generate billions of impressions and real business results. Strategy-first, results-driven.',
    keywords: ['viral marketing agency', 'viral campaigns', 'brand viral marketing', 'high-ticket marketing'],
  },
  musicianCampaigns: {
    title: 'Music Marketing for Artists & Musicians | EDST',
    description: 'Blow up your music career with EDST. Custom campaigns for artists, producers, and DJs. Spotify growth, TikTok virality, PR features, and more. $5K-$25K campaigns.',
    keywords: ['music marketing agency', 'artist marketing', 'Spotify promotion', 'music PR', 'TikTok music marketing'],
  },
  businessCampaigns: {
    title: 'Social Media Marketing for Businesses | EDST',
    description: 'Scale your business with viral social media campaigns. EDST helps entrepreneurs and brands generate massive reach, followers, and real revenue. $25K+ campaigns.',
    keywords: ['business social media marketing', 'brand marketing agency', 'entrepreneur marketing', 'viral brand campaigns'],
  },
  fitness: {
    title: 'Fitness Marketing & Coaching Business Growth | EDST',
    description: 'Build a $5K-$10K/month fitness coaching business. Fit Biz Community ($129/mo) and VIP programs with marketing, sales training, and business systems.',
    keywords: ['fitness marketing', 'online fitness coach', 'fitness business', 'personal trainer marketing', 'fitness coaching'],
  },
  partner: {
    title: 'Become an EDST Partner | Join the Team',
    description: 'Build income and influence as an EDST Partner. Daily training, dashboard access, mentorship, and real earning potential from $10K to $1M+. Apply now.',
    keywords: ['EDST partner', 'marketing partner program', 'join EDST', 'marketing career', 'remote marketing job'],
  },
  terms: {
    title: 'Terms of Service & Privacy Policy | EDST',
    description: 'Read the EDST Terms of Service, Privacy Policy, and Cancellation Policy. Understand your rights and our commitments.',
    keywords: ['EDST terms', 'privacy policy', 'terms of service'],
  },
  citiesIndex: {
    title: 'Social Media Growth Agency | All Cities | EDST',
    description: 'EDST serves creators, brands, and entrepreneurs in 100+ cities across the United States. Find your city and start growing with viral marketing and social growth.',
    keywords: ['social media agency near me', 'marketing agency cities', 'local marketing agency'],
  },
};

/**
 * Generate city-specific SEO config
 */
export function getCitySEO(city: string, state: string, stateAbbr: string, slug: string): SEOConfig {
  return {
    title: `Social Media Growth Agency in ${city}, ${stateAbbr} | EDST`,
    description: `Looking for a social media growth agency in ${city}? EDST helps creators, brands, and entrepreneurs in ${city}, ${state} blow up with viral marketing and real results.`,
    keywords: [
      `social media growth agency ${city}`,
      `viral marketing ${city}`,
      `Instagram growth ${city}`,
      `TikTok marketing ${city}`,
      `influencer marketing ${city} ${stateAbbr}`,
      `creator marketing ${city}`,
    ],
    canonical: `${siteConfig.url}/us/${slug}`,
  };
}





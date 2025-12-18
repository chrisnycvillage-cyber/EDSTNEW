import type { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, pageSEO, siteConfig } from '@/lib/seo';
import { JsonLd } from '@/components/SEO/JsonLd';

export const metadata: Metadata = {
  ...genMeta({
    title: pageSEO.businessCampaigns.title,
    description: pageSEO.businessCampaigns.description,
    keywords: pageSEO.businessCampaigns.keywords,
    canonical: `${siteConfig.url}/business-campaigns`,
  }),
};

// Service Schema for Business Marketing
const serviceSchema = generateServiceSchema({
  name: 'Social Media Marketing for Businesses',
  description: 'Custom viral marketing campaigns for brands, entrepreneurs, and coaches. Multi-platform activation, paid advertising, PR coverage, and authority building.',
  serviceType: 'Business Marketing',
  url: `${siteConfig.url}/business-campaigns`,
  priceRange: '$$$$',
});

// FAQ Schema
const faqSchema = generateFAQSchema([
  {
    question: 'What results can businesses expect?',
    answer: 'Businesses typically see 100K-500K+ follower growth, millions of video views, viral moments generating 7-figure revenue, and significant brand authority building. Results depend on campaign size and industry.',
  },
  {
    question: 'How much do business campaigns cost?',
    answer: 'Business campaigns start at $25,000 and scale based on scope. Our largest campaigns range from $50K-$100K+ for comprehensive multi-platform domination.',
  },
  {
    question: 'What platforms do you cover for businesses?',
    answer: 'We deploy across Instagram, TikTok, YouTube, Twitter/X, LinkedIn, and emerging platforms. Strategy is customized based on your target audience and industry.',
  },
]);

export default function BusinessCampaignsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}

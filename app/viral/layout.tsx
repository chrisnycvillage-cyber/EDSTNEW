import type { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, pageSEO, siteConfig } from '@/lib/seo';
import { JsonLd } from '@/components/SEO/JsonLd';

export const metadata: Metadata = {
  ...genMeta({
    title: pageSEO.viral.title,
    description: pageSEO.viral.description,
    keywords: pageSEO.viral.keywords,
    canonical: `${siteConfig.url}/viral`,
  }),
};

// Service Schema for Viral Marketing
const serviceSchema = generateServiceSchema({
  name: 'Viral Marketing Campaigns',
  description: 'High-impact viral marketing campaigns for serious brands. Multi-platform activation engineered to dominate attention and drive narrative at scale.',
  serviceType: 'Viral Marketing',
  url: `${siteConfig.url}/viral`,
  priceRange: '$$$$$',
});

// FAQ Schema
const faqSchema = generateFAQSchema([
  {
    question: 'What is the minimum budget for viral campaigns?',
    answer: 'Our viral marketing campaigns start at $100,000 with a 30-day deployment timeline. This includes multi-platform activation, influencer coordination, content creation, and strategic amplification.',
  },
  {
    question: 'How long do viral campaigns run?',
    answer: 'Standard deployment is 30 days, though results can continue for months. We coordinate timing across platforms for maximum impact during the active campaign period.',
  },
  {
    question: 'What platforms do you cover?',
    answer: 'We deploy across all major platforms including Instagram, TikTok, YouTube, Twitter/X, and emerging platforms. Our multi-platform approach ensures maximum reach and viral potential.',
  },
]);

export default function ViralLayout({
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

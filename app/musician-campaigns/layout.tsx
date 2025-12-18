import type { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, pageSEO, siteConfig } from '@/lib/seo';
import { JsonLd } from '@/components/SEO/JsonLd';

export const metadata: Metadata = {
  ...genMeta({
    title: pageSEO.musicianCampaigns.title,
    description: pageSEO.musicianCampaigns.description,
    keywords: pageSEO.musicianCampaigns.keywords,
    canonical: `${siteConfig.url}/musician-campaigns`,
  }),
};

// Service Schema for Music Marketing
const serviceSchema = generateServiceSchema({
  name: 'Music Marketing for Artists',
  description: 'Full-scale music promotion campaigns for artists, producers, and DJs. Spotify growth, TikTok virality, PR features, playlist placements, and social media growth.',
  serviceType: 'Music Marketing',
  url: `${siteConfig.url}/musician-campaigns`,
  priceRange: '$$$',
});

// FAQ Schema
const faqSchema = generateFAQSchema([
  {
    question: 'What results can artists expect from campaigns?',
    answer: 'Artists typically see 2,000-15,000+ monthly Spotify listeners, 10,000+ Instagram follower growth, PR features, playlist placements, and viral TikTok moments. Results vary based on campaign size and starting point.',
  },
  {
    question: 'How much do music campaigns cost?',
    answer: 'Music marketing campaigns range from $5,000 to $25,000+, depending on scope and goals. Our team customizes each campaign based on your specific needs and target audience.',
  },
  {
    question: 'How long do music campaigns run?',
    answer: 'Standard music campaigns run 30-90 days, allowing time for content rollout, influencer coordination, playlist pitching, and organic momentum to build.',
  },
]);

export default function MusicianCampaignsLayout({
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

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'The EDST Editorial | Marketing Intelligence',
    template: '%s | The EDST Editorial'
  },
  description: 'In-depth marketing intelligence for creators, brands, and entrepreneurs. Expert analysis on social media, growth strategies, and the creator economy.',
  keywords: ['marketing intelligence', 'creator economy', 'social media strategy', 'brand growth', 'digital marketing', 'EDST Editorial'],
  alternates: {
    canonical: 'https://edst.com/blog',
  },
  openGraph: {
    title: 'The EDST Editorial | Marketing Intelligence',
    description: 'In-depth marketing intelligence for creators, brands, and entrepreneurs.',
    url: 'https://edst.com/blog',
    type: 'website',
    siteName: 'EDST',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The EDST Editorial',
    description: 'Marketing intelligence for creators, brands, and entrepreneurs.',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

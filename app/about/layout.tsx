import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About EDST | Our Story & Mission',
  description: 'Learn about EDST, the marketing ecosystem that never sleeps. Founded to help creators, artists, and entrepreneurs blow up their brands worldwide.',
  alternates: {
    canonical: 'https://edst.com/about',
  },
  openGraph: {
    title: 'About EDST | Social Media Growth Agency',
    description: 'Learn about EDST, the marketing ecosystem that never sleeps. 30K+ clients served across 37+ countries.',
    url: 'https://edst.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}




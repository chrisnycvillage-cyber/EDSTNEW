import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Real Results from EDST Campaigns',
  description: 'See real results from EDST marketing campaigns. Unbranded case studies showing follower growth, revenue increases, and brand transformations.',
  alternates: {
    canonical: 'https://edst.com/case-studies',
  },
  openGraph: {
    title: 'EDST Case Studies | Real Marketing Results',
    description: 'See real results from EDST marketing campaigns. From independent artists to 7-figure businesses.',
    url: 'https://edst.com/case-studies',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}




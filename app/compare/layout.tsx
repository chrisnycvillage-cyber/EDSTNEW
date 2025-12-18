import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare EDST to Alternatives | EDST',
  description: 'See how EDST compares to PR agencies, freelancers, in-house teams, and other marketing options. Make an informed decision about your growth strategy.',
  openGraph: {
    title: 'Compare EDST to Alternatives | EDST',
    description: 'See how EDST compares to PR agencies, freelancers, in-house teams, and other marketing options.',
    type: 'website',
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}




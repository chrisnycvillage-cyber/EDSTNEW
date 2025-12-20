'use client';

import { createContext, useContext } from 'react';

const SponsorContext = createContext<string | null>(null);

export function SponsorProvider({
  sponsor,
  children,
}: {
  sponsor: string | null;
  children: React.ReactNode;
}) {
  return (
    <SponsorContext.Provider value={sponsor}>
      {children}
    </SponsorContext.Provider>
  );
}

export const useSponsor = () => useContext(SponsorContext);



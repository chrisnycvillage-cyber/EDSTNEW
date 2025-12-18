'use client';

import { ReactNode } from 'react';
import { PageTransition } from './PageTransition';

interface ClientWrapperProps {
  children: ReactNode;
}

export const ClientWrapper = ({ children }: ClientWrapperProps) => {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  );
};


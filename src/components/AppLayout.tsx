import type { ReactNode } from 'react';

import AppProvider from '@/components/AppProvider';

export type AppLayoutProps = {
  children?: ReactNode
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <AppProvider>
      {children}
    </AppProvider>
  );
}

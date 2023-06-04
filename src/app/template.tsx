'use client';

import type { ReactNode } from 'react';

import AppLayout from '@/components/AppLayout';

export type TemplateProps = {
  children?: ReactNode
};

export default function Template({ children }: TemplateProps) {
  return (
    <AppLayout>
      {children}
    </AppLayout>
  );
}

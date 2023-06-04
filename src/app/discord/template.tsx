'use client';

import type { ReactNode } from 'react';

import NonRootPageLayout from '@/components/NonRootPageLayout';

export type TemplateProps = {
  children?: ReactNode
};

export default function Template({ children }: TemplateProps) {
  return (
    <NonRootPageLayout>
      {children}
    </NonRootPageLayout>
  );
}

'use client';

import type { ChildrenProps } from '@/utils/function-component';

import NonRootPageLayout from '@/components/NonRootPageLayout';
import { fc } from '@/utils/function-component';

export default fc<Partial<ChildrenProps>>('Template', ({ children }) => (
  <NonRootPageLayout>
    {children}
  </NonRootPageLayout>
));

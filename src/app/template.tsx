'use client';

import type { ChildrenProps } from '@/utils/function-component';

import AppLayout from '@/components/AppLayout';
import { fc } from '@/utils/function-component';

export default fc<ChildrenProps>('Template', ({ children }) => (
  <AppLayout>
    {children}
  </AppLayout>
));

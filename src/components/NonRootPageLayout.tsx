import Stack from '@mui/material/Stack';

import type { ReactNode } from 'react';

import NonRootPageLayoutHeader from '@/components/NonRootPageLayoutHeader';
import SpacingLayout from '@/components/SpacingLayout';

export type NonRootPageLayoutProps = {
  children?: ReactNode
};

export default function NonRootPageLayout({ children }: NonRootPageLayoutProps) {
  return (
    <Stack alignItems='flex-start' spacing={2}>
      <NonRootPageLayoutHeader />
      <SpacingLayout>
        {children}
      </SpacingLayout>
    </Stack>
  );
}

import Stack from '@mui/material/Stack';

import type { ChildrenProps } from '@/utils/function-component';

import NonRootPageLayoutHeader from '@/components/NonRootPageLayoutHeader';
import SpacingLayout from '@/components/SpacingLayout';
import { fc } from '@/utils/function-component';

export default fc<Partial<ChildrenProps>>('NonRootPageLayout', ({ children }) => {

  return (
    <Stack alignItems='flex-start' spacing={2}>
      <NonRootPageLayoutHeader />
      <SpacingLayout>
        {children}
      </SpacingLayout>
    </Stack>
  );
});

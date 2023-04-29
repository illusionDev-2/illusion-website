import AppProvider from './AppProvider';

import type { ChildrenProps } from '@/utils/function-component';

import { fc } from '@/utils/function-component';

export default fc<Partial<ChildrenProps>>('AppLayout', ({ children }) => (
  <AppProvider>
    {children}
  </AppProvider>
));

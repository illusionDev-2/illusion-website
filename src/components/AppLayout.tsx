import type { ChildrenProps } from '@/utils/function-component';

import AppProvider from '@/components/AppProvider';
import { fc } from '@/utils/function-component';

export default fc<Partial<ChildrenProps>>('AppLayout', ({ children }) => (
  <AppProvider>
    {children}
  </AppProvider>
));

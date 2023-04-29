import CssBaseline from '@mui/material/CssBaseline';

import type { ChildrenProps } from '@/utils/function-component';

import AppThemeProvider from '@/components/AppThemeProvider';
import { fc } from '@/utils/function-component';

export default fc<Partial<ChildrenProps>>('AppProvider', ({ children }) => (
  <AppThemeProvider>
    <CssBaseline />
    {children}
  </AppThemeProvider>
));

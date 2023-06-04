import CssBaseline from '@mui/material/CssBaseline';

import type { ReactNode } from 'react';

import AppThemeProvider from '@/components/AppThemeProvider';

export type AppProviderProps = {
  children?: ReactNode
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <AppThemeProvider>
      <CssBaseline />
      {children}
    </AppThemeProvider>
  );
}

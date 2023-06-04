import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import type { ReactNode } from 'react';

export type AppThemeProviderProps = {
  children?: ReactNode
};

export default function AppThemeProvider({ children }: AppThemeProviderProps) {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#000d1a'
      }
    },
    typography: {
      fontFamily: [
        'Noto Sans JP',
        'Helvetica',
        'Arial',
        'sans-serif'
      ].join(',')
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

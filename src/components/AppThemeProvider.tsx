import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import type { ChildrenProps } from '@/utils/function-component';

import { fc } from '@/utils/function-component';

export default fc<Partial<ChildrenProps>>('AppThemeProvider', ({ children }) => {
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
});

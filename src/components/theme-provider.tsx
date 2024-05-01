"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { experimental_extendTheme as extendTheme, Experimental_CssVarsProvider as CssVarsProvider, darken } from "@mui/material/styles";
import type { PropsWithChildren } from "react";
import { blue } from "@mui/material/colors";
import { notoSansJp } from "@/utils/font";

export type ThemeProviderProps = PropsWithChildren

export default function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const background = darken(blue[900], 0.8);
  const theme = extendTheme({
    typography: {
      fontFamily: [notoSansJp.style.fontFamily, "Helvetica", "Arial", "sans-serif"].join(",")
    },
    colorSchemes: {
      dark: {
        palette: {
          background: {
            default: background,
            paper: background
          }
        }
      }
    }
  });

  return (
    <CssVarsProvider
      theme={theme}
      defaultColorScheme="dark"
      defaultMode="dark"
    >
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}

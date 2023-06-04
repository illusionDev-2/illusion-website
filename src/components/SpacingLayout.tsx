import Grid from '@mui/material/Grid';

import type { ReactNode } from 'react';

export type SpacingLayoutProps = {
  children?: ReactNode
};

export default function SpacingLayout({ children }: SpacingLayoutProps) {
  return (
    <Grid container>
      <Grid item lg={3} md={2.5} sm={2} xs={0.5} />
      <Grid item lg={6} md={7} sm={8} xs={11}>
        {children}
      </Grid>
      <Grid item lg={3} md={2.5} sm={2} xs={0.5} />
    </Grid >
  );
}

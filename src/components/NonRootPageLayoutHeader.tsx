import AppBar from '@mui/material/AppBar';
import MuiLink from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

import SpacingLayout from '@/components/SpacingLayout';
import { fc } from '@/utils/function-component';

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

export default fc('NonRootPageLayoutHeader', () => (
  <AppBar
    elevation={0}
    position='static'
    sx={{ backgroundColor: 'background.default' }}
  >
    <Toolbar disableGutters>
      <SpacingLayout>
        <MuiLink
          color='text.secondary'
          component={NextLink}
          href='/'
          underline='none'
        >
          <Typography component='span' variant='h3'>{SITE_NAME}</Typography>
        </MuiLink>
      </SpacingLayout>
    </Toolbar>
  </AppBar>
));

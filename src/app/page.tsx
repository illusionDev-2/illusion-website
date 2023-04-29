'use client';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NextLink from 'next/link';

import { fc } from '@/utils/function-component';
import { url } from '@/utils/url';

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;
const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;
const SITE_SHORT_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_SHORT_DESCRIPTION;

export default fc('Page', () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack>
      <Stack
        overflow='hidden'
        paddingX={isSmallScreen ? 5 : 10}
        paddingY={7.5}
        position='relative'
        sx={{
          '::before': {
            content: '""',
            backgroundImage: `url(${url('/images/logo-594x594.png')})`,
            backgroundAttachment: 'fixed',
            top: '-5px',
            bottom: '-5px',
            left: '-5px',
            right: '-5px',
            backgroundPosition: 'bottom center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'absolute',
            filter: 'blur(7.5px)',
            zIndex: '-1'
          }
        }}
        zIndex={0}
      >
        <Stack sx={{ textShadow: '0 0 10px #333' }}>
          <Typography color='text.secondary' component='h1' variant='h2'>{SITE_NAME}</Typography>
          <Typography component='span' variant='h5'>{SITE_SHORT_DESCRIPTION}</Typography>
        </Stack>
      </Stack>
      <Stack padding={isSmallScreen ? 5 : 10}>
        <Grid container spacing={4}>
          <Grid item sm={6}>
            <Typography component='h2' fontWeight='bold' variant='h5'>illusionとは？</Typography>
            <Divider />
            <Typography>{SITE_DESCRIPTION}</Typography>
            <Typography>何気ない雑談から専門的な話題まで、様々なトピックが飛び交っています。</Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography component='h2' variant='h5'>Ayanamistとは誰ですか？</Typography>
            <Divider />
            <Typography>Ayanamistとはillusionの二人の創設者のことであり、綾波レイが好きな人のことでもあります。</Typography>
            <Typography>illusionではAyanamistが管理人で、2ndAyanamistが副管理人となります。</Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography component='h2' variant='h5'>Discordサーバーに参加</Typography>
            <Divider />
            <MuiLink
              component={NextLink}
              fontSize='1.5rem'
              href='/community/discord'
              underline='hover'
            >ルールとリンクはこちらから</MuiLink>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
});

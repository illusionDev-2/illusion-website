'use client';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { lighten } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NextLink from 'next/link';

import { metadata as discordGuidelinesMetadata } from '@/app/discord/guidelines/layout';
import { metadata as discordRolesMetadata } from '@/app/discord/roles/layout';
import { fc } from '@/utils/function-component';
import { url } from '@/utils/url';

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;
const DISCORD_INVITE_CODE = process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE;
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
            background: lighten(theme.palette.background.default, 0.1),
            backgroundImage: `url(${url('/images/logo-594x594.webp')})`,
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
            <Stack spacing={1}>
              <Typography component='h2' fontWeight='bold' variant='h5'>illusionとは？</Typography>
              <Divider />
              <div>
                <Typography>{SITE_DESCRIPTION}</Typography>
                <Typography>何気ない雑談から専門的な話題まで、様々なトピックが飛び交っています。</Typography>
              </div>
            </Stack>
          </Grid>
          <Grid item sm={6}>
            <Stack spacing={1}>
              <Typography component='h2' variant='h5'>Ayanamistとは誰ですか？</Typography>
              <Divider />
              <div>
                <Typography>Ayanamistとはillusionの二人の創設者のことであり、綾波レイが好きな人のことでもあります。</Typography>
                <Typography>illusionではAyanamistが管理人で、2ndAyanamistが副管理人となります。</Typography>
              </div>
            </Stack>
          </Grid>
          <Grid item sm={12}>
            <Stack spacing={1}>
              <Typography component='h2' variant='h5'>Discordサーバーに参加</Typography>
              <Divider />
              <Stack alignItems='flex-start' spacing={2}>
                <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={isSmallScreen ? 1 : 2}>
                  <MuiLink
                    component={NextLink}
                    fontSize='1.5rem'
                    href='/discord/guidelines'
                    underline='hover'
                  >
                    {discordGuidelinesMetadata.title}
                  </MuiLink>
                  <MuiLink
                    component={NextLink}
                    fontSize='1.5rem'
                    href='/discord/roles'
                    underline='hover'
                  >
                    {discordRolesMetadata.title}
                  </MuiLink>
                </Stack>
                <Stack spacing={1}>
                  <Typography fontSize='large'>代替サーバー</Typography>
                  <MuiLink
                    fontSize='1.5rem'
                    href={'https://discord.gg/cjDpfHxymD'}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    discord.gg/cjDpfHxymD
                    <OpenInNewIcon
                      color='action'
                      //color='disabled'
                      sx={{ verticalAlign: 'middle' }}
                    />
                  </MuiLink>
                </Stack>
                <Stack>
                  <Alert severity='error'>2023年6月2日22時30分現在、下記の招待リンクは一時的に無効になっています。</Alert>
                  <MuiLink
                    color='action.disabled'
                    component='span'
                    sx={{ pointerEvents: 'none' }}
                    fontSize='1.5rem'
                  >
                    discord.gg/{DISCORD_INVITE_CODE}
                    <OpenInNewIcon
                      // color='action'
                      color='disabled'
                      sx={{ verticalAlign: 'middle' }}
                    />
                  </MuiLink>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
});

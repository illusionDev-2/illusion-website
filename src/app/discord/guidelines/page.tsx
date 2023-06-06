'use client';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import dedent from 'dedent';

import { metadata } from '@/app/discord/guidelines/layout';
import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import BulletPointsList from '@/components/BulletPointsList';

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

const prohibitedMatters = {
  '意味のない文章やファイルの連投はしてはいけません': '',
  '宣伝目的や不適切なサーバーのリンクの投稿をしてはいけません': '',
  'IPLogger、tokenLoggerなど様々な悪意のあるサイト及びファイルの投稿をしてはいけません': '',
  '児童を性的に扱うコンテンツの投稿をしてはいけません': ''
} as const satisfies Record<string, string>;

const considerationMatters = {
  'メッセージ数は重要ではありません': dedent`
    メッセージ数は大事にするべきものではありますが、illusionでは最重要視しません。
    民度重視でお願いします。
  `,
  '言語について': 'illusionは当然どんな国や言葉の人でも歓迎しますが、日本語以外の言語に関しては負担が大きいためサポートしきれません。',
};

export default function Page() {
  return (
    <Stack alignItems='flex-start' spacing={3}>
      <AppBreadcrumbs
        items={[
          {
            label: SITE_NAME,
            href: '/'
          },
          {
            label: metadata.title
          }
        ]}
      />
      <Typography component='h1' variant='h4'>{metadata.title}</Typography>
      <div>
        <Typography>
          前提として
          <MuiLink href='https://discord.com/guidelines' rel='noopener noreferrer' target='_blank'>
            DISCORD コミュニティガイドライン
            <OpenInNewIcon color='action' fontSize='small' sx={{ verticalAlign: 'bottom' }} />
          </MuiLink>
          を守ってください。
        </Typography>
        <Typography>以下はDiscordコミュニティガイドラインに加えて覚えること、守るべきことです。</Typography>
        <Typography>Discordコミュニティガイドラインとの矛盾がある際はDiscordの方を遵守してください。</Typography>
      </div>
      <Stack spacing={1}>
        <Typography component='h2' variant='h5'>禁止行為</Typography>
        <Typography>以下の行為をすべて荒らし行為とし、タイムアウトやキックなどの処罰を行います。</Typography>
        <BulletPointsList list={prohibitedMatters} />
      </Stack>
      <Stack spacing={1}>
        <Typography component='h2' variant='h5'>考慮するべきこと</Typography>
        <BulletPointsList list={considerationMatters} />
      </Stack>
    </Stack>
  );
}

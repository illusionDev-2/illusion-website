'use client';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import dedent from 'dedent';

import { metadata } from '@/app/discord/roles/layout';
import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import BulletPointsList from '@/components/BulletPointsList';
import { fc } from '@/utils/function-component';

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

const roles = {
  'Ayanami': '明確な決まりはありませんが、原則創設者にのみ付いているロールです。',
  '2ndAyanamist': '全権限を持つ管理者のロールです。',
  'はまぐりファミリー': dedent`
    2020～2021年ごろに荒らし連合軍というサーバーで活動していた人に与えられるロールです。
    お知らせで発言をする権限がありましたが、現在は削除されています。
  `
} as const satisfies Record<string, string>;

export default fc('Page', () => (
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
    <BulletPointsList list={roles} />
  </Stack>
));

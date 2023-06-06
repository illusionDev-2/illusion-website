'use client';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import dedent from 'dedent';

import { metadata } from '@/app/discord/roles/layout';
import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import BulletPointsList from '@/components/BulletPointsList';

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

const roles = {
  'Ayanamist': '明確な決まりはありませんが、原則創設者にのみ付いているロールです。',
  'I have Absolute Terror FIELD': dedent`
    創設者と親しい人のみに付与されるロールです。
    権限はない見た目だけのロールですが、順位は後述する2ndAyanamistよりも上です。
  `,
  '2ndAyanamist': '全権限を持つ管理者のロールです。',
  'illusionDeveloper': 'プログラミングやサーバー構築など専門的な技術を持つ開発者に与えられるロールです。',
  'ill-Staff': dedent`
    一般のモデレーターに当たるロールです。
    2ndAyanamistより権限は低いですが、タイムアウトやメッセージの削除を行うことができます。
  `,
  'はまぐりファミリー': dedent`
    2020～2021年ごろに荒らし連合軍というサーバーで活動していた人に与えられるロールです。
    お知らせで発言をする権限がありましたが、現在は削除されています。
  `,
  'illusionist': '認証すると手に入るロールです。'
} as const satisfies Record<string, string>;

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
      <BulletPointsList list={roles} />
    </Stack>
  );
}

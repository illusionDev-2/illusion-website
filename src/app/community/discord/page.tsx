'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import dedent from 'dedent';
import NextLink from 'next/link';

import { fc } from '@/utils/function-component';

const DISCORD_INVITE_CODE = process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE;
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

const roles = {
  'TeamAyanamist': '明確な決まりはありませんが、原則創設者にのみ付いているロールです。',
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
  'illusion premium': dedent`
    支援者に与えられるロールです。
    支援者にのみ公開されているプログラムなどを入手できます。
  `,
  'はまぐりファミリー': dedent`
    2020～2021年ごろに荒らし連合軍というサーバーで活動していた人に与えられるロールです。
    お知らせで発言をする権限がありましたが、現在は削除されています。
  `,
  'illusionist': '認証すると手に入るロールです。'
} as const satisfies Record<string, string>;

const rules = {
  'メッセージ数は重要ではありません': dedent`
    メッセージ数は大事にするべきものではありますが、illusionでは最重要視しません。
    民度重視でお願いします。
  `,
  '言語について': 'illusionは当然どんな国や言葉の人でも歓迎しますが、日本語以外の言語に関しては負担が大きいためサポートできません。',
  '意味のない文章やファイルの連投の連投はしてはいけません': '',
  '宣伝目的や不適切なサーバーのリンクの投稿をしてはいけません': '',
  'IPLogger、tokenLoggerなど様々な悪意のあるサイト及びファイルの投稿をしてはいけません': '',
  '児童を性的に扱うコンテンツの投稿をしてはいけません': ''
} as const satisfies Record<string, string>;

export default fc('Page', () => (
  <Stack alignItems='flex-start' padding={2} spacing={2}>
    <Stack alignItems='flex-end' direction='row' spacing={1}>
      <Typography component='h1' variant='h5'>
        Discordサーバー {SITE_NAME} ガイドライン
      </Typography>
    </Stack>
    <MuiLink component={NextLink} fontSize='1.25rem' href='/' underline='hover'>ホームに戻る</MuiLink>
    <Divider flexItem />
    <Stack alignItems='flex-start' spacing={2}>
      <MuiLink href={`https://discord.gg/${DISCORD_INVITE_CODE}`} rel='noopener noreferrer' target='_blank' underline='hover'>
        <Stack alignItems='flex-end' component='span' direction='row' fontSize='1.25rem'>
          {`discord.gg/${DISCORD_INVITE_CODE}`}
          <OpenInNewIcon color='action' />
        </Stack>
      </MuiLink>
      <Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction='row' spacing={1}>
              <Typography>ロールの説明</Typography>
              <noscript>
                <Typography color='text.secondary'>※JavaScriptを有効にしないと閲覧できません</Typography>
              </noscript>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              component='ul'
              sx={{
                'li:not(:first-of-type)': {
                  margin: '1rem 0'
                },
                margin: 0,
                paddingInlineStart: '1rem'
              }}
            >
              {Object.entries(roles).map(([title, description]) => (
                <li key={title}>
                  <Typography fontWeight='bold'>{title}</Typography>
                  {description?.split(/\r?\n/).map(line => (
                    <Typography key={line}>{line}</Typography>
                  ))}
                </li>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Typography component='h2' variant='h5'>参加するにあたって覚えること・守るべきこと</Typography>
      <Stack>
        <Typography>
          前提として
          <MuiLink href='https://discord.com/guidelines' rel='noopener noreferrer' target='_blank' underline='hover'>
            DISCORD コミュニティガイドライン
            <OpenInNewIcon color='action' fontSize='small' sx={{ verticalAlign: 'bottom' }} />
          </MuiLink>
          を守ってください。
        </Typography>
        <Typography>以下はDiscordコミュニティガイドラインに加えて覚えること、守るべきことです。</Typography>
        <Typography>Discordコミュニティガイドラインとの矛盾がある際はDiscordの方を遵守してください。</Typography>
      </Stack>
      <Typography fontWeight='bold'>下記の禁止行為をすべて荒らし行為とし、タイムアウトやキックなどの処罰を行います。</Typography>
      <Box
        component='ul'
        sx={{
          'li:not(:first-of-type)': {
            margin: '1rem 0'
          },
          margin: 0,
          paddingInlineStart: '1rem'
        }}
      >
        {Object.entries(rules).map(([title, description]) => (
          <li key={title}>
            <Typography fontWeight='bold'>{title}</Typography>
            {description?.split(/\r?\n/).map(line => (
              <Typography key={line}>{line}</Typography>
            ))}
          </li>
        ))}
      </Box>
    </Stack>
  </Stack >
));

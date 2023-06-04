import type { ReactNode } from 'react';

import { url } from '@/utils/url';

const title = 'Discordサーバーガイドライン';
const description = 'Discordサーバーに参加するにあたって覚えること、守るべきことです。';

export type LayoutProps = {
  children: ReactNode
};

export const metadata = {
  title,
  description,
  openGraph: {
    type: 'article',
    title,
    description,
    url: url('/discord/guidelines')
  }
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
    </>
  );
}

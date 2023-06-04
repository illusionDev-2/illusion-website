import type { ReactNode } from 'react';

import { url } from '@/utils/url';

const title = 'Discordサーバーのロールについて';
const description = 'Discordサーバーのロール一覧です。';

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
    url: url('/discord/roles')
  }
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
    </>
  );
}

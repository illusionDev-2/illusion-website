import { Noto_Sans_JP } from 'next/font/google';

import type { ChildrenProps } from '@/utils/function-component';

import { fc } from '@/utils/function-component';
import { url } from '@/utils/url';

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;
const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;
const THEME_COLOR = process.env.NEXT_PUBLIC_THEME_COLOR;

const notoSansJp = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
});

export const metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  twitter: {
    card: 'summary_large_image'
  },
  themeColor: THEME_COLOR,
  manifest: url('/favicons/site.webmanifest'),
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: url('/favicons/apple-touch-icon.png')
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: url('/favicons/favicon-32x32.png')
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '194x194',
      url: url('/favicons/favicon-194x194.png')
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: url('/favicons/android-chrome-192x192.png')
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: url('/favicons/favicon-16x16.png')
    }
  ],
  description: SITE_DESCRIPTION,
  openGraph: {
    images: [{
      url: url('/images/logo-594x594.png'),
      width: 594,
      height: 594
    }],
    type: 'website',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: SITE_NAME
  },
  other: {
    'msapplication-TileColor': '#ffc40d',
    'msapplication-TileImage': url('/favicons/mstile-144x144.png'),
    'msapplication-config': url('/favicons/browserconfig.xml')
  }
};

export default fc<ChildrenProps>('Layout', ({ children }) => (
  <html lang='ja'>
    <body className={notoSansJp.className}>
      {children}
    </body>
  </html>
));

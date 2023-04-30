
import type { ChildrenProps } from '@/utils/function-component';

import { fc } from '@/utils/function-component';
import { url } from '@/utils/url';

const title = 'Discordサーバーガイドライン';
const description = 'Discordサーバーに参加するにあたって覚えること、守るべきことです。';

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

export default fc<ChildrenProps>('Layout', ({ children }) => (
  <>
    {children}
  </>
));

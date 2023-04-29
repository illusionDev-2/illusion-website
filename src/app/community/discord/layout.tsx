import type { ChildrenProps } from '@/utils/function-component';

import { fc } from '@/utils/function-component';
import { url } from '@/utils/url';

const title = 'Discordサーバーガイドライン';
const description = 'illusionのDiscordサーバーに参加するにあたって覚えること・守るべきこと。';

export const metadata = {
  title,
  description,
  openGraph: {
    type: 'article',
    title,
    description,
    url: url('/community/discord')
  }
};

export default fc<ChildrenProps>('Layout', ({ children }) => (
  <>
    {children}
  </>
));

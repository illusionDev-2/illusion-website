import type { ChildrenProps } from '@/utils/function-component';

import { fc } from '@/utils/function-component';
import { url } from '@/utils/url';

const title = 'Discordサーバーのロールについて';
const description = 'Discordサーバーのロール一覧です。';

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

export default fc<ChildrenProps>('Layout', ({ children }) => (
  <>
    {children}
  </>
));

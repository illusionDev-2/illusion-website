import type { FC, ReactNode } from 'react';

import { withFunctionName } from '@/utils/withFunctionName';

export type ChildrenProps = {
  children: ReactNode
};

export const fc = <P = Record<string, never>>(name: string, fc: FC<P>): FC<P> => (
  withFunctionName(name, fc)
);

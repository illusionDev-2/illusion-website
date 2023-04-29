import type { AnyFunction } from '@/types/AnyFunction';

export const withFunctionName = <T extends AnyFunction>(name: string, func: T): T => {
  const desc = Object.getOwnPropertyDescriptor(Function.prototype, 'name');

  return Object.defineProperty(func, 'name', {
    ...desc,
    value: name
  });
};

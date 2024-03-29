import { env } from '@/config/env.config';

export const devConsole = (...args: string[]) => {
  if (env.NODE_ENV !== 'production') {
    console.log(args.join(' '));
  }
};

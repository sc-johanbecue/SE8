/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { BasketProvider } from '@/lib/basket-context';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode; [key: string]: any }) {
  // Remove locale and other framework props that shouldn't reach DOM elements
  return <BasketProvider>{children}</BasketProvider>;
}

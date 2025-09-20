import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn('rounded-3xl border border-border bg-background/80 shadow-sm backdrop-blur-sm', className)}
      {...props}
    />
  );
}

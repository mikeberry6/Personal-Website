import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function MDXContent({ children }: { children: ReactNode }) {
  return <div className="prose prose-lg max-w-none dark:prose-invert">{children}</div>;
}

export const mdxComponents = {
  a: ({ className, ...props }: ComponentPropsWithoutRef<'a'>) => (
    <a
      className={cn('font-semibold text-primary no-underline hover:text-primary/80', className)}
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentPropsWithoutRef<'code'>) => (
    <code className={cn('rounded bg-foreground/10 px-1 py-0.5 text-sm', className)} {...props} />
  ),
  pre: ({ className, ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <pre
      className={cn('overflow-auto rounded-2xl border border-border bg-background p-4 text-sm shadow-sm', className)}
      {...props}
    />
  )
};

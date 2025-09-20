'use client';

import { useEffect } from 'react';

import { Button } from '@/app/components/ui/button';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <span className="text-sm font-semibold uppercase tracking-wide text-primary">Something went wrong</span>
      <h1 className="text-4xl font-semibold text-foreground">We hit a snag while loading this page.</h1>
      <p className="max-w-xl text-sm text-foreground/70">
        The issue has been logged. Try again or reach out if the problem continues.
      </p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}

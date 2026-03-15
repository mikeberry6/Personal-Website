import type { ReactNode } from 'react';

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <main id="main" className="flex-1">
        {children}
      </main>
    </div>
  );
}

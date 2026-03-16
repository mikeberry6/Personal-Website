import './globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import AuthGate from './auth-gate';

export const metadata: Metadata = {
  title: 'Personal Website',
  description: 'Personal website'
};

function ThemeScript() {
  const script = `(() => {
  const storageKey = 'theme';
  const root = document.documentElement;
  try {
    const stored = window.localStorage.getItem(storageKey);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored === 'light' || stored === 'dark' ? stored : systemPrefersDark ? 'dark' : 'light';
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  } catch (error) {
    root.dataset.theme = 'light';
    root.style.colorScheme = 'light';
  }
})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className="antialiased"
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <AuthGate>{children}</AuthGate>
      </body>
    </html>
  );
}

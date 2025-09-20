import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import type { ReactNode } from 'react';

import { Analytics } from '@/lib/analytics';
import { defaultMetadata } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-sans' });

export const metadata: Metadata = defaultMetadata;

function ThemeScript({ nonce }: { nonce?: string }) {
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

  return <script nonce={nonce} dangerouslySetInnerHTML={{ __html: script }} />;
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const nonce = headers().get('x-csp-nonce') ?? undefined;

  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" />
        <ThemeScript nonce={nonce} />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

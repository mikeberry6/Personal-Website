import type { ReactNode } from 'react';

import { getDictionary } from '@/lib/i18n';

import { Footer } from '../components/ui/footer';
import { Navigation } from '../components/ui/navigation';

export default async function EnglishLayout({ children }: { children: ReactNode }) {
  const dictionary = await getDictionary('en');

  const navLinks = [
    { href: '/', label: dictionary.nav.home },
    { href: '/about', label: dictionary.nav.about },
    { href: '/pricing', label: dictionary.nav.pricing },
    { href: '/blog', label: dictionary.nav.blog },
    { href: '/contact', label: dictionary.nav.contact }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation
        links={navLinks}
        cta={{ href: '/contact', label: dictionary.hero.primaryCta }}
        localeSwitch={{ href: '/es', label: dictionary.nav.switchLocale }}
        homeHref="/"
      />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

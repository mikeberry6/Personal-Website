import type { ReactNode } from 'react';

import { getDictionary } from '@/lib/i18n';

import { Footer } from '../components/ui/footer';
import { Navigation } from '../components/ui/navigation';

export default async function SpanishLayout({ children }: { children: ReactNode }) {
  const dictionary = await getDictionary('es');

  const navLinks = [
    { href: '/es', label: dictionary.nav.home },
    { href: '/about', label: dictionary.nav.about },
    { href: '/es/pricing', label: dictionary.nav.pricing },
    { href: '/blog', label: dictionary.nav.blog },
    { href: '/es/contact', label: dictionary.nav.contact }
  ];

  return (
    <div className="flex min-h-screen flex-col" lang="es">
      <Navigation
        links={navLinks}
        cta={{ href: '/es/contact', label: dictionary.hero.primaryCta }}
        localeSwitch={{ href: '/', label: dictionary.nav.switchLocale }}
        homeHref="/es"
      />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

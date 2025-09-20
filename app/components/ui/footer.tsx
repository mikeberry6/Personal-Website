import Link from 'next/link';

import { Container } from './container';

const footerLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/blog', label: 'Blog' }
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/80">
      <Container className="flex flex-col items-center justify-between gap-6 py-12 text-sm text-foreground/70 md:flex-row">
        <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
          <div className="flex items-center gap-2 text-base font-semibold text-foreground">
            <span aria-hidden="true">⚡</span> Acme
          </div>
          <p className="max-w-sm">
            We help product organizations launch faster, with governance built for scale.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-4">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-foreground/50">© {new Date().getFullYear()} Acme. All rights reserved.</p>
      </Container>
    </footer>
  );
}

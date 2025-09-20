'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { ButtonLink } from './button';
import { Container } from './container';
import { ThemeToggle } from './theme-toggle';

type NavLink = {
  href: string;
  label: string;
};

type NavigationProps = {
  links: NavLink[];
  cta: NavLink;
  localeSwitch: NavLink;
  homeHref?: string;
};

export function Navigation({ links, cta, localeSwitch, homeHref = '/' }: NavigationProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link href={homeHref} className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <span aria-hidden="true" className="text-xl">
              ⚡
            </span>
            Acme
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-medium md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  pathname === link.href ? 'text-primary' : 'text-foreground/80'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={localeSwitch.href}
            className="hidden text-sm font-medium text-foreground/70 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex"
          >
            {localeSwitch.label}
          </Link>
          <ThemeToggle />
          <div className="hidden md:block">
            <ButtonLink href={cta.href} size="sm">
              {cta.label}
            </ButtonLink>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background/80 p-2 text-foreground shadow-sm transition hover:bg-background/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
            onClick={handleToggle}
            aria-expanded={open}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>
      <div
        className={cn(
          'md:hidden',
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        )}
      >
        <Container className="pb-4">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-3 rounded-2xl border border-border bg-background/95 p-4 shadow-lg">
            {links.map((link) => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={handleClose}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/90 transition hover:bg-foreground/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={localeSwitch.href}
              onClick={handleClose}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/90 transition hover:bg-foreground/5"
            >
              {localeSwitch.label}
            </Link>
            <ButtonLink href={cta.href} onClick={handleClose} className="w-full justify-center">
              {cta.label}
            </ButtonLink>
          </nav>
        </Container>
      </div>
    </header>
  );
}

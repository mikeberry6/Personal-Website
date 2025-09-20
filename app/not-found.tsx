import Link from 'next/link';

import { ButtonLink } from '@/app/components/ui/button';
import { Container } from '@/app/components/ui/container';
import { Section } from '@/app/components/ui/section';

export default function NotFound() {
  return (
    <Section>
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">404</span>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">This page is off the roadmap</h1>
        <p className="max-w-xl text-sm text-foreground/70">
          We can’t find what you are looking for. Explore our latest thinking or get in touch so we can point you
          in the right direction.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/" size="lg">
            Go home
          </ButtonLink>
          <Link href="/contact" className="text-sm font-semibold text-primary hover:text-primary/80">
            Contact support →
          </Link>
        </div>
      </Container>
    </Section>
  );
}

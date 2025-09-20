import Image from 'next/image';

import { Badge } from '@/app/components/ui/badge';
import { ButtonLink } from '@/app/components/ui/button';
import { Container } from '@/app/components/ui/container';

export type HeroContent = {
  badge: string;
  heading: string;
  subheading: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  clients: string;
};

export function Hero({ content }: { content: HeroContent }) {
  return (
    <section className="overflow-hidden pb-16 pt-20 sm:pt-24">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div className="space-y-8">
          <Badge>{content.badge}</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {content.heading}
          </h1>
          <p className="text-lg text-foreground/70 sm:text-xl">{content.subheading}</p>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href={content.primaryCta.href} size="lg">
              {content.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={content.secondaryCta.href} size="lg" variant="ghost">
              {content.secondaryCta.label}
            </ButtonLink>
          </div>
          <p className="text-sm font-medium uppercase tracking-wide text-foreground/60">
            {content.clients}
          </p>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Product managers collaborating around a planning board"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}

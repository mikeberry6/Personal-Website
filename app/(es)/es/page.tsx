import type { Metadata } from 'next';

import { CallToAction } from '@/app/components/site/cta';
import { FAQ } from '@/app/components/site/faq';
import { FeatureGrid } from '@/app/components/site/feature-grid';
import { Hero } from '@/app/components/site/hero';
import { Logos } from '@/app/components/site/logos';
import { Testimonials } from '@/app/components/site/testimonials';
import { Section } from '@/app/components/ui/section';
import { getDictionary } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Acme — Software diseñado para entregar',
  description: 'Plataforma y servicios para equipos que necesitan entregar resultados sin perder control.',
  path: '/es',
  locale: 'es_ES'
});

export default async function SpanishHome() {
  const dictionary = await getDictionary('es');

  const heroContent = {
    badge: dictionary.hero.badge,
    heading: dictionary.hero.heading,
    subheading: dictionary.hero.subheading,
    primaryCta: { href: '/es/contact', label: dictionary.hero.primaryCta },
    secondaryCta: { href: '/about', label: dictionary.hero.secondaryCta },
    clients: dictionary.hero.clients
  } as const;

  const ctaContent = {
    title: dictionary.cta.title,
    description: dictionary.cta.description,
    primary: { href: '/es/contact', label: dictionary.cta.primary },
    secondary: { href: '/blog', label: dictionary.cta.secondary }
  } as const;

  return (
    <>
      <Hero content={heroContent} />
      <Logos logos={dictionary.logos.items} label={dictionary.logos.label} />
      <FeatureGrid
        title={dictionary.features.title}
        description={dictionary.features.description}
        items={dictionary.features.items}
      />
      <Testimonials title={dictionary.testimonials.title} items={dictionary.testimonials.items} />
      <FAQ items={dictionary.pricing.faq} />
      <CallToAction content={ctaContent} />
      <Section className="pt-0">
        <p className="mx-auto max-w-3xl px-4 text-sm text-foreground/60">
          Contáctanos para conocer implementaciones regionales, soporte multilingüe y referencias en tu industria.
        </p>
      </Section>
    </>
  );
}

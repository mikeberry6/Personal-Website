import type { Metadata } from 'next';

import { FAQ } from '@/app/components/site/faq';
import { PricingTable } from '@/app/components/site/pricing-table';
import { Container } from '@/app/components/ui/container';
import { Section } from '@/app/components/ui/section';
import { getDictionary } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Planes y precios · Acme',
  description: 'Planes anuales con implementación, habilitación y asesoría continua incluida.',
  path: '/es/pricing',
  locale: 'es_ES'
});

export default async function SpanishPricing() {
  const dictionary = await getDictionary('es');

  return (
    <>
      <PricingTable
        title={dictionary.pricing.title}
        subtitle={dictionary.pricing.subtitle}
        plans={dictionary.pricing.plans}
        contactPath="/es/contact"
      />
      <Section>
        <Container className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Preguntas frecuentes</h2>
          <p className="text-sm text-foreground/70">
            Ajustamos cada implementación para que encaje con tu gobierno y cadencias de entrega.
          </p>
        </Container>
      </Section>
      <FAQ items={dictionary.pricing.faq} />
    </>
  );
}

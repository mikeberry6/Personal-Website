import type { Metadata } from 'next';

import { FAQ } from '@/app/components/site/faq';
import { PricingTable } from '@/app/components/site/pricing-table';
import { Container } from '@/app/components/ui/container';
import { Section } from '@/app/components/ui/section';
import { getDictionary } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('en');
  return buildMetadata({
    title: `Pricing · ${dictionary.meta.title}`,
    description: dictionary.pricing.subtitle,
    path: '/pricing'
  });
}

export default async function PricingPage() {
  const dictionary = await getDictionary('en');

  return (
    <>
      <PricingTable
        title={dictionary.pricing.title}
        subtitle={dictionary.pricing.subtitle}
        plans={dictionary.pricing.plans}
      />
      <Section>
        <Container className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Frequently asked questions</h2>
          <p className="text-sm text-foreground/70">
            We partner closely with teams to ensure Acme fits your operating model.
          </p>
        </Container>
      </Section>
      <FAQ items={dictionary.pricing.faq} />
    </>
  );
}

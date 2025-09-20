import type { Metadata } from 'next';

import { ContactForm } from '@/app/components/site/contact-form';
import { Section } from '@/app/components/ui/section';
import { getDictionary } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contacto · Acme',
  description: 'Comparte los objetivos de tu equipo y coordinamos una sesión en un día hábil.',
  path: '/es/contact',
  locale: 'es_ES'
});

export default async function SpanishContact() {
  const dictionary = await getDictionary('es');

  return (
    <Section>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ContactForm labels={dictionary.contact} />
      </div>
    </Section>
  );
}

import type { Metadata } from 'next';

import { ContactForm } from '@/app/components/site/contact-form';
import { Section } from '@/app/components/ui/section';
import { getDictionary } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary('en');
  return buildMetadata({
    title: `Contact · ${dictionary.meta.title}`,
    description: dictionary.contact.subtitle,
    path: '/contact'
  });
}

export default async function ContactPage() {
  const dictionary = await getDictionary('en');

  return (
    <Section>
      <div className="mx-auto grid max-w-5xl gap-12 px-4 sm:px-6 lg:grid-cols-[2fr,1fr] lg:px-8">
        <ContactForm labels={dictionary.contact} />
        <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/70 p-6 shadow-sm">
          <div>
            <h2 className="text-lg font-semibold text-foreground">How we partner</h2>
            <p className="mt-2 text-sm text-foreground/70">
              Engagements start with an in-depth discovery. We scope value, timeline, and success metrics
              together before we ship a single ticket.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/60">Availability</h3>
            <p className="mt-2 text-sm text-foreground/70">New client onboarding slots open every Monday.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/60">Prefer email?</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Reach us at <a href="mailto:hello@acme.com">hello@acme.com</a> and we will respond within 24 hours.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}

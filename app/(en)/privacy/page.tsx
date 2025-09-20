import type { Metadata } from 'next';

import { Container } from '@/app/components/ui/container';
import { Section } from '@/app/components/ui/section';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy policy',
  description: 'Learn how Acme collects, uses, and protects your personal information.',
  path: '/privacy'
});

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="space-y-6 text-sm leading-7 text-foreground/80">
        <h1 className="text-3xl font-semibold text-foreground">Privacy policy</h1>
        <p>
          We collect only the data required to operate and improve our services. This includes contact details
          you share with us, product usage metrics, and limited technical diagnostics. We never sell your data.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Data collection</h2>
        <p>
          Product analytics are anonymized and aggregated. Access is restricted to authorized team members and
          retained for no longer than 18 months. Customer content remains your property.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Security</h2>
        <p>
          Acme follows industry best practices including encryption in transit and at rest, role-based access,
          and regular third-party audits. Report incidents to security@acme.com.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Your choices</h2>
        <p>
          Contact privacy@acme.com to request data export or deletion. We respond to verified requests within 30
          days.
        </p>
      </Container>
    </Section>
  );
}

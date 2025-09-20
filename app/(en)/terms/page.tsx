import type { Metadata } from 'next';

import { Container } from '@/app/components/ui/container';
import { Section } from '@/app/components/ui/section';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of service',
  description: 'Understand the terms that govern use of the Acme platform and services.',
  path: '/terms'
});

export default function TermsPage() {
  return (
    <Section>
      <Container className="space-y-6 text-sm leading-7 text-foreground/80">
        <h1 className="text-3xl font-semibold text-foreground">Terms of service</h1>
        <p>
          By using Acme you agree to these terms. We grant you a non-transferable license to access the platform
          for the duration of your subscription. You are responsible for maintaining account credentials and
          complying with applicable laws.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Acceptable use</h2>
        <p>
          You may not misuse the platform, attempt unauthorized access, or disrupt other customers. We reserve the
          right to suspend accounts that violate these terms.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Service availability</h2>
        <p>
          We target 99.9% uptime. Planned maintenance is announced in advance. Credits are provided if availability
          falls below the SLA in your agreement.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Liability</h2>
        <p>
          To the extent permitted by law, our liability is limited to the fees paid for the current subscription
          term. Neither party is liable for consequential damages.
        </p>
      </Container>
    </Section>
  );
}

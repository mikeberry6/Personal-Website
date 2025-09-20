import { Check } from 'lucide-react';

import { ButtonLink } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Container } from '@/app/components/ui/container';
import { Section } from '@/app/components/ui/section';

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  features: string[];
  featured?: boolean;
};

type PricingTableProps = {
  title: string;
  subtitle: string;
  plans: Plan[];
  contactPath?: string;
};

export function PricingTable({ title, subtitle, plans, contactPath = '/contact' }: PricingTableProps) {
  return (
    <Section id="pricing">
      <Container className="space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
          <p className="text-lg text-foreground/70">{subtitle}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex h-full flex-col gap-6 p-6 ${plan.featured ? 'border-primary shadow-glow' : ''}`}
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-foreground/60">{plan.description}</p>
              </div>
              <div className="space-y-1">
                <span className="text-3xl font-semibold text-foreground">{plan.price}</span>
                <span className="block text-xs uppercase tracking-wider text-foreground/50">{plan.period}</span>
              </div>
              <ButtonLink href={contactPath} variant={plan.featured ? 'primary' : 'ghost'} className="justify-center">
                {plan.cta}
              </ButtonLink>
              <ul className="mt-4 space-y-3 text-sm text-foreground/70">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

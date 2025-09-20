import { BarChart3, GitBranch, Rocket, ShieldCheck } from 'lucide-react';

import { Card } from '@/app/components/ui/card';
import { Container } from '@/app/components/ui/container';
import { Section } from '@/app/components/ui/section';

const icons = {
  Rocket,
  GitBranch,
  BarChart3,
  ShieldCheck
};

type Feature = {
  name: string;
  description: string;
  icon: keyof typeof icons;
};

type FeatureGridProps = {
  title: string;
  description: string;
  items: Feature[];
};

export function FeatureGrid({ title, description, items }: FeatureGridProps) {
  return (
    <Section>
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
          <p className="text-lg text-foreground/70">{description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((feature) => {
            const Icon = icons[feature.icon] ?? Rocket;
            return (
              <Card key={feature.name} className="h-full p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{feature.name}</h3>
                <p className="mt-3 text-sm text-foreground/70">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

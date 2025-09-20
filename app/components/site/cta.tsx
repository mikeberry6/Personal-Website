import { ButtonLink } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Container } from '@/app/components/ui/container';
import { Section } from '@/app/components/ui/section';

type CtaContent = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export function CallToAction({ content }: { content: CtaContent }) {
  return (
    <Section>
      <Container>
        <Card className="flex flex-col gap-6 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 p-10 text-center shadow-lg sm:p-12">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{content.title}</h2>
          <p className="mx-auto max-w-2xl text-base text-foreground/70">{content.description}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={content.primary.href} size="lg">
              {content.primary.label}
            </ButtonLink>
            <ButtonLink href={content.secondary.href} size="lg" variant="ghost">
              {content.secondary.label}
            </ButtonLink>
          </div>
        </Card>
      </Container>
    </Section>
  );
}

import { Container } from '@/app/components/ui/container';
import { Section } from '@/app/components/ui/section';

export function Logos({ logos, label }: { logos: string[]; label?: string }) {
  const displayLabel = label ?? 'Trusted by teams worldwide';

  return (
    <Section className="py-12">
      <Container>
        {logos.length > 0 ? (
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
            {displayLabel}
          </p>
        ) : null}
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-8 text-foreground/50 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo) => (
            <span key={logo} className="text-base font-semibold">
              {logo}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}

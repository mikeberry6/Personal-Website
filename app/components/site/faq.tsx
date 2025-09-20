import { Container } from '@/app/components/ui/container';
import { Section } from '@/app/components/ui/section';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items: FaqItem[];
};

export function FAQ({ items }: FaqProps) {
  return (
    <Section>
      <Container className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-border/60 bg-background/60 p-6 shadow-sm"
          >
            <summary className="cursor-pointer text-lg font-semibold text-foreground outline-none transition group-open:text-primary">
              {item.question}
            </summary>
            <p className="mt-3 text-sm text-foreground/70">{item.answer}</p>
          </details>
        ))}
      </Container>
    </Section>
  );
}

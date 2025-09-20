import { Card } from '@/app/components/ui/card';
import { Container } from '@/app/components/ui/container';
import { Section } from '@/app/components/ui/section';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

type TestimonialsProps = {
  title: string;
  items: Testimonial[];
};

export function Testimonials({ title, items }: TestimonialsProps) {
  return (
    <Section className="bg-secondary/5">
      <Container className="space-y-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.author} className="flex h-full flex-col gap-4 p-6">
              <p className="text-sm text-foreground/80">“{item.quote}”</p>
              <div className="mt-auto text-sm font-semibold text-foreground">
                {item.author}
                <span className="block text-xs font-normal text-foreground/60">{item.role}</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

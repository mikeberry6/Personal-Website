import { Card } from '@/app/components/ui/card';

export type Value = {
  title: string;
  description: string;
};

export function Values({ items }: { items: Value[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((value) => (
        <Card key={value.title} className="h-full p-6">
          <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
          <p className="mt-2 text-sm text-foreground/70">{value.description}</p>
        </Card>
      ))}
    </div>
  );
}

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-8 border-l border-border/60 pl-6">
      {items.map((item) => (
        <li key={item.year} className="space-y-2">
          <span className="absolute -left-3 mt-1 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.year}</p>
          <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
          <p className="text-sm text-foreground/70">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

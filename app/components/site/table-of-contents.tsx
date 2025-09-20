'use client';

import { useEffect, useState } from 'react';

import type { Heading } from '@/lib/mdx';

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Table of contents" className="sticky top-24 hidden h-fit max-w-xs rounded-2xl border border-border/60 bg-background/80 p-6 text-sm shadow-sm lg:block">
      <p className="text-xs font-semibold uppercase tracking-wide text-foreground/60">On this page</p>
      <ul className="mt-4 space-y-3">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? 'ml-4' : ''}>
            <a
              href={`#${heading.id}`}
              className={
                activeId === heading.id
                  ? 'text-primary'
                  : 'text-foreground/70 transition hover:text-primary'
              }
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import Image from 'next/image';
import Link from 'next/link';

import { Card } from '@/app/components/ui/card';
import { formatDate } from '@/lib/utils';

export type PostCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  cover: string;
};

export function PostCard({ slug, title, excerpt, date, readingTime, cover }: PostCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <Link href={`/blog/${slug}`} className="relative block aspect-[3/2] w-full overflow-hidden">
        <Image
          src={cover}
          alt={`Cover art for ${title}`}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 400px, 100vw"
        />
        <span className="sr-only">Read {title}</span>
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-foreground/60">
          <span>{formatDate(date)}</span>
          <span aria-hidden="true">•</span>
          <span>{readingTime}</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">
            <Link href={`/blog/${slug}`} className="transition hover:text-primary">
              {title}
            </Link>
          </h3>
          <p className="text-sm text-foreground/70">{excerpt}</p>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="mt-auto inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80"
          aria-label={`Read ${title}`}
        >
          Read story →
        </Link>
      </div>
    </Card>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

import { TableOfContents } from '@/app/components/site/table-of-contents';
import { MDXContent } from '@/app/components/site/mdx-content';
import { Container } from '@/app/components/ui/container';
import { Section } from '@/app/components/ui/section';
import { getAdjacentPosts, getAllPostSlugs, getPostBySlug } from '@/lib/mdx';
import { buildMetadata, blogPostingJsonLd } from '@/lib/seo';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug).catch(() => null);
  if (!post) {
    return buildMetadata({
      title: 'Post not found',
      description: 'The requested post could not be located.',
      path: `/blog/${params.slug}`
    });
  }

  return buildMetadata({
    title: `${post.frontmatter.title} · Acme`,
    description: post.frontmatter.excerpt,
    path: `/blog/${params.slug}`,
    image: post.frontmatter.cover,
    type: 'article'
  });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const adjacent = await getAdjacentPosts(params.slug);
  const nonce = headers().get('x-csp-nonce') ?? undefined;
  const jsonLd = blogPostingJsonLd({
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    publishedTime: post.frontmatter.date,
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.acme.dev'}/blog/${params.slug}`,
    image: post.frontmatter.cover
  });

  return (
    <>
      <script type="application/ld+json" nonce={nonce} dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[2fr,1fr]">
          <article className="space-y-8">
            <div className="space-y-4">
              <Link href="/blog" className="text-sm font-semibold text-primary hover:text-primary/80">
                ← Back to blog
              </Link>
              <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">{post.frontmatter.title}</h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/60">
                <span>{formatDate(post.frontmatter.date)}</span>
                <span aria-hidden="true">•</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border">
              <Image
                src={post.frontmatter.cover}
                alt={`Cover image for ${post.frontmatter.title}`}
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover"
              />
            </div>
            <MDXContent>{post.content}</MDXContent>
            <nav className="flex items-center justify-between border-t border-border/60 pt-6 text-sm">
              {adjacent.previous ? (
                <Link href={`/blog/${adjacent.previous.slug}`} className="text-primary hover:text-primary/80">
                  ← {adjacent.previous.frontmatter.title}
                </Link>
              ) : (
                <span />
              )}
              {adjacent.next ? (
                <Link href={`/blog/${adjacent.next.slug}`} className="text-primary hover:text-primary/80">
                  {adjacent.next.frontmatter.title} →
                </Link>
              ) : (
                <span />
              )}
            </nav>
          </article>
          <TableOfContents headings={post.headings} />
        </Container>
      </Section>
    </>
  );
}

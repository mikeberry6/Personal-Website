import type { Metadata } from 'next';

import { PostCard } from '@/app/components/site/post-card';
import { Container } from '@/app/components/ui/container';
import { Section } from '@/app/components/ui/section';
import { getAllPosts } from '@/lib/mdx';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Acme blog',
  description: 'Articles and resources on building resilient product delivery organizations.',
  path: '/blog'
});

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Section>
      <Container className="space-y-8">
        <div className="space-y-3 text-center">
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">Ideas that ship</h1>
          <p className="mx-auto max-w-2xl text-lg text-foreground/70">
            Practical guidance on orchestrating complex software initiatives with clarity and confidence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.frontmatter.title}
              excerpt={post.frontmatter.excerpt}
              date={post.frontmatter.date}
              readingTime={post.readingTime}
              cover={post.frontmatter.cover}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

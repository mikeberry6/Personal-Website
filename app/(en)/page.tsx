import { headers } from 'next/headers';

import { CallToAction } from '@/app/components/site/cta';
import { FAQ } from '@/app/components/site/faq';
import { FeatureGrid } from '@/app/components/site/feature-grid';
import { Hero } from '@/app/components/site/hero';
import { Logos } from '@/app/components/site/logos';
import { PostCard } from '@/app/components/site/post-card';
import { Testimonials } from '@/app/components/site/testimonials';
import { Container } from '@/app/components/ui/container';
import { Section } from '@/app/components/ui/section';
import { getAllPosts } from '@/lib/mdx';
import { getDictionary } from '@/lib/i18n';
import { organizationJsonLd } from '@/lib/seo';

export default async function HomePage() {
  const [dictionary, posts] = await Promise.all([getDictionary('en'), getAllPosts()]);
  const nonce = headers().get('x-csp-nonce') ?? undefined;

  const heroContent = {
    badge: dictionary.hero.badge,
    heading: dictionary.hero.heading,
    subheading: dictionary.hero.subheading,
    primaryCta: { href: '/contact', label: dictionary.hero.primaryCta },
    secondaryCta: { href: '/about', label: dictionary.hero.secondaryCta },
    clients: dictionary.hero.clients
  } as const;

  const ctaContent = {
    title: dictionary.cta.title,
    description: dictionary.cta.description,
    primary: { href: '/contact', label: dictionary.cta.primary },
    secondary: { href: '/blog', label: dictionary.cta.secondary }
  } as const;

  const featuredPosts = posts.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <Hero content={heroContent} />
      <Logos logos={dictionary.logos.items} label={dictionary.logos.label} />
      <FeatureGrid
        title={dictionary.features.title}
        description={dictionary.features.description}
        items={dictionary.features.items}
      />
      <Testimonials title={dictionary.testimonials.title} items={dictionary.testimonials.items} />
      <PricingPreview title={dictionary.pricing.title} subtitle={dictionary.pricing.subtitle} />
      <Section>
        <Container className="space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Latest thinking</h2>
              <p className="text-sm text-foreground/70">
                Insights, playbooks, and case studies for modern product teams.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
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
      <FAQ items={dictionary.pricing.faq} />
      <CallToAction content={ctaContent} />
    </>
  );
}

function PricingPreview({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Section className="bg-secondary/5">
      <Container className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
        <p className="text-lg text-foreground/70">{subtitle}</p>
        <div>
          <a
            href="/pricing"
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80"
          >
            Explore pricing →
          </a>
        </div>
      </Container>
    </Section>
  );
}

import type { MetadataRoute } from 'next';

import { getAllPosts } from '@/lib/mdx';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.acme.dev';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const staticRoutes = ['', '/about', '/pricing', '/contact', '/privacy', '/terms', '/blog', '/es', '/es/pricing', '/es/contact'].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date()
    })
  );

  const blogRoutes = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date)
  }));

  return [...staticRoutes, ...blogRoutes];
}

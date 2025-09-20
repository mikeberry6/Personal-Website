import fs from 'node:fs/promises';
import path from 'node:path';

import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { mdxComponents } from '@/app/components/site/mdx-content';
import { readingTime, slugify } from './utils';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export type PostFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  cover: string;
};

export type Heading = {
  id: string;
  text: string;
  level: number;
};

export type PostListItem = {
  slug: string;
  frontmatter: PostFrontmatter;
  readingTime: string;
};

export async function getAllPostSlugs(): Promise<string[]> {
  const entries = await fs.readdir(BLOG_DIR);
  return entries.filter((file) => file.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ''));
}

export async function getAllPosts(): Promise<PostListItem[]> {
  const slugs = await getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const raw = await fs.readFile(path.join(BLOG_DIR, `${slug}.mdx`), 'utf8');
      const { data, content } = matter(raw);
      const frontmatter = data as PostFrontmatter;

      return {
        slug,
        frontmatter,
        readingTime: readingTime(content)
      } satisfies PostListItem;
    })
  );

  return posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const source = await fs.readFile(path.join(BLOG_DIR, `${slug}.mdx`), 'utf8');
  const { content, data } = matter(source);
  const frontmatter = data as PostFrontmatter;

  const headings = extractHeadings(content);

  const mdx = await compileMDX<{ frontmatter: PostFrontmatter }>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                className: ['anchor']
              }
            }
          ],
          [
            rehypePrettyCode,
            {
              theme: {
                light: 'github-light',
                dark: 'github-dark'
              },
              keepBackground: false
            }
          ]
        ]
      }
    }
  });

  return {
    slug,
    frontmatter,
    content: mdx.content,
    readingTime: readingTime(content),
    headings
  };
}

export async function getAdjacentPosts(slug: string) {
  const posts = await getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    previous: index > 0 ? posts[index - 1] : null,
    next: index < posts.length - 1 ? posts[index + 1] : null
  };
}

function extractHeadings(content: string): Heading[] {
  return content
    .split('\n')
    .filter((line) => line.startsWith('#'))
    .map((line) => {
      const depth = line.match(/^#+/)?.[0].length ?? 1;
      const text = line.replace(/^#+\s*/, '').trim();
      return {
        id: slugify(text),
        text,
        level: depth
      } satisfies Heading;
    })
    .filter((heading) => heading.level > 1);
}

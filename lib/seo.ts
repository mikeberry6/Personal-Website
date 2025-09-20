import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.acme.dev';

export const siteConfig = {
  name: 'Acme',
  title: 'Acme — Purpose-built software that ships',
  description:
    'Acme helps modern product organizations deliver strategic software outcomes without compromising governance.',
  url: baseUrl,
  twitter: '@acme',
  keywords: [
    'product delivery platform',
    'software development lifecycle',
    'portfolio management',
    'engineering analytics'
  ]
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.title,
    template: '%s · Acme'
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: 'Acme' }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: baseUrl,
    siteName: siteConfig.name,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteConfig.twitter,
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/opengraph-image']
  },
  alternates: {
    canonical: baseUrl
  }
};

export function buildMetadata({
  title,
  description,
  path,
  image,
  locale = 'en_US',
  type = 'website'
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  locale?: string;
  type?: 'website' | 'article';
}): Metadata {
  const url = path ? new URL(path, baseUrl).toString() : baseUrl;
  const ogImage = image ?? '/opengraph-image';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale,
      type,
      images: [{ url: ogImage, width: 1200, height: 630 }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    },
    alternates: {
      canonical: url
    }
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Acme',
    url: baseUrl,
    logo: `${baseUrl}/icon.svg`,
    sameAs: ['https://www.linkedin.com/company/acme', 'https://twitter.com/acme']
  };
}

export function blogPostingJsonLd({
  title,
  description,
  publishedTime,
  modifiedTime,
  url,
  image
}: {
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime?: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: image ? [image] : [`${baseUrl}/opengraph-image`],
    datePublished: publishedTime,
    dateModified: modifiedTime ?? publishedTime,
    url,
    mainEntityOfPage: url,
    author: {
      '@type': 'Organization',
      name: 'Acme'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Acme',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/icon.svg`
      }
    }
  };
}

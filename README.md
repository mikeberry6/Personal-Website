# Acme Marketing Site

A production-grade marketing website for Acme, built with Next.js 14, TypeScript, and Tailwind CSS. The site features multi-language support, MDX-powered content, API-backed forms, automated testing, accessibility-first components, and deployment assets.

## Features

- **Next.js App Router** with type-safe routing and optimized metadata per route.
- **Responsive design** powered by Tailwind CSS, CSS variables, and a persisted dark/light theme toggle.
- **Accessible UI** components (buttons, cards, alerts, navigation, skip link) with keyboard and screen reader support.
- **MDX blog system** using `next-mdx-remote`, Shiki highlighting, TOC generation, and JSON-LD metadata.
- **Contact form API** validated with Zod, honeypot protection, and in-memory rate limiting.
- **Internationalization** with English default routes plus `/es` localized home, pricing, and contact pages.
- **Testing suite** including Vitest unit tests and Playwright end-to-end coverage for critical flows.
- **CI-ready** linting, formatting, type checking, Lighthouse automation, and Docker deployment.

## Getting Started

### Prerequisites

- Node.js 20 (see `.nvmrc` for the exact version)
- pnpm 8.x (corepack is enabled in the project)

> **Assumption:** The environment running `pnpm install` has access to the npm registry through the configured proxy. If the proxy blocks registry traffic, adjust the npm configuration before installing dependencies.

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Visit <http://localhost:3000> to explore the site.

### Build & Start

```bash
pnpm build
pnpm start
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm lint` | Run ESLint with accessibility, import, and Tailwind rules. |
| `pnpm format` | Format codebase with Prettier. |
| `pnpm typecheck` | Verify TypeScript types without emitting files. |
| `pnpm test:unit` | Execute Vitest unit tests (jsdom). |
| `pnpm test:e2e` | Run Playwright end-to-end tests (auto-starts dev server). |
| `pnpm test` | Run unit tests followed by e2e tests. |
| `pnpm generate:lighthouse` | Build and analyze the home page with Lighthouse, saving `reports/lh.html`. |

## Environment Variables

Configure as needed via `.env.local`:

- `NEXT_PUBLIC_SITE_URL` – Base URL for metadata, sitemap, and structured data (default: `https://www.acme.dev`).
- `NEXT_PUBLIC_ANALYTICS_ID` – Optional analytics identifier to enable the stub analytics snippet.

## Content Authoring

- Blog posts live in `content/blog/*.mdx`. Each file requires frontmatter with `title`, `date`, `excerpt`, `tags`, and `cover` image.
- Components such as callouts, code blocks, and links are automatically styled via MDX component mapping.
- Add new translations in `messages/en.json` and `messages/es.json`; use the same key paths for both locales.

## Testing

```bash
pnpm lint
pnpm typecheck
pnpm test
```

Playwright will install required browsers automatically on first run (skipped in CI).

## CI/CD

A GitHub Actions workflow (`.github/workflows/ci.yml`) installs dependencies, lints, type-checks, runs unit and e2e tests, builds the app, and uploads the Lighthouse report artifact.

## Docker

Build and run the production image:

```bash
docker build -t acme-site .
docker run -p 3000:3000 acme-site
```

## Lighthouse Report

Run `pnpm build && pnpm generate:lighthouse` to produce `reports/lh.html` for the home page. The script spins up the production server, executes Lighthouse in headless Chrome, and stores the report locally.

## Project Structure Highlights

- `app/` – App Router pages, layouts, API routes, and metadata utilities.
- `app/components/` – UI primitives and marketing-specific components.
- `content/blog/` – MDX articles.
- `lib/` – Utilities for SEO, analytics, i18n, rate limiting, and MDX processing.
- `tests/` – Unit tests (`Vitest`) and e2e tests (`Playwright`).
- `public/` – Manifest, icons, and static assets.

## Deployment Notes

- Production builds expect `NEXT_PUBLIC_SITE_URL` to match the deployed domain for accurate canonical URLs.
- The Docker image runs `pnpm start` (Next.js production server) on port 3000. Ensure upstream reverse proxies pass the `x-forwarded-for` header for accurate rate limiting.

Enjoy shipping with Acme! ⚡

# syntax=docker/dockerfile:1
FROM node:20-alpine AS base
ENV NODE_ENV=production
WORKDIR /app
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM deps AS builder
COPY . .
RUN pnpm build

FROM base AS runner
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY package.json pnpm-lock.yaml ./
EXPOSE 3000
CMD ["pnpm", "start"]

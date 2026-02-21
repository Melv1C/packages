# ============================================
# Base: Node + Bun on Alpine
# ============================================
FROM node:22-alpine AS base
RUN apk update && apk add --no-cache libc6-compat
# Install Bun (used as package manager)
RUN npm i -g bun@1.3.9
WORKDIR /app

# ============================================
# Stage 1: Prune the monorepo for "docs"
# ============================================
FROM base AS prune
RUN npm i -g turbo@^2
COPY . .
RUN turbo prune docs --docker

# ============================================
# Stage 2: Install dependencies
# ============================================
FROM base AS deps
# Copy pruned package.json files and lockfile (changes less often → better caching)
COPY --from=prune /app/out/json/ .
# Install deps with Bun, skip postinstall (fumadocs-mdx needs source files)
RUN bun install --ignore-scripts

# ============================================
# Stage 3: Build
# ============================================
FROM base AS build
# Copy installed node_modules
COPY --from=deps /app/ .
# Copy full pruned source
COPY --from=prune /app/out/full/ .
# Run fumadocs-mdx codegen (the postinstall that was skipped)
RUN cd apps/docs && npx fumadocs-mdx
# Build ui-core first (docs depends on it), then build docs
RUN npx turbo run build --filter=docs

# ============================================
# Stage 4: Serve static SPA with nginx
# ============================================
FROM nginx:stable-alpine AS runner
COPY apps/docs/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/apps/docs/build/client /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]

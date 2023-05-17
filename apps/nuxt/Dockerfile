FROM node:20.2.0-alpine3.16 AS builder

ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

WORKDIR /app
COPY . .

# Note: Linux builds of `turbo` link against `glibc`. For Alpine Docker environments, you will need to ensure libc6-compat is installed.
RUN apk add --no-cache libc6-compat
RUN corepack enable pnpm &&\
    echo "store-dir=./.store-dir" >> .npmrc &&\
    echo "strict-peer-dependencies=false" >> .npmrc &&\
    echo "shamefully-hoist=true" >> .npmrc &&\
    pnpm dlx turbo prune --scope="nuxt-app" --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:20.2.0-alpine3.16 AS installer

WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/.npmrc .npmrc
COPY --from=builder /app/alias.ts alias.ts
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

# Note: Linux builds of `turbo` link against `glibc`. For Alpine Docker environments, you will need to ensure libc6-compat is installed.
RUN apk add --no-cache libc6-compat
RUN corepack enable pnpm &&\
    pnpm install --ignore-scripts &&\
    rm -f .npmrc

COPY --from=builder app/out/full/ .
COPY turbo.json turbo.json

RUN pnpm build

FROM node:20.2.0-alpine3.16 AS runner

WORKDIR /app

USER node:node

COPY --from=installer /app/apps/nuxt/nuxt.config.ts .
COPY --from=installer /app/apps/nuxt/package.json .

COPY --from=installer --chown=node:node /app/apps/nuxt/.output/server ./server
COPY --from=installer --chown=node:node /app/apps/nuxt/.output/public ./public
COPY --from=installer --chown=node:node /app/apps/nuxt/.output/nitro.json .

EXPOSE 3000

CMD ["node", "server/index.mjs"]

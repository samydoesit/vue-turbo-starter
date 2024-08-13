FROM node:20.2.0-alpine3.16 AS builder

WORKDIR /app
COPY . .

# Note: Linux builds of `turbo` link against `glibc`. For Alpine Docker environments, you will need to ensure libc6-compat is installed.
RUN apk add --no-cache libc6-compat
RUN corepack enable pnpm &&\
    echo "store-dir=./.store-dir" >> .npmrc &&\
    echo "strict-peer-dependencies=false" >> .npmrc &&\
    echo "shamefully-hoist=true" >> .npmrc &&\
    pnpm dlx turbo prune --scope histoire-app --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:20.2.0-alpine3.16 AS installer

ENV NODE_OPTIONS="--max_old_space_size=4096"

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
    PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 pnpm install --ignore-scripts &&\
    rm -f .npmrc

COPY --from=builder app/out/full/ .
COPY turbo.json turbo.json

RUN pnpm build

FROM golang:1.23 as gobuilder

COPY apps/storybook/server.go server.go
RUN go build \
    -ldflags "-linkmode external -extldflags -static" \
    -a server.go

FROM scratch as runner

COPY --from=gobuilder /go/server ./server
COPY --from=installer /app/apps/histoire/.histoire/dist ./web-root

CMD ["./server"]

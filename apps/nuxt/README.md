# Nuxt 3 Minimal Starter

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Setup

Make sure to install the dependencies

```bash
pnpm install
```

## Development

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```
## Build Docker Production Image

It is necessary to pass the whole monorepo as context.
Monorepo pruning happens on docker build to leverage docker caching.

```bash
docker build -f Dockerfile ../../

docker run -d -p 3000:3000 <image-id>
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

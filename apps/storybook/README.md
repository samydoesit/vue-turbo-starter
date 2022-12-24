# Storybook Minimal Starter

## Build Docker Production Image

It is necessary to pass the whole monorepo as context.
Monorepo pruning happens on docker build to leverage docker caching.

```bash
docker build -f Dockerfile ../../

docker run -d -p 6006:6006 <image-id>
```

<p align="center" class="unchanged rich-diff-level-one">
    <img src="https://img.shields.io/badge/vue-3.x-brightgreen">
    <img src="https://img.shields.io/badge/nuxt-3.x-brightgreen">
</p>
<p align="center" class="unchanged rich-diff-level-one">
    <a href="https://github.com/pnpm/pnpm" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=pnpm&color=222222&logo=pnpm&logoColor=F69220&label=">
    </a>
    <a href="https://vitejs.dev" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Vite&color=646CFF&logo=Vite&logoColor=FFFFFF&label=">
    </a>
    <a href="https://github.com/vuejs/core" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Vue.js&color=222222&logo=Vue.js&logoColor=4FC08D&label=">
    </a>
    <!-- <a href="https://nuxtjs.org" target="_blank">
        <img src="https://img.shields.io/badge/Nuxt-black?style=for-the-badge&logo=nuxt.js&logoColor=white">
    </a> -->
    <a href="https://nuxtjs.org" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Nuxt.js&color=222222&logo=Nuxt.js&logoColor=00DC82&label=">
    </a>
    <a href="https://uno.antfu.me/" target="_blank">
        <img src="https://img.shields.io/badge/unocss-000.svg?style=for-the-badge&logo=unocss&logoColor=white">
    </a>
    <a href="https://github.com/storybooks/storybook" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Storybook&color=FF4785&logo=Storybook&logoColor=FFFFFF&label=">
    </a>
    <a href="https://github.com/vercel/turborepo" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Turborepo%20by%20Vercel&color=000000&logo=Vercel&logoColor=FFFFFF&label=">
    </a>
</p>

Demo - Nuxt:
[![Netlify Status](https://api.netlify.com/api/v1/badges/56300feb-c43a-486b-896a-88ba674ec4f6/deploy-status)](https://vue-turbo-starter-nuxt.netlify.app/)

Demo - Storybook:
[![Netlify Status](https://api.netlify.com/api/v1/badges/3fe35172-6d1a-472b-a5c6-5682a55e5e5a/deploy-status)](https://vue-turbo-starter-storybook.netlify.app/)

# Vue3 | Nuxt3 | Storybook v7 | Histoire | Mono-/Turborepo starter using pnpm

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Apps and Packages

- `nuxt`: another [Nuxt3](https://nuxtjs.org) app - https://localhost:3000/
- `storybook`: another [Storybook](https://storybook.js.org/) - https://localhost:6006/
- `histoire`: [Histoire](https://histoire.dev/) - https://localhost:6007/
- `ui`: a stub Vue component library shared by `nuxt`, `vite` and `storybook` applications
- `config`: `eslint` configurations (includes [nuxt/eslint-config](https://github.com/nuxt/eslint-config) standardjs flavor)
<!-- - `tsconfig`: `tsconfig.json`s used throughout the monorepo -->

Each package/app is [TypeScript](https://www.typescriptlang.org/) ready.

uses:
- pnpm
- turborepo
- vue3
- nuxt3
- vite
- storybook v8
- histoire
- unoCSS (presetWind - tailwind/windi)
- vitest (monorepo setup)
- playwright for e2e tests

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/samydoesit/vue-turbo-starter/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit samydoesit/vue-turbo-starter my-vue-turbo-starter-monorepo
cd my-vue-turbo-starter-monorepo
pnpm i # If you don't have pnpm installed, run: `corepack enable` (or use `npm i -g corepack` for Node.js < 20)
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change `App.vue`
- [ ] Change/Edit `vite.config.ts` | `nuxt.config.ts`
- [ ] Change the favicon in `public`
- [ ] Remove the `.github` folder which contains the funding info
- [ ] Clean up the READMEs and remove demo content

## 💻 Development
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 20)
- Install dependencies using `pnpm install`
- Run development servers `pnpm dev`

## 🚀 Build
- Build for production `pnpm build`

## Docker Container
- To build docker images it is necessary to pass monorepo root as context.

```bash
cd <repo-root>
# Storybook Dockerfile
docker build -f apps/storybook/Dockerfile .
docker run -d -p 6006:6006 <image-id>
# Histoire Dockerfile
docker build -f apps/histoire/Dockerfile .
docker run -d -p 6006:6006 <image-id>
# Nuxt Dockerfile
docker build -f apps/nuxt/Dockerfile .
docker run -d -p 3000:3000 <image-id>
```

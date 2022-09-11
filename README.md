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
    <a href="https://windicss.org" target="_blank">
        <img src="https://img.shields.io/badge/windicss-48B0F1.svg?style=for-the-badge&logo=windi-css&logoColor=white">
    </a>
    <a href="https://github.com/storybooks/storybook" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Storybook&color=FF4785&logo=Storybook&logoColor=FFFFFF&label=">
    </a> 
    <a href="https://github.com/vercel/turborepo" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Turborepo%20by%20Vercel&color=000000&logo=Vercel&logoColor=FFFFFF&label=">
    </a>  
</p>

# 🚧 WIP 🚧 Vue / Vite / Nuxt / Turborepo starter with pnpm

This is an unofficial starter turborepo/monorepo.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Apps and Packages

- `nuxt`: another [Nuxt3](https://nuxtjs.org) app - https://localhost:3000/
- `vite`: another [Vite Vue](https://vuejs.org) app - https://localhost:4000/
- `storybook`: another [Storybook](https://storybook.js.org/) - https://localhost:6006/
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
- storybook + storybook-builder-vite
- windicss
- vitest

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Run development servers `pnpm dev`

## 🚀 Build
- Build for production `pnpm build`
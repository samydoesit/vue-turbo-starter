export default [
  'apps/nuxt/*',
  'packages/ui/vitest.config.ts', // not sure why ui package needs to be configured differently
  {
    test: {
      include: ['packages/css-preset/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      name: 'css-preset',
    },
  },
  {
    test: {
      include: ['packages/pinia-store/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      name: 'store',
    },
  },
]

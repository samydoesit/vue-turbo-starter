import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // ...config,
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@ui': resolve(__dirname, '../ui/src'),
      // '@ui': fileURLToPath(new URL('../ui/src', import.meta.url))
    },
  },
  test: {
    include: [
      '../ui/src/components/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      '../pinia-store/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      '../css-preset/{src,test}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      '../../apps/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
    deps: {
      inline: [/@nuxt\/test-utils/],
    },
  },
})

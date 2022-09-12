import { defineConfig } from 'vitest/config'
import config from './vite.config'

export default defineConfig({
  ...config,
  test: {
    include: ['../ui/src/components/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}', '../pinia-store/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
})

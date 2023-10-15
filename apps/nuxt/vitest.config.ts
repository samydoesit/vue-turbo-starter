import Vue from '@vitejs/plugin-vue'
import { defineProject } from 'vitest/config'

export default defineProject({
  plugins: [
    Vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag.toLowerCase().startsWith('nuxt')
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': new URL('./', import.meta.url).pathname,
      '@ui': new URL('../../packages/ui/src', import.meta.url).pathname,
      '~': new URL('./', import.meta.url).pathname,
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})

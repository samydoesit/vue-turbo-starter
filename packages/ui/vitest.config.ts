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
      '@ui/': new URL('./src/', import.meta.url).pathname,
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [
      './tests/setup',
    ],
  },
})

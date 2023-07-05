import { alias } from '../../alias'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxt/devtools', '@unocss/nuxt'],
  alias,
  css: [
    '@unocss/reset/tailwind.css',
    'uno.css',
  ],
  components: [{ path: '../../packages/ui/src/components', extensions: ['vue'] }],
  typescript: {
    shim: false,
  },
  vite: {
    optimizeDeps: {
      exclude: ['pinia'],
    },
  },
})

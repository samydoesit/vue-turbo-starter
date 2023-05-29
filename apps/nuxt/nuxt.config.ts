import Unocss from 'unocss/vite'

import { alias } from '../../alias'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxt/devtools'],
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
    plugins: [
      Unocss(),
    ],
    optimizeDeps: {
      exclude: ['pinia'],
    },
  },
})

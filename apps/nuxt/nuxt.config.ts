import Unocss from 'unocss/vite'
import VueTypeImports from 'vite-plugin-vue-type-imports'

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
      /**
       *  https://github.com/vuejs/core/issues/4294
       */
      VueTypeImports(),
      Unocss(),
    ],
    optimizeDeps: {
      exclude: ['pinia'],
    },
  },
})

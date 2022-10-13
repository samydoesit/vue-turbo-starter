import path from 'path'
import Unocss from 'unocss/vite'

export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt'],
  alias: {
    '@ui': path.resolve(__dirname, '../../packages/ui/src')
  },
  css: [
    '@unocss/reset/tailwind.css',
    'uno.css'
  ],
  components: [{ path: '../../packages/ui/src/components', extensions: ['vue'] }],
  typescript: {
    shim: false
  },
  vite: {
    plugins: [
      Unocss(),
    ],
    optimizeDeps: {
      exclude: ['pinia']
    },
    resolve: {
      alias: {
        // This is at the moment necessary for a working build
        pinia: path.resolve(__dirname, './node_modules/pinia/dist/pinia.mjs')
      }
    }
  }
})

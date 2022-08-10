import path from 'path'
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: ['nuxt-windicss', '@pinia/nuxt'],
  alias: {
    '@ui': path.resolve(__dirname, '../../packages/ui/src')
  },
  components: [{ path: '../../packages/ui/src/components', extensions: ['vue'] }],
  typescript: {
    shim: false
  },
  vite: {
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

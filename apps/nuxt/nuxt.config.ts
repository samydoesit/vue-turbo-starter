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
  }
})

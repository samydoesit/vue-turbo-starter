import { fileURLToPath, URL } from 'url'
import WindiCSS from 'vite-plugin-windicss'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  server: {
    port: 4000
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@ui': fileURLToPath(new URL('../../packages/ui/src', import.meta.url))
    }
  }
})

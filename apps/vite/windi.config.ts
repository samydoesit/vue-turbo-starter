import { defineConfig } from 'windicss/helpers'
import config from 'windicss-config/windicss'

export default defineConfig({
  presets: [config],
  extract: {
    include: ['../../packages/ui/src/**/*.{vue,html,jsx,tsx}']
  }
})

import { defineConfig } from 'windicss/helpers'
import config from 'config/windicss'

export default defineConfig({
  presets: [config],
  extract: {
    include: ['../../packages/ui/src/**/*.{vue,html,jsx,tsx}', '**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  }
})

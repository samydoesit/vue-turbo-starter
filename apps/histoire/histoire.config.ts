import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [
    HstVue(),
  ],
  storyMatch: [
    './src/**/*.story.vue',
    // '@ui/packages/ui/src/components/**/*.story.vue', // does not work
    '../../packages/ui/src/components/**/*.story.vue',
  ],
  setupFile: 'histoire.setup.ts',
})

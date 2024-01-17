import '@unocss/reset/tailwind.css'
import 'uno.css'

import { defineSetupVue3 } from '@histoire/plugin-vue'

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.provide('test', 'hello')
  // app.use(...)
})

import 'virtual:windi.css'

import { createPinia } from 'pinia'
import { app } from '@storybook/vue3'
import { useHelloWorld } from '../store/helloWorld'
const pinia = createPinia()

app.use(pinia)
useHelloWorld()

export const parameters = {
  layout: 'centered',
  controls: { expanded: true },
  // docs: {
  //   inlineStories: true,
  //   source: {
  //     state: 'open',
  //   },
  // },
  actions: { argTypesRegex: '^on[A-Z].*' }
}

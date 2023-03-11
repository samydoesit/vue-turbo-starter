import { setup } from '@storybook/vue3'
import * as jest from '@storybook/jest'
import { action } from '@storybook/addon-actions'

import '@unocss/reset/tailwind.css'
import 'uno.css'

// Fix: fn() is not defined, see: https://github.com/storybookjs/storybook/issues/15391
window.jest = jest as any

/** How to use Pinia-store in storybook */
// import { createPinia } from 'pinia'
// useUser()
// import { useUser } from '../store/user'
// const pinia = createPinia()

setup((app) => {
  // Provide NuxtLink Stub
  app.component('NuxtLink', {
    props: {
      to: {
        type: String,
        default: '',
      },
    },
    methods: {
      log() {
        action('link target')(this.to)
      },
    },
    template: '<div @click="log()"><slot>NuxtLink</slot></div>',
  })
})

export const parameters = {
  layout: 'centered',
  controls: { expanded: true },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

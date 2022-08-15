// import { app } from '@storybook/vue3'
import * as jest from '@storybook/jest'
import 'virtual:windi.css'

// Fix: fn() is not defined, see: https://github.com/storybookjs/storybook/issues/15391
window.jest = jest as any

/** How to use Pinia-store in storybook */
// import { createPinia } from 'pinia'
// useUser()
// import { useUser } from '../store/user'
// const pinia = createPinia()

export const parameters = {
  layout: 'centered',
  controls: { expanded: true },
  actions: { argTypesRegex: '^on[A-Z].*' }
}

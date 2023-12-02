// TODO
// /// <reference types="histoire" />

import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

import { alias } from '../../alias'

export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
  ],
  resolve: {
    // alias,
    alias: {
      ...alias,
    },
  },
  server: {
    fs: {
      allow: ['../..'], // TODO: this is necessary to make alias import import work
    },
  },
  // histoire: {
  //   // Histoire config can also go here
  // },
})

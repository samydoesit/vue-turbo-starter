// @ts-check
require('@rushstack/eslint-patch/modern-module-resolution')
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['@nuxtjs/eslint-config-typescript']
})

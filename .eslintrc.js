// @ts-check
const { defineConfig } = require('eslint-define-config')

const apps = 'apps/'
const nuxtPath = `${apps}/nuxt`

module.exports = defineConfig({
  extends: ['custom'],
  root: true,
  overrides: [
    // Welche Regeln brauchen wir?

    // Package Overrides
    {
      files: ['./packages/**/*.{js,ts,vue}'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },

    // Nuxt Overrides
    {
      files: [`${nuxtPath}/components/**/*.{js,ts,vue}`, `${nuxtPath}/pages/**/*.{js,ts,vue}`, `${nuxtPath}/layouts/**/*.{js,ts,vue}`],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
})

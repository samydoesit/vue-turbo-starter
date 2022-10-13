// @ts-check
const { defineConfig } = require('eslint-define-config')

const apps = 'apps/'
const nuxtPath = `${apps}/web`

module.exports = defineConfig({
  extends: ['custom'],
  root: true,
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/no-multiple-template-root': 'off',
  },
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
  ignorePatterns: ['**/*.json', 'dist', 'node_modules', '.turbo', '.nuxt', 'public', '.output', '!.storybook'],
})

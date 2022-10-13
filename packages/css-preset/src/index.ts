import type { Preset } from '@unocss/core'
import { presetWind, transformerDirectives, transformerVariantGroup } from 'unocss'
import type { UnocssNuxtOptions } from '@unocss/nuxt'
import { rules } from './rules'
import { theme } from './theme'
export type { Theme } from '@unocss/preset-wind'

export const rollerUiPreset = (): Preset => {
  return {
    name: 'unocss-preset-vue-turbo',
    rules,
    safelist: [
      'hidden'
    ],
    shortcuts: [],
    theme
  }
}

export function extendUnocssOptions (user: UnocssNuxtOptions = {}): UnocssNuxtOptions {
  return {
    ...user,
    preflight: true,
    presets: [
      presetWind(),
      // presetAttributify(),
      // presetTypography(),
      // presetIcons({
      //   prefix: '',
      //   scale: 1.2,
      //   extraProperties: {
      //     display: 'inline-block',
      //     'vertical-align': 'middle'
      //   }
      //   ...(user?.icons || {})
      // }),
      rollerUiPreset(),
      ...(user.presets || [])
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup()
    ]
  }
}

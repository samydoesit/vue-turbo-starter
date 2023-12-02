import type { Preset, UserConfig } from '@unocss/core'
import type { UnocssNuxtOptions } from '@unocss/nuxt'
import type { PresetWindOptions, Theme } from '@unocss/preset-wind'
import { presetIcons } from '@unocss/preset-icons'
import { presetWind, transformerDirectives, transformerVariantGroup } from 'unocss'
import { rules } from './rules'
import { theme } from './theme'

// @unocss-include

/**
 * Preset Vue Turbo for UnoCSS
 */
export function presetVueTurbo(): Preset<Theme> {
  return {
    name: 'unocss-preset-vue-turbo',
    rules,
    safelist: [
      'hidden',
    ],
    preflights: [
      {
        layer: 'basestyles',
        getCSS: () => `
          html,
          body,
          #app {
            height: 100%;
            margin: 0;
            padding: 0;
          }

          html.dark {
            background: #121212;
            color-scheme: dark;
          }

          :root {
            color-scheme: light dark;
            color: rgba(255, 255, 255, 0.87);
            background-color: #242424;
          }

          @media (prefers-color-scheme: light) {
            :root {
              color: #213547;
              background-color: #ffffff;
            }
            a:hover {
              color: #747bff;
            }
          }
        `,
      },
    ],
    shortcuts: [],
    theme,
  }
}

interface CustomOptions {
  /**
   * Custom options for PresetWind
   */
  customPresetWindOptions?: PresetWindOptions
}
interface CustomNuxtConfig extends UnocssNuxtOptions, CustomOptions {}

/**
 * Extends unocss/vite Plugin Options Config
 */
export function extendUnocssOptions({ customPresetWindOptions, ...options }: CustomNuxtConfig = {}): UserConfig {
  return {
    ...options,
    presets: [
      presetWind({
        ...(customPresetWindOptions || {}),
      }),
      presetVueTurbo(),
      ...(options.presets || []),
      presetIcons({
        extraProperties: {
          display: 'inline-block',
        },
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
      ...(options.transformers || []),
    ],
    content: {
      pipeline: {
        include: [
          '**.ts',
          '**.vue',
          '**.mdx',
        ],
      },
    },
  }
}

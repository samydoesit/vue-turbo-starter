import { createGenerator, escapeSelector } from '@unocss/core'
import { presetIcons } from '@unocss/preset-icons'
import { presetWind } from '@unocss/preset-wind'
import { describe, expect, it } from 'vitest'

import { presetVueTurbo } from '../src'

import { presetCssNonTargets, presetCssTargets } from './assets/preset-css-preset-targets'

const uno = createGenerator({
  ...presetVueTurbo(),
  presets: [
    presetWind(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
      },
    }),
  ],
  safelist: [],
})

describe('test css-preset', () => {
  it('targets', async () => {
    const targets = presetCssTargets
    const code = targets.join(' ')
    const { css } = await uno.generate(code)
    const { css: css2 } = await uno.generate(code)

    const unmatched = []
    for (const i of targets) {
      if (!css.includes(escapeSelector(i)))
        unmatched.push(i)
    }

    expect(unmatched).toEqual([])
    expect(css).toMatchSnapshot()
    expect(css).toEqual(css2)
  })

  it('non-targets', async () => {
    const { matched } = await uno.generate(new Set(presetCssNonTargets), { preflights: false })

    expect([...matched]).toEqual([])
  })

  it('containers', async () => {
    const targets = [
      'container',
      'md:container',
      'lg:container',
    ]
    const nonTargets = [
      '__container',
    ]
    const { css, matched } = await uno.generate(new Set([...targets, ...nonTargets]), { preflights: false })

    expect(matched).toEqual(new Set(targets))
    expect(css).toMatchSnapshot()
  })
})

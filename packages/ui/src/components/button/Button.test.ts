import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

// const types = ['primary', 'secondary', 'tertiary']
describe('Test Button Button', () => {
  expect(Button).toBeTruthy()
  const wrapper = mount(Button, {
    props: {
      disabled: false,
      loading: false,
      prefix: 'first',
      iconMobile: false,
    },
  })
  it('Trigger Button click event', async () => {
    await wrapper.get('#firstButtonButton').trigger('click')

    expect(wrapper.emitted().click).toBeTruthy()
  })

  it('Check disabled Button', async () => {
    await wrapper.setProps({ disabled: true })
    const button = await wrapper.get('#firstButtonButton')
    expect(button.classes()).toContain('opacity-20')
    expect(button.element.getAttribute('disabled')).toBe('')
  })

  it('Check loading in Button', async () => {
    await wrapper.setProps({ loading: true })
    const button = await wrapper.get('#firstButtonButton')
    expect(button.find('svg').exists()).toBeTruthy()
  })
})

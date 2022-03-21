import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import CustomButton from './CustomButton.vue'

test('mount component', async () => {
  expect(CustomButton).toBeTruthy()

  const wrapper = mount(CustomButton, {
    props: {
      type: 'primary'
    }
  })

  expect(wrapper.text()).toContain('')

  await wrapper.get('button').trigger('click')

  expect(wrapper.emitted().buttonClicked).toBeTruthy()
})

import type { Meta, StoryFn } from '@storybook/vue3'
import IconCamera from '../icon/Camera.vue'
import Button from './Button.vue'
import { ButtonEnum, ButtonIconSizeEnum } from './Button.model'

export default {
  component: { Button },
  title: 'Button',
  args: {
    type: '',
    text: 'Button Button',
    icon: false,
    iconSize: ButtonIconSizeEnum.Normal,
    disabled: false,
    loading: false,
  },
  argTypes: {
    type: {
      options: [ButtonEnum.Primary, ButtonEnum.Secondary, ButtonEnum.Tertiary, ButtonEnum.Quaternary],
      control: { type: 'select' },
    },
    iconSize: {
      options: [ButtonIconSizeEnum.Normal, ButtonIconSizeEnum.Small],
      control: { type: 'select' },
    },
  },
} as Meta

const Template: StoryFn<typeof Button> = args => ({
  components: { Button, IconCamera },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args"><template v-if="args.icon" #icon><IconCamera /></template>{{ args.text }}</Button>',
})

export const Primary = Template.bind({})
Primary.args = {
  type: ButtonEnum.Primary,
  prefix: 'Primary',
}
export const Secondary = Template.bind({})
Secondary.args = {
  type: ButtonEnum.Secondary,
  prefix: 'Secondary',
}
export const Tertiary = Template.bind({})
Tertiary.args = {
  type: ButtonEnum.Tertiary,
  prefix: 'Tertiary',
}
export const Quaternary = Template.bind({})
Quaternary.args = {
  type: ButtonEnum.Quaternary,
  prefix: 'Quaternary',
}

import CustomButton from './CustomButtonNew.vue'

export default {
  component: { CustomButton },
  title: 'Custom Button New'
}

const Template = args => ({
  components: { CustomButton },
  setup () {
    return { args }
  },
  template: '<CustomButton v-bind="args"> {{ args.type }} </CustomButton>'
})

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary'
}
export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary'
}
export const Outlined = Template.bind({})
Outlined.args = {
  type: 'outlined'
}

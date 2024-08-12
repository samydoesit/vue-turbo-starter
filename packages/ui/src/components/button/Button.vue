<script lang="ts" setup>
import IconSpinner from '@ui/components/icon/Spinner.vue'
import type { ButtonIconSize, ButtonType } from './Button.model'
import { ButtonIconSizes, ButtonTypes } from './Button.model'

withDefaults(defineProps<{
  prefix: string
  type?: ButtonType
  iconSize?: ButtonIconSize
  loading?: boolean
  disabled?: boolean
}>(), {
  type: () => ButtonTypes.Primary,
  iconSize: () => ButtonIconSizes.Normal,
  loading: false,
  disabled: false,
})

defineEmits<{
  (e: 'click'): void
}>()

const classes = {
  primary: 'bg-primary text-white w-full border-primary border-2 border-solid rounded-md active:(bg-primary-700 border-primary-700)',
  secondary: 'bg-transparent text-primary w-full border-primary border-2 border-solid rounded-md active:(text-primary-700 border-primary-700)',
  tertiary: 'bg-white text-normal w-full border-2 border-gray-400 border-solid rounded-full',
  quaternary: 'bg-white text-normal border-2 border-gray border-solid rounded-full shadow-lg',
}

const iconSizeClasses = {
  small: 'h-1 w-1',
  normal: 'h-1.5 w-1.5',
}
</script>

<template>
  <button
    :id="`${prefix}ButtonButton`"
    class="overflow-ellipsis mb-0.5 h-3 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap p-4 text-lg transition-opacity focus:outline-none focus:ring"
    :class="[{ 'opacity-20 cursor-not-allowed': disabled }, classes[type]]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <IconSpinner v-if="loading" class="h-2 w-2" />
    <div v-else class="flex items-center justify-center gap-0.25">
      <div v-if="$slots.icon" :class="iconSizeClasses[iconSize]">
        <slot name="icon" />
      </div>
      <slot>Button Text</slot>
    </div>
  </button>
</template>

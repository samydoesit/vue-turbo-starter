<script lang="ts" setup>
type ButtonTypes = 'primary' | 'secondary' | 'outlined'

interface Props {
  type: ButtonTypes
}

withDefaults(defineProps<Props>(), {
  type: 'primary'
})

defineEmits<{(event: 'buttonClicked'): void}>()
const typeClassMap = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  outlined: 'bg-accent'
}
</script>

<template>
  <button class="" :class="`${typeClassMap[type]} p-2`" @click="$emit('buttonClicked')">
    <slot />
  </button>
</template>

<script lang="ts" setup>
type ButtonTypes = 'primary' | 'secondary' | 'outlined'

interface Props {
  type: ButtonTypes // | string
}

defineProps<Props>()
const typeClassMap = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  outlined: 'bg-accent'
}
</script>

<template>
  <button :class="`${typeClassMap[type]} p-2`">
    <slot />
  </button>
</template>

<script setup>
import { ref } from 'vue'
import { logEvent } from 'histoire/client'
import Button from './Button.vue'

const text = ref('Click me')
</script>

<template>
  <Story>
    <Button prefix="test" @click="logEvent('click', $event)">
      {{ text }}
    </Button>

    <template #controls>
      <HstText v-model="text" title="default slot" />
    </template>
  </Story>
</template>

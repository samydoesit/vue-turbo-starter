<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  foo: {
    type: String,
    required: true,
  },
  blabla: {
    type: String,
    default: 'Test',
  },
})

const textInput = ref('')
</script>

<template>
  <input v-model="textInput" type="text">
</template>

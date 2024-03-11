<script lang="ts" setup>
import { ref } from 'vue'

const textInput = ref('')
</script>

<template>
  <input v-model="textInput" type="text">
</template>

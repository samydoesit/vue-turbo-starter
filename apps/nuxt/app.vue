<script lang="ts" setup>
import { useHelloWorld } from '@/store/helloWorld'

const store = useHelloWorld()
const { message } = store
console.log(message)
</script>

<template>
  <div>
    <div class="absolute">
      <Button prefix="test" type="primary">
        Button1
      </Button>
    </div>
    <NuxtWelcome />
  </div>
</template>

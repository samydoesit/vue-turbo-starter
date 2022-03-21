<script lang="ts" setup>
import { useHelloWorld } from '@/store/helloWorld'

const store = useHelloWorld()
const { message } = store
console.log(message)
</script>

<template>
  <div>
    <div class="absolute">
      <CustomButton type="primary">
        CustomButton
      </CustomButton>
    </div>
    <NuxtWelcome />
  </div>
</template>

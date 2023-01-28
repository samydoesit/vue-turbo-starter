<script lang="ts" setup>
import { useHelloWorld } from 'pinia-store'

const store = useHelloWorld()
const { message } = store
console.log(message)
</script>

<template>
  <div class="flex place-items-center h-screen w-full justify-center">
    <h1>vue turbo starter</h1>
    <div class="block">
      <Button prefix="test" type="primary">
        Button1
      </Button>
    </div>
    <!-- <NuxtWelcome /> -->
  </div>
</template>

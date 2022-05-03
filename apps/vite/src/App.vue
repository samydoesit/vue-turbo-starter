<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import CustomButton from '@ui/components/button/Button.vue'
import HelloWorld from './components/HelloWorld.vue'
import { useHelloWorld } from '@/store/helloWorld'

const store = useHelloWorld()
const { message } = store
console.log(message)
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <CustomButton prefix="dscds" type="primary">
    Test
  </CustomButton>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

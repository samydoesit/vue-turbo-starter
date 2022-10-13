import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

createApp(App).use(createPinia()).mount('#app')

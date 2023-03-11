import { defineStore } from 'pinia'

export const useHelloWorld = defineStore('helloWorld', {
  state: () => ({
    /**
     * this is a test for message
     */
    message: 'Testmessage',
  }),
  actions: {
    setMessage(payload: string) {
      this.message = payload
    },
  },
})

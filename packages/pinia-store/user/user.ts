import { defineStore } from 'pinia'

type TCode = 'mr' | 'mrs' | 'mx'

export const useUserStore = defineStore('user', {
  state: () => ({
    firstName: 'Lebron',
    lastName: 'James',
    title: 'Herr',
  }),
  getters: {
    getName(): string {
      return `${this.title} ${this.firstName} ${this.lastName}`
    },
  },
  actions: {
    setFirstName(payload: string) {
      this.firstName = payload
    },
    setLastName(payload: string) {
      this.lastName = payload
    },
    setTitle(payload: TCode) {
      const code = {
        mr: 'Herr',
        mrs: 'Frau',
        mx: 'Divers',
      }
      this.title = code[payload]
    },
  },
})

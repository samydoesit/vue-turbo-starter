export const helloWorld = {
  state: () => ({
    /**
     * this is a test for message
     */
    message: 'Testmessage',
  }),
  actions: {
    setMessage (payload) {
      this.message = payload
    },
  },
}

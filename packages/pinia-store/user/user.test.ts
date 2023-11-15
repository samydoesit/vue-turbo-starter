import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useUserStore } from './user'

describe('user Store with describe', () => {
  setActivePinia(createPinia())

  let user = useUserStore()

  beforeEach(() => {
    user = useUserStore()
  })

  it('first Name', () => {
    expect(user.firstName).toBe('Lebron')
    user.setFirstName('Testo')
    expect(user.firstName).toBe('Testo')
  })

  it('last Name', () => {
    expect(user.lastName).toBe('James')
    user.setLastName('Testo')
    expect(user.lastName).toBe('Testo')
  })
})

it('user Store: First Name with test', () => {
  setActivePinia(createPinia())
  const user = useUserStore()

  expect(user.firstName).toBe('Lebron')
  user.setFirstName('Terminator')
  expect(user.firstName).toBe('Terminator')
})

import { beforeEach, describe, expect, it, test } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useUserStore } from './user'

describe('User Store with describe', () => {
  setActivePinia(createPinia())

  let user = useUserStore()

  beforeEach(() => {
    user = useUserStore()
  })

  it('First Name', () => {
    expect(user.firstName).toBe('Lebron')
    user.setFirstName('Testo')
    expect(user.firstName).toBe('Testo')
  })

  it('Last Name', () => {
    expect(user.lastName).toBe('James')
    user.setLastName('Testo')
    expect(user.lastName).toBe('Testo')
  })
})

test('User Store: First Name with test', () => {
  setActivePinia(createPinia())
  const user = useUserStore()

  expect(user.firstName).toBe('Lebron')
  user.setFirstName('Terminator')
  expect(user.firstName).toBe('Terminator')
})

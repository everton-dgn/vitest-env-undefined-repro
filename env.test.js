import { expect, test } from 'vitest'

test('undefined in test.env leaves the variable unset', () => {
  console.log({
    processEnv: process.env.FOO,
    inProcessEnv: 'FOO' in process.env,
    importMetaEnv: import.meta.env.FOO,
  })
  expect(process.env.BAR).toBe('bar')
  expect('FOO' in process.env).toBe(false)
  expect(import.meta.env.FOO).toBeUndefined()
})

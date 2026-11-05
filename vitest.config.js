import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    env: { FOO: undefined, BAR: 'bar' },
  },
})

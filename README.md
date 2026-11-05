# vitest-env-undefined-repro

A key set to `undefined` in `test.env` becomes the string `"undefined"` in the workers.

```sh
pnpm install
pnpm vitest run
pnpm vitest run --pool=threads
pnpm vitest run --pool=vmThreads
```

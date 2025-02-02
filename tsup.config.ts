import { type Options, defineConfig } from 'tsup'

export default defineConfig((options: Options) => ({
  entry: ['src/index.ts'],
  clean: true,
  minify: true,
  target: 'es2024',
  sourcemap: true,
  dts: true,
  format: ['esm', 'cjs'],
  injectStyle: true,
  tsconfig: 'tsconfig.json',
  ...options,
}))

import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
	outDir: 'dist',
	clean: true,
	format: ['esm', 'cjs'],
	dts: true,
	external: ['@types/node'],
	tsconfig: './tsconfig.json',
})
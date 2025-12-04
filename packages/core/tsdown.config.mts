import { defineConfig } from 'tsdown';

export default defineConfig({
  tsconfig: './tsconfig.build.json',
  entry: ['src/index.ts'],
  dts: true,
  clean: true,
  sourcemap: true,
  outDir: 'dist',
  format: ['esm', 'cjs'],
});

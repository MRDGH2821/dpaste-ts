/* eslint-disable import/no-extraneous-dependencies */
import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions';
import { defineConfig } from 'tsup';

export default defineConfig({
  bundle: true,
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  esbuildPlugins: [esbuildPluginFilePathExtensions()],
  format: ['cjs', 'esm'],
  keepNames: true,
  minify: 'terser',
  outDir: 'dist',
  platform: 'node',
  skipNodeModulesBundle: true,
  sourcemap: true,
  splitting: false,
  target: 'esnext',
  treeshake: true,
  tsconfig: 'tsconfig.json',
});

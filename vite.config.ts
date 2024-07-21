import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'build',
    sourcemap: false,
  },
  server: {
    port: 5174,
  },
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
    preserveSymlinks: true,
  },
  plugins: [
    checker({
      typescript: true,
    }),
    react(),
  ],
});

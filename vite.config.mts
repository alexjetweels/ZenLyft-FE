import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// eslint-disable-next-line import/no-extraneous-dependencies
import checker from 'vite-plugin-checker';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';


export default defineConfig({
  build: {
    outDir: 'dist',
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

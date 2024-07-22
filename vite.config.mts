import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';


export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 3030,
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

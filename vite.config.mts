import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
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
    svgr({
      svgrOptions: {
        ref: true,
        icon: true,
      },
    }),
  ],
  define: {
    'process.env': process.env,
  },
});

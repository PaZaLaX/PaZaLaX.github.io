import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        robin: resolve(__dirname, 'work/robin/index.html'),
        threeDStudies: resolve(__dirname, 'work/3d-studies/index.html'),
        gameDevelopment: resolve(__dirname, 'work/game-development/index.html'),
      },
    },
  },
});

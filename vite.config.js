import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/contact': {
        target: 'https://aibridgebackend-production.up.railway.app',
        changeOrigin: true,
        secure: true,
      },
      
      '/api': {
        target: 'https://aibridgebackend-production.up.railway.app',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // usuwa /api z początku
      },
    },
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/contact': {
        target: 'https://api.aibridgeconsulting.pl', // Twój backend
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
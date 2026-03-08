import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { setTarget } from 'framer-motion'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/contact': {
        changeOrigin: true,
        target: 'http://localhost:3000',
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
      
    }
  }
})

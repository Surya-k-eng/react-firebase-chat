// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['.ngrok-free.app'],
    host: true,
  },
  define: {
    'global': 'window', // ← this tells simple-peer to use the browser window as global
  },
})

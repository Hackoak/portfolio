import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 1000, // Set your desired chunk size limit here

  }
})

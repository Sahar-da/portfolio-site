import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-site/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
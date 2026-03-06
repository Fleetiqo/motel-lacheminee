import { defineConfig } from 'vite'

export default defineConfig({
  base: '/motel-lacheminee/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})

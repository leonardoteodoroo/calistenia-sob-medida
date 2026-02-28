import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Base: '/' porque o deploy usa CNAME (domínio próprio), não subpath do GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/',
})

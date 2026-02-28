import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Ajuste: O Base Path é estrito para o Github Pages APENAS no momendo do Build.
  // No comando 'npm run dev', o vite servirá no root (/) evitando a tela branca local!
  base: command === 'build' ? '/calistenia-emagrecimento/' : '/',
}))

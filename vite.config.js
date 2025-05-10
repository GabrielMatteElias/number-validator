import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite acesso externo
    port: 5173, // Porta padrão do Vite (opcional)
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
            router: ['react-router-dom'],
          chart: ['chart.js'],
          mui: ['@mui/material'],
            axios: ['axios'],
        },
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // Permite acceso desde otros dispositivos en la red local
    port: 5173       // Puerto por defecto de Vite (puedes cambiarlo si lo necesitas)
  }
})

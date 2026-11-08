import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'      // ← this


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: [react(), tailwindcss()], // ← and this
  
})

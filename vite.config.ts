import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8000, // 🔧 Change this to your desired port number
    host: true, // 🌐 Ensures the server is accessible from the network
    strictPort: true, // 🚫 Prevents the port from changing if it’s in use
  },
})

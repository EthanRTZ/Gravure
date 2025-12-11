import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  },
  // Configuration pour GitHub Pages
  // Repository: https://github.com/EthanRTZ/Gravure
  base: process.env.NODE_ENV === 'production' ? '/Gravure/' : '/'
})


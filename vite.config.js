
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        hotels: 'hotels.html',
        owner: 'owner.html',
        investor: 'investor.html'
      }
    }
  }
})

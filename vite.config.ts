import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/admin': {
        target: 'https://shop.fed.lagounews.com/api',
        changeOrigin: true
      }
    }
  },
  plugins: [vue(), eslint({
    cache: false
  }), vueJsx()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ['@import "@/styles/variables.scss";']
      }
    }
  }
})

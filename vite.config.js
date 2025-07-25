import {fileURLToPath,URL} from 'node:url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      src : fileURLToPath(new URL('./src/components', import.meta.url)),
    }
  }
})

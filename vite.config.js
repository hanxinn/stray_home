import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {  // 2. 新增別名
      alias: { 
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

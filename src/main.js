import { createApp } from 'vue'
import '@/assets/css/index.css'
import App from './App.vue'
import router from './router' // 1. 引入 router

const app = createApp(App)

app.use(router).mount('#app') // 2. 使用 router

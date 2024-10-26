import { createApp } from 'vue'
import '@/assets/css/index.css'
import App from './App.vue'
import router from './router' // 1. 引入 router

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser, faMoon, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons'
import { faSquareFacebook, faLine, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUser, faMoon, faMoonRegular, faGlobe, faSquareFacebook, faLine, faSquareInstagram   )

const app = createApp(App)

app
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app') // 2. 使用 router

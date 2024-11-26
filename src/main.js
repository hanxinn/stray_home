import { createApp } from 'vue'
import '@/assets/css/index.css'
import App from './App.vue'
import router from './router' // 1. 引入 router
import { createPinia } from 'pinia' // 1
import persist from 'pinia-plugin-persistedstate' // 2
import Antd from 'ant-design-vue'; // 1. 導入 antd
import '@/mock/index.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser, faMoon, faGlobe, faLink, faX, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faMoon as faMoonRegular, faHeart, faHand  } from '@fortawesome/free-regular-svg-icons'
import { faSquareFacebook, faLine, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUser, faMoon, faMoonRegular, faGlobe, faSquareFacebook, faLine, faSquareInstagram, faHeart, faLink, faX, faMagnifyingGlass, faHand )

const app = createApp(App)
const pinia = createPinia() // 3
pinia.use(persist) // 4

app
.use(router)
.use(pinia)
.use(Antd)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app') // 2. 使用 router

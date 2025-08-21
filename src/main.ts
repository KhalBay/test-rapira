import { createApp } from 'vue'
import { createPinia } from "pinia"
import App from './App.vue'
import router from "./router"
import boot from "./boot"
import './index.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(boot)
app.mount('#app')
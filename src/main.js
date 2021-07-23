import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Route from './route'


const app = createApp(App)
app.use(Route)
app.mount('#app')
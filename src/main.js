import 'animate.css'
import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import vAnimate from './directives/v-animate.js'

const app = createApp(App)
app.directive('animate', vAnimate)
app.mount('#app')

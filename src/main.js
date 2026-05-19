import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const application = createApp(App);

application.directive('focus', {
    mounted: (el) => el.focus()
})

application.mount('#app')

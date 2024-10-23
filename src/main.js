import { createApp } from 'vue'
import { router } from './router.js'
import App from './App.vue'

createApp(App).use(router).mount('#app')

// animazione menu
ScrollReveal().reveal('.menu', { duration: 2000, delay: 300, interval: 400 });

// animazioni jumbo
ScrollReveal().reveal('.content-place', { duration: 2000, delay: 500, interval: 400, scale: 0.65 });
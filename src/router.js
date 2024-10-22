import { createRouter, createWebHistory } from 'vue-router'

import PageHome from './pages/PageHome.vue'
import PageAuto from './pages/PageAuto.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: PageHome
        },
        {
            path: '/autos',
            name: 'autos',
            component: PageAuto,
        },

    ]
})

export { router }
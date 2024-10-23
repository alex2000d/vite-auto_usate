import { createRouter, createWebHistory } from 'vue-router'

import PageHome from './pages/PageHome.vue'
import PageAuto from './pages/PageAuto.vue'
import PageSingleAuto from './pages/PageSingleAuto.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: PageHome
        },
        {
            path: '/auto',
            name: 'auto',
            component: PageAuto,
        },
        {
            path: '/auto/:slug',
            name: 'single-auto',
            component: PageSingleAuto,
        }

    ]
})

export { router }
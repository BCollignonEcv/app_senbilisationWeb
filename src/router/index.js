import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.view.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/questions/:id(\\d+)?',
            name: 'questions',
            props: true,
            component: () =>
                import ('../views/Question.view.vue'),
        },
        {
            path: '/results',
            name: 'results',
            component: () =>
                import ('../views/Result.view.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ('../views/About.view.vue')
        },
        { 
            path: '/:pathMatch(.*)*',
            name: 'NotFound', 
            component: () =>
                import ('../views/NotFound.view.vue')        },
    ]
})

export default router
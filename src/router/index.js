import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      name: 'Not Found',
      path: '/:pathMatch(.*)*',
      component: () => import("@/views/NotFound.vue" /* webpackChunkName: "not-found" */)
    }
  ]
})

export default router

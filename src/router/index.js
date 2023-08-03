import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: () => import("@/views/TeachersCatalogView.vue" /* webpackChunkName: "teachers" */)
    },
    {
      name: 'Registration Page',
      path: '/registration',
      component: () => import("@/views/RegistrationView.vue" /* webpackChunkName: "registration" */)
    },
    {
      name: 'Not Found',
      path: '/:pathMatch(.*)*',
      component: () => import("@/views/NotFound.vue" /* webpackChunkName: "not-found" */)
    }
  ]
})

export default router

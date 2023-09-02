import { createRouter, createWebHashHistory } from 'vue-router'
import {stateUser} from '@/stores/StateUser'
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
      path: '/teachers/:id',
      props: true,
      name: 'teacher',
      component: () => import("@/views/TeacherView.vue" /* webpackChunkName: "teacher" */)
    },
    {
      path: '/companies/:id',
      props: true,
      name: 'company',
      component: () => import("@/views/CompanyView.vue" /* webpackChunkName: "company" */)
    },
    {
      name: 'Registration Page',
      path: '/registration',
      component: () => import("@/views/RegistrationView.vue" /* webpackChunkName: "registration" */),
      meta: {
        requiresVisitor: true
      },
    },
    {
      name: 'Login Page',
      path: '/login',
      component: () => import("@/views/LoginViews.vue" /* webpackChunkName: "registration" */),
      meta: {
        requiresVisitor: true
      },
    },

    {
      name: 'Help Page',
      path: '/help',
      component: () => import("@/views/HelpersPage.vue" /* webpackChunkName: "registration" */),
    },
    {
      name: 'Profile Page',
      path: '/profile',
      component: () => import("@/views/profile/ProfileMain.vue" /* webpackChunkName: "registration" */),
    },
    {
      name: 'Forum Page',
      path: '/forum',
      component: () => import("@/views/forum/ForumMain.vue" /* webpackChunkName: "registration" */),
    },
    {
      name: 'Forum Theme Page',
      path: '/forum/:id',
      component: () => import("@/views/forum/ForumTheme.vue" /* webpackChunkName: "registration" */),
    },
    {
      name: 'Course Create',
      path: '/course-create',
      component: () => import("@/views/Course/CourseCreate.vue" /* webpackChunkName: "registration" */),
    },
    {
      name: 'Course Edit',
      path: '/course-edit/:id',
      component: () => import("@/views/Course/CourseEdit.vue" /* webpackChunkName: "registration" */),
    },
    {
      name: 'Not Found',
      path: '/:pathMatch(.*)*',
      component: () => import("@/views/NotFound.vue" /* webpackChunkName: "not-found" */)
    }
  ]
})


router.beforeEach((to, from, next) => {
  const authStore = stateUser();
  authStore.checkAuth().then(() => {
    if (to.matched.some(record => record.meta.requiresVisitor)) {
      if (JSON.parse(window.localStorage.user)) {
        next('/');
      } else {
        next();
      }
    } else if (to.matched.some(record => record.meta.Auth)) {
      if (JSON.parse(window.localStorage.user)) {
        next();
      } else {
        next('/');
      }
    }
    else {
      next();
    }
  });
})

export default router

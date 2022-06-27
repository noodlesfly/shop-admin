import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home-index',
    component: () => import('@/views/home/HomeIndex.vue')
  },
  {
    path: '/login',
    name: 'login-index',
    component: () => import('@/views/login/LoginIndex.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

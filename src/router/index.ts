import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LayoutIndex from '@/layout/AppLayout.vue'
import ProductRules from './modules/product'
import OrderRules from './modules/order'
import MediaRules from './modules/media'
import PermissionRules from './modules/permission'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { store } from '@/store'

const routes:RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login-index',
    component: () => import('@/views/login/LoginIndex.vue')
  },
  {
    path: '/',
    name: 'layout-index',
    component: LayoutIndex,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'home-index',
        component: () => import('@/views/home/HomeIndex.vue'),
        meta: {
          title: '首页'
        }
      },
      ProductRules,
      OrderRules,
      MediaRules,
      PermissionRules
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !store.state.loginInfo) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath }
    }
  }
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

export default router

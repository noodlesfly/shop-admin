import { RouteRecordRaw, RouterView } from 'vue-router'

const routes:RouteRecordRaw = {
  path: 'media',
  name: 'media',
  component: RouterView,
  children: [
    {
      path: 'media_index',
      name: 'media_index',
      component: () => import('@/views/media/MediaIndex.vue')
    }
  ]
}
export default routes

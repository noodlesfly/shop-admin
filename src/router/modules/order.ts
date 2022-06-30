import { RouteRecordRaw, RouterView } from 'vue-router'

const routes:RouteRecordRaw = {
  path: 'order',
  name: 'order',
  component: RouterView,
  children: [
    {
      path: 'order_list',
      name: 'order_list',
      component: () => import('@/views/order/OrderList.vue')
    }
  ]
}
export default routes

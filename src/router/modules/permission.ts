import { RouteRecordRaw, RouterView } from 'vue-router'

const routes:RouteRecordRaw = {
  path: 'permission',
  name: 'permission',
  component: RouterView,
  children: [
    {
      path: 'permission_admin',
      name: 'permission_admin',
      component: () => import('@/views/permission/admin/AdminIndex.vue')
    },
    {
      path: 'permission_role',
      name: 'permission_role',
      component: () => import('@/views/permission/role/RoleIndex.vue')
    },
    {
      path: 'permission_rule',
      name: 'permission_rule',
      component: () => import('@/views/permission/rule/RuleIndex.vue')
    }
  ]
}
export default routes

import 'vue-router'

declare module 'vue-router' {
  // eslint-disable-next-line
  interface RouteMeta {
    // 是可选的
    title?: string,
    requiresAuth?: boolean
  }
}

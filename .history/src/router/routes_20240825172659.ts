// 对外暴露配置常量路由
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    // 登录成功以后展示数据路由
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    path: '/:pathMath(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]

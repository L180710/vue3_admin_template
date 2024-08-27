// 对外暴露配置常量路由
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录', // 菜单标题
    },
  },
  {
    // 登录成功以后展示数据路由
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: 'layout', // 菜单标题
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页', // 菜单标题
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404', // 菜单标题
    },
  },
  {
    path: '/:pathMath(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由', // 菜单标题
    },
  },
]

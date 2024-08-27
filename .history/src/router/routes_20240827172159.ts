// 对外暴露配置常量路由
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hidden: true, // 代表路由菜单标题在菜单中是否隐藏 true-隐藏  false-显示
    },
  },
  {
    // 登录成功以后展示数据路由
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: 'layout',
      hidden: false,
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/ceshi',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '测试',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
    },
  },
  {
    path: '/:pathMath(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
    },
  },
]

// 对外暴露配置常量路由
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hidden: false, // 代表路由菜单标题在菜单中是否隐藏 true-隐藏  false-显示
      icon: 'Promotion', // 菜单文字左侧的图标，支持 element-plus 全部图标
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
      icon: 'Avatar',
    },
    children: [
      // {
      //   path: '/home',
      //   component: () => import('@/views/home/index.vue'),
      //   meta: {
      //     title: '首页',
      //     hidden: false,
      //     icon: 'HomeFilled',
      //   },
      // },
      // {
      //   path: '/ceshi',
      //   component: () => import('@/views/home/index.vue'),
      //   meta: {
      //     title: '测试',
      //     hidden: false,
      //     icon: 'Histogram',
      //   },
      // },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: false,
      icon: 'DocumentDelete',
    },
  },
  {
    path: '/:pathMath(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: false,
      icon: 'DataLine',
    },
  },
]

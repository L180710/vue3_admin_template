// 通过 vue-router 插件实现模版路由配置
import { createRouter, createWebHashHistory } from 'vue-router'

// 创建路由器
let router = createRouter({
  // 路由模式 hash
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      name: 'login',
    },
    {
      // 登录成功以后展示数据路由
      path: '/home',
      component: () => import('@/views/home/index.vue'),
      name: 'home',
    },
    {
      path: '/404',
      component: () => import('@/views/404/index.vue'),
      name: '404',
    },
  ],
})

export default router

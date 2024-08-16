// 通过 vue-router 插件实现模版路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import {constantRoute} from './routes'

// 创建路由器
let router = createRouter({
  // 路由模式 hash
  history: createWebHashHistory(),
  routes: ,
})

export default router

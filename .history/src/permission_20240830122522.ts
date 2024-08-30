// 路由鉴权：鉴权，项目中路由能不能被访问的权限设置（某一个路由什么条件下可以访问，什么条件下不可以访问）
import router from '@/router'
// 引进进度条和样式
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 获取用户相关的小仓库内部 token 数据，去判断用户是否登录成功
import useUserStore from './store/modules/user'
import pinia from './store'
let useStore = useUserStore(pinia)
console.log('332', useStore)

// 全局守卫：项目中任意路由切换都会触发的钩子
// 全局前置守卫
router.beforeEach((to: any, from: any, next: any) => {
  // to: 你将来要访问哪个路由
  // from：你从哪个路由来
  // next：路由的放行函数
  nprogress.start()
  next()
})

// 全局后置守卫
router.afterEach((to: any, from: any) => {
  nprogress.done()
})

// 第一个问题：任意路由切换实现进度条业务 --progress
// 第二个问题：路由鉴权（路由组件访问权限的设置）
// 全部路由组件：登录 | 404 | 任意路由 | 首页 | 数据大屏 | 权限管理（三个子路由）| 商品管理（四个子路由）

// 用户未登录：可以访问 login，其余路由不能访问（指向 login）
// 用户登录成功：不可以访问 login【指向首页】，其余的路由可以访问

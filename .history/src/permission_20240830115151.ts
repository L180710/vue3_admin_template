// 路由鉴权：鉴权，项目中路由能不能被访问的权限设置（某一个路由什么条件下可以访问，什么条件下不可以访问）
import router from '@/router'

// 全局守卫：项目中任意路由切换都会触发的钩子
// 全局前置守卫
router.beforeEach((to: any, from: any, next: any) => {
  // to: 你将来要访问哪个路由
  // from：你从哪个路由来
  // next：路由的放行函数
  console.log(to)
  console.log(from)
  next()
})

// 全局后置守卫
router.afterEach((to: any, from: any) => {})

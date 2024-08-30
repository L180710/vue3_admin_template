// 路由鉴权：鉴权，项目中路由能不能被访问的权限设置（某一个路由什么条件下可以访问，什么条件下不可以访问）
import router from '@/router'
console.log(123)

// 全局守卫：项目中任意路由切换都会触发的钩子
// 全局前置守卫
router.beforeEach((to: any, from: any, next: any) => {})

// 全局后置守卫
router.afterEach((to: any, from: any) => {})

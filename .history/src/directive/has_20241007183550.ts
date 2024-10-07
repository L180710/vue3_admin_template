import pinia from '@/store'
import useUserStore from '@/store/modules/user'
let userStore = useUserStore(pinia)
export const isHasButton = (app: any) => {
  // 全局自定义指令： 实现按钮的权限
  app.directive('has', {
    mounted(el: any, options: any) {
      console.log(el)
      console.log(options)
    },
  })
}

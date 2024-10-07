import pinia from '@/store'
// 获取对应的用户仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore(pinia)
export const isHasButton = (app: any) => {
  // 全局自定义指令： 实现按钮的权限
  app.directive('has', {
    // 代表使用这个全局自定义指令的 DOM | 组件挂载完毕的时候会执行一次
    mounted(el: any, options: any) {
      // 自定义指令右侧的数值：如果用户信息 buttons 数组当中没有,从 DOM 树删除
      if (!userStore.buttons.includes(options.value)) {
        el.parentNode.removeChild(el)
      }
    },
  })
}

export const isHasButton = (app: any) => {
  // 全局自定义指令： 实现按钮的权限
  app.directive('has', {
    mounted() {
      console.log('1321321321')
    },
  })
}

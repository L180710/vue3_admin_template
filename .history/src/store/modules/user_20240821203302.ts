// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
import { relLogin } from '@/api/user'
// 创建用户小仓库
let useUserStore = defineStore('User', {
  // 小仓库存储数据地方
  state: () => {
    return {}
  },
  // 异步 | 逻辑的地方
  actions: {
    // 用户登录的方法
    userLogin() {
      console.log('32')
    },
  },
  getters: {},
})

export default useUserStore

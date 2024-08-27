// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin } from '@/api/user'
// 引入数据类型
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
// 引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
// 引入路由（常量路由）
import { constantRoute } from '@/router/routes'
// 创建用户小仓库
let useUserStore = defineStore('User', {
  // 小仓库存储数据地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(), // 用户唯一标识 token
      menuRoutes: constantRoute,
    }
  },
  // 异步 | 逻辑的地方
  actions: {
    // 用户登录的方法
    async userLogin(data: loginForm) {
      let result: loginResponseData = await reqLogin(data)
      // 登录请求：成功 200 -> token
      // 登录请求：失败 201 -> 登录失败错误的信息
      if (result.code === 200) {
        // pinia 仓库存储一下 token
        // 由于 pinia | vuex 存储数据其实利用 js 对象
        this.token = result.data.token as string
        // 本地存储持久化存储一份
        SET_TOKEN(result.data.token as string)
        // 能保证当前 async 函数返回一个成功的 promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore

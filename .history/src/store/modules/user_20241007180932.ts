// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user'
import type {
  loginFormData,
  loginResponseData,
  userInfoResponseData,
} from '@/api/user/type'
import type { UserState } from './types/type'
// 引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOEKN } from '@/utils/token'
// 引入路由（常量路由）
import { constantRoute } from '@/router/routes'
// 创建用户小仓库
let useUserStore = defineStore('User', {
  // 小仓库存储数据地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(), // 用户唯一标识 token
      menuRoutes: constantRoute, // 仓库存储生成菜单需要数组（路由）
      username: '',
      avatar: '',
      buttons: [],
    }
  },
  // 异步 | 逻辑的地方
  actions: {
    // 用户登录的方法
    async userLogin(data: loginFormData) {
      let result: loginResponseData = await reqLogin(data)
      // 登录请求：成功 200 -> token
      // 登录请求：失败 201 -> 登录失败错误的信息
      if (result.code === 200) {
        // pinia 仓库存储一下 token
        // 由于 pinia | vuex 存储数据其实利用 js 对象
        this.token = result.data as string
        // 本地存储持久化存储一份
        SET_TOKEN(result.data as string)
        // 能保证当前 async 函数返回一个成功的 promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data))
      }
    },
    // 获取用户信息方法
    async userInfo() {
      // 获取用户信息进行存储仓库当中[用户头像、名字]
      let result: userInfoResponseData = await reqUserInfo()
      // 如果获取用户信息成功，存储一下用户信息
      if (result.code == 200) {
        this.username = result.data.name
        this.avatar = result.data.avatar
        this.buttons = result.data.buttons
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    // 退出登录
    async userLogout() {
      let result = await reqLogout()
      if (result.code == 200) {
        // 目前没有 mock 接口：退出登录接口(通知服务器本地用户唯一标识失效)
        this.token = ''
        this.username = ''
        this.avatar = ''
        REMOVE_TOEKN()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  },
  getters: {},
})

export default useUserStore

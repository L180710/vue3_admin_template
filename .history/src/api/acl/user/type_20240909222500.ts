// 账户信息的 ts 类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

// 代表一个账户信息的 ts 类型
export interface User {
  id?: number
  createTime: string
  updateTime: string
  username?: string
  password?: string
  name?: string
  phone: null
  roleName: string
}

// 数组包含全部的用户信息
export type Records = User[]

// 获取全部用户信息接口返回的数据 ts 类型
export interface UserResponseData extends ResponseData {}

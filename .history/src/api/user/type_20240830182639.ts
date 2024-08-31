// 定义用户数据的 ts 类型
export interface loginFormData {
  username: string
  password: string
}

// 定义全部接口返回数据都拥有 ts 类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

// 定义登录接口返回数据类型
export interface loginResponseData extends ResponseData {
  data: string
}

// 定义获取用户信息返回数据类型
export interface userInfoResponseData extends ResponseData {
  code: 200
  message: '成功'
  data: {
    routes: ['aaa', 'test-2', 'User', 'Category', 'Sku']
    buttons: ['22223333444', 'btn.Trademark.search']
    roles: ['超级管理员']
    name: 'admin'
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
  }
}

// // 登录接口需要携带参数 ts 类型
// export interface loginForm {
//   username: string
//   password: string
// }

// interface dataType {
//   token?: string
//   message?: string
// }

// // 登录接口返回数据类型
// export interface loginResponseData {
//   code: number
//   data: dataType
// }

// interface userInfo {
//   userId: number
//   avatar: string
//   username: string
//   password: string
//   desc: string
//   roles: string[]
//   buttons: string[]
//   routes: string[]
//   token: string
// }

// // 定义服务器返回用户信息相关的数据类型
// interface user {
//   checkUser: userInfo
// }

// export interface userResponseData {
//   code: number
//   data: user
// }

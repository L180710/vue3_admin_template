// 登录接口需要携带参数 ts 类型
export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token: string
}

// 登录接口返回数据类型
export interface loginResponseData {
  code: number
  data: dataType
}

interface userInfo {
  userId: 1
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
  username: 'admin'
  password: '111111'
  desc: '平台管理员'
  roles: ['平台管理员']
  buttons: ['cuser.detail']
  routes: ['home']
  token: 'Admin Token'
}

// 定义服务器返回用户信息相关的数据类型
interface user {
  checkUser: userInfo
}

export interface userResponseData {
  code: number
  data: user
}

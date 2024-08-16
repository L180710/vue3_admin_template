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

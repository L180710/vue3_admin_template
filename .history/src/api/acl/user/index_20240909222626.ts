// 用户管理模块接口
import request from '@/utils/request'
import type { UserResponseData } from './type'
// 枚举地址
enum API {
  // 获取全部已有用户账户信息
  ALLUSER_URL = '/admin/acl/user/',
}
//  获取用户账户信息的接口
export const reqUserInfo = (page: number, limit: number) =>
  request.get<any, UserResponseData>(API.ALLUSER_URL + `${page}/${limit}`)

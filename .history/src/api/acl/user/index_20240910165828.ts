// 用户管理模块接口
import request from '@/utils/request'
import type { UserResponseData, User } from './type'
// 枚举地址
enum API {
  // 获取全部已有用户账户信息
  ALLUSER_URL = '/admin/acl/user/',
  // 添加一个新的用户账号
  ADDUSER_URL = '/admin/acl/user/save',
  // 更新已有的用户账户
  UPDATEUSER_URL = '/admin/acl/user/update',
  // 获取全部职位，当前账户拥有的职位接口
  ALLROLE_URL = '/admin/acl/user/toAssign/',
}

//  获取用户账户信息的接口
export const reqUserInfo = (page: number, limit: number) =>
  request.get<any, UserResponseData>(API.ALLUSER_URL + `${page}/${limit}`)

// 添加用户与更新已有的用户接口
export const reqAddOrUpdateUser = (data: User) => {
  // 鞋带参数有 ID 更新
  if (data.id) {
    return request.put<any, any>(API.UPDATEUSER_URL, data)
  } else {
    return request.post<any, any>(API.ADDUSER_URL, data)
  }
}

// 获取全部职位以及包含当前用户的已有职位
export const reqAllRole = (userId: number) =>
  request.get<any, any>(API.ALLROLE_URL + userId)

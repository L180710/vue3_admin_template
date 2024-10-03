// 角色管理模块的接口
import request from '@/utils/request'
import type { RoleResponseData } from './type'
// 枚举地址
enum API {
  // 获取全部的职位接口
  ALLROLE_URL = '/admin/acl/role/',
  // 新增岗位接口地址
  ADDROLE_URL = '/admin/acl/role/save',
  // 更新已有的职位
  UPDATEROLE_URL = '/admin/acl/role/update',
}
// 获取全部的角色
export const reqAllRoleList = (page: number, limit: number, roleName: string) =>
  request.get<any, RoleResponseData>(
    API.ALLROLE_URL + `${page}/${limit}/?roleName = ${roleName}`,
  )

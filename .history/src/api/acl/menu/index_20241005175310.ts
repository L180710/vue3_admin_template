import request from '@/utils/request'
import type { PermissionResponseData } from './type'
// 枚举地址
enum API {
  // 获取全部菜单与按钮标识数据
  ALLPERMISSION_URL = '/admin/acl/permission',
  // 更新某一个已有的菜单
  UPDATE_URL = '/admin/acl/permission/update',
}

// 获取菜单数据
export const reqAllPermission = () =>
  request.get<any, PermissionResponseData>(API.ALLPERMISSION_URL)

// 添加与更新菜单的方法

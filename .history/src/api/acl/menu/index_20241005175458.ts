import request from '@/utils/request'
import type { PermissionResponseData } from './type'
// 枚举地址
enum API {
  // 获取全部菜单与按钮标识数据
  ALLPERMISSION_URL = '/admin/acl/permission',
  // 给某一级菜单新增一个子菜单
  ADDMENU_URL = '/admin/acl/permission/save',
  // 更新某一个已有的菜单
  UPDATE_URL = '/admin/acl/permission/update',
}

// 获取菜单数据
export const reqAllPermission = () =>
  request.get<any, PermissionResponseData>(API.ALLPERMISSION_URL)

// 添加与更新菜单的方法
export const reqAddOrUpdateMenu = (date: any) => {
  if (data.id) {
    return request.put(API.UPDATE_URL, data)
  } else {
    return request.post(API.ADD)
  }
}

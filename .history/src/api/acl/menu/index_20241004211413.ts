import request from '@/utils/request'
// 枚举地址
enum API {
  // 获取全部菜单与按钮标识数据
  ALLPERMISSION_URL = '/admin/acl/permission',
}

// 获取菜单数据
export const reqAllPermission = () =>
  request.get<any, PermissionResponseData>(API.ALLPERMISSION_URL)

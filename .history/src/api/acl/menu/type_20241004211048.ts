// 数据类型定义
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

// 菜单数据与按钮数据 ts 类型
export interface Permission {
  id?: number
  createTime: string
  updateTime: string
  pid: number
  name: string
  code: null
  toCode: null
  type: number
  status: null
  level: number
  children?: PermissionList
  select: boolean
}

export type PermissionList = Permission[]

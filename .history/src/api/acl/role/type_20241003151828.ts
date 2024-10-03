export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

// 职位类型
export interface RoleData {
  id?: number
  createTime?: string
  updateTime?: string
  roleName: string
  remark?: null
}

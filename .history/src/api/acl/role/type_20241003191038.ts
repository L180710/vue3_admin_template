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

// 全部职位的数据 ts 类型
export type Records = RoleData[]
// 全部职位数据的相应 ts 类型
export interface RoleResponseData extends ResponseData {
  data: {
    records: Records
    total: number
    size: number
    current: number
    orders: []
    optimizeCountSql: boolean
    hitCount: boolean
    coundId: null
    maxLimit: null
    searchCount: boolean
    pages: number
  }
}

// 菜单与按钮数据 ts 类型
export interface MenuData {
  id: number
  createTime: string
  updateTime: string
  pid: number
  name: string
  code: string
  toCode: string
  type: number
  status: null
  level: number
  children: []
  select: boolean
}

export type MenuList = MenuData[]

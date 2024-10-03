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
    coundId: string | number
    maxLimit: number
    searchCount: boolean
    pages: number
  }
}

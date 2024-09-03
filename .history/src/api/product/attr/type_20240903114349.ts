// 分类相关数据 TS 类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

// 分类 ts 类型
export interface CategoryObj {
  id: number | string
  name: string
  category1Id?: number
  category2Id?: number
}

// 相应的分类接口返回数据类型
export interface CategoryResponseData extends ResponseData {
  data: CategoryObj[]
}

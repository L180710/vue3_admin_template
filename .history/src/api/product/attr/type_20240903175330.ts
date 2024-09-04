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

// 属性与属性值的 ts 类型
// 属性值对象的 ts 类型
export interface AttrValue {
  id?: number
  valueName: string
  attrId?: number
}

// 存储每一个属性值数组类型
export type AttrValueList = AttrValue[]
// 属性对象
export interface Attr {
  id?: number
  attrName: string
  categoryId: number
  categoryLevel: number
  attrValueList: []
}
// 存储每一个属性对象数组 ts 类型
export type AttrList = Attr[]
// 属性接口返回的数据 ts 类型
export interface AttrResponseData extends ResponseData {
  data: Attr[]
}

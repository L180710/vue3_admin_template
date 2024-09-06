// 服务器全部接口返回的数据类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

// SPU 数据的 ts 类型
export interface SpuData {
  id?: number
  spuName: string
  tmId: number | string
  description: string
  category3Id: string | number
  spuImageList: null | SpuImg[]
  spuSaleAttrList: null | SaleAttr[]
}

// 数组：元素都是已有 SPU 数据类型
export type Records = SpuData[]

// 定义获取已有的 SPU 接口返回的数据 ts 类型
export interface HasSpuResponseData extends ResponseData {
  data: {
    records: Records
    total: number
    size: number
    current: number
    searchCount: boolean
    pages: number
  }
}

// 品牌数据的 TS 类型
export interface Trademark {
  id: number
  tmName: string
  logoUrl: string
}

// 品牌接口返回的数据 ts 类型
export interface AllTradeMark extends ResponseData {
  data: Trademark[]
}

// 商品图片的 ts 类型
export interface SpuImg {
  id?: number
  imgName?: string
  imgUrl?: string
  createTime?: string
  upateTime?: string
  spuId?: number
  name?: string
  url?: string
}

// 已有的 SPU 图片墙数据类型
export interface SpuHasImg extends ResponseData {
  data: SpuImg[]
}

// 已有的销售属性值对象 ts 类型
export interface SaleAttrValue {
  id?: number
  createTime?: null
  updateTime?: null
  spuId?: number
  baseSaleAttrId: number
  saleAttrValueName: string
  saleAttrName?: string
  isChecked?: null
}

// 存储已有的销售属性值数据类型
export type spuSaleAttrValueList = SaleAttrValue[]

// 销售属性对象 ts 类型
export interface SaleAttr {
  id?: number
  createTime?: null
  updateTime?: null
  spuId?: number
  baseSaleAttrId: number
  saleAttrName: string
  spuSaleAttrValueList: spuSaleAttrValueList
}

// Spu已有的销售属性返回数据 ts 类型
export interface SaleAttrResponseData extends ResponseData {
  data: SaleAttr[]
}

// 已有的全部 SPU 返回数据 TS 类型
export interface HasSaleAttr {
  id: number
  name: string
}

export interface HasSaleAttrResponseData extends ResponseData {
  data: HasSaleAttr[]
}

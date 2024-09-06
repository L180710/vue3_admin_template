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
  description: string
  category3Id: string | number
  tmId: number
  spuSaleAttrList: null
  spuImageList: null
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
export interface AllTradeMark extends ResponseDate {
  data: Trademark[]
}

// 商品图片的 ts 类型
export interface SpuImg {
  id: number
  createTime: string
  upateTime: string
  spuId: number
  imgName: string
  imgUrl: string
}

// 已有的 SPU 图片墙数据类型
export interface SpuHasImg extends ResponseData {
  data: SpuImg[]
}

// 已有的销售属性值对象 ts 类型
export interface SaleAttrValue {
  id?: number
  createTime: null
  updateTime: null
  spuId: number
  baseSaleAttrId: number
  saleAttrValueName: string
  saleAttrName: string
  isChecked: null
}

// 存储已有的销售属性值数据类型
export type spuSaleAttrValueList = SaleAttrValue[]

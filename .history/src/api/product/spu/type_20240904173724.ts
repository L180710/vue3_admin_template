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

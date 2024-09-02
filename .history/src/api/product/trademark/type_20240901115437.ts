export interface ResponseData {
  code: number,
  message: string,
  ok: boolean
}

// 已有的品牌 ts 数据类型
export interface TradeMark {
  id?: number,
  tmName: string,
  logoUrl: string
}


// 包含全部品牌数据的 ts 类型
export type Records = TradeMark[]l

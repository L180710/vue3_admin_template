// SKU 模块接口管理
import request from '@/utils/request'
import type { SkuResponseData } from './type'
// 枚举地址
enum API {
  // 获取已有的商品数据-SKU
  SKU_URL = '/admin/product/list/',
}

// 获取商品 SKU 接口
export const reqSkuList = (page: number, limit: number) =>
  request.get<any, any>(API.SKU_URL + `${page}/${limit}`)

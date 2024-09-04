// SPU 管理模块的接口
import request from '@/utils/request'
import type { HasSpuResponseData } from './type'
enum API {
  // 获取已有的 SPU 的数据
  HASSPU_URL = '/admin/product/',
}
// 获取某一个三级分类下已有的 SPU 数据
export const reqHasSpu = (
  page: number,
  limit: number,
  category3Id: string | number,
) =>
  request.get<any, HasSpuResponseData>(
    API.HASSPU_URL + `${page}/${limit}?category3Id = ${category3Id}`,
  )

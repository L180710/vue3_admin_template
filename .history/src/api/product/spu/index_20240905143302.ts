// SPU 管理模块的接口
import request from '@/utils/request'
import type {
  SpuData,
  HasSpuResponseData,
  AllTradeMark,
  SpuHasImg,
  SaleAttrResponseData,
  HasSaleAttrResponseData,
} from './type'
enum API {
  // 获取已有的 SPU 的数据
  HASSPU_URL = '/admin/product/',
  // 获取全部品牌的数据
  ALLTRADEMARK_URL = '/admin/product/baseTrademark/getTrademarkList',
  // 获取某个 SPU 全部的售卖商品的图片数据
  IMAGE_URL = '/admin/product/spuImageList/',
  // 获取某一个 SPU 下全部已有的销售属性接口地址
  SPUHASSALEATTR_URL = '/admin/product/spuSaleAttrList/',
  // 获取整个项目全部的销售属性[颜色、版本、尺码]
  ALLSALEATTR_URL = '/admin/product/baseSaleAttrList',
  // 追加一个新的 SPU
  ADDSPU_URL = '/admin/product/saveSpuInfo',
  // 更新已有的 SPU
  UPDATESPU_URL = '/admin/product/UpdateSpuInfo',
}
// 获取某一个三级分类下已有的 SPU 数据
export const reqHasSpu = (
  page: number,
  limit: number,
  category3Id: string | number,
) =>
  request.get<any, HasSpuResponseData>(
    API.HASSPU_URL + `${page}/${limit}?category3Id=${category3Id}`,
  )

// 获取全部的 spu 品牌数据
export const reqAllTradeMark = () =>
  request.get<any, AllTradeMark>(API.ALLTRADEMARK_URL)

// 获取某一个已有的 SPU 下全部商品的图片地址
export const reqSpuImageList = (spuId: number) =>
  request.get<any, SpuHasImg>(API.IMAGE_URL + spuId)

// 获取某一个已有的 SPU 拥有多少个销售属性
export const reqSpuHasSaleAttr = (spuId: number) =>
  request.get<any, SaleAttrResponseData>(API.SPUHASSALEATTR_URL + spuId)

// 获取全部销售属性
export const reqAllSaleAttr = () =>
  request.get<any, HasSaleAttrResponseData>(API.ALLSALEATTR_URL)

// 添加一个新的 SPU
// 更新已有的 SPU 接口
// data：即为新增的 SPU 或者已有的 SPU 对象
export const  = (data: SpuData) => {
  // 如果 SPU 对象拥有 ID，更新也有 SPU
  if (data.id) {
    return request.post<any, any>(API.UPDATESPU_URL, data)
  } else {
    return request.post<any, any>(API.ADDSPU_URL, data)
  }
}

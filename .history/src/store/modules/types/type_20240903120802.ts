import type { RouteRecordRaw } from 'vue-router'
import type { CategoryObj } from '@/api/product/attr/type'
// 定义小仓库数据 state 类型
export interface UserState {
  token: string
  menuRoutes: RouteRecordRaw[]
  username: string
  avatar: string
}

// 定义分类仓库 state 对象的 ts 类型
export interface CategoryState {
  c1Id: string | number
  c2Id: string | number
  c1Arr: CategoryObj[]
  c2Arr: CategoryObj[]
  c2Arr: CategoryObj[]
}

import type { RouteRecordRaw } from 'vue-router'
import type { CategoryObj } from '@/api/product/attr/type'
// 定义小仓库数据 state 类型
export interface UserState {
  token: string
  menuRoutes: RouteRecordRaw[]
  username: string
  avatar: string
}

// 定义分类仓库 State 对象的

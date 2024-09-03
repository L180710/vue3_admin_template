// 商品分类全局组件的小仓库
import { defineStore } from 'pinia'
import { reqC1, reqC2 } from '@/api/product/attr'
import type { CategoryResponseData } from '@/api/product/attr/type'
import type { CategoryState } from './types/type'
let useCategoryStore = defineStore('Category', {
  state: (): CategoryState => {
    return {
      // 存储一级分类的数据
      c1Arr: [],
      c1Id: '',
    }
  },
  actions: {
    // 获取一级分类的方法
    async getC1() {
      // 发请求获取一级分类的数据
      let result: CategoryResponseData = await reqC1()
      if (result.code == 200) {
        this.c1Arr = result.data
      }
    },
    // 获取二级分类的数据
    getC2() {
      reqC2()
    },
  },
  getters: {},
})

export default useCategoryStore

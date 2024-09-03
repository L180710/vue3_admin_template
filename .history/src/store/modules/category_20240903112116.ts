// 商品分类全局组件的小仓库
import { defineStore } from 'pinia'
import { reqC1 } from '@/api/product/attr'
let useCategoryStore = defineStore('Category', {
  state: () => {
    return {}
  },
  actions: {
    // 获取一级分类的方法
    async getC1() {
      // 发请求获取一级分类的数据
      await reqC1()
    },
  },
  getters: {},
})

export default useCategoryStore

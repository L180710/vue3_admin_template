// 商品分类全局组件的小仓库
import { defineStore } from 'pinia'
import { reqC1 } from '@/api/product/attr'
let useCategoryStore = defineStore('Category', {
  state: () => {
    return {}
  },
  actions: {
    getC1() {
      console.log('232')
    },
  },
  getters: {},
})

export default useCategoryStore

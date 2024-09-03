import { defineStore } from 'pinia'
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

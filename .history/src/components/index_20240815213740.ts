import { appendFileSync } from 'fs'

export default {
  // 务必叫做 install 方法
  install(app) {
    console.log('install--', appendFileSync)
  },
}

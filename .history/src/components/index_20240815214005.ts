import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

const allGlobalComponent = { SvgIcon, Pagination }

export default {
  // 务必叫做 install 方法
  install(app) {
    console.log('install--', app)
  },
}

import { createApp } from 'vue'
import App from './App.vue'
// 引入 element-plus 插件与样式
import ElementPlus from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
// 获取应用实例对象
const app = createApp(App)
// 安装 element-plus 插件
app.use(ElementPlus)
// 将应用挂载到挂载点上
app.mount('#app')

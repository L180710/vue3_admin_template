import { createApp } from 'vue'
import App from '@/App.vue'
// 引入 element-plus 插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入模版全局的样式
import '@/styles/index.scss'
// svg 插件需要配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components'
// 配置 element-plus 国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 引入路由
import router from './router'
// 获取应用实例对象
const app = createApp(App)
// 安装 element-plus 插件
app.use(ElementPlus, {
  locale: zhCn, // element-plus 国际化配置
})

// 安装自定义插件
app.use(globalComponent)

// 将应用挂载到挂载点上
app.mount('#app')

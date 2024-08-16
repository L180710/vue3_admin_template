// 进行 axios 二次封装：使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 第一步：利用 axios 对象的 create 方法，创建 axios 实例（其它的配置：基础路径、超时时间）
let request = axios.create({
  // 基础路径，携带 api
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时的时间设置
  timeout: 5000,
})

// 第二步： request 实例添加请求与响应式拦截器
request.interceptors.request.use((config) => {
  // config 配置对象，headers 属性请求头，经常给服务器端携带公共参数
  return config
})

// 第三步：响应式拦截器
request.interceptors.response.use(
  (response) => {
    // 成功回调
    // 简化数据
    return response.data
  },
  (error) => {
    // 失败回调：处理 http 网络错误
    // 定义一个变量：存储网络错误信息
    let message = ''
  },
)

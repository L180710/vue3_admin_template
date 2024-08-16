// 进行 axios 二次封装：使用请求与响应拦截器
import axios from 'axios'

// 第一步：利用 axios 对象的 create 方法，创建 axios 实例（其它的配置：基础路径、超时时间）
let request = axios.create({
  // 基础路径，携带 api
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时的时间设置
  timeout: 5000,
})

// 第二步： request 实例添加请求与响应式拦截器
request.interceptors.request.use((config) => {
  return config
})

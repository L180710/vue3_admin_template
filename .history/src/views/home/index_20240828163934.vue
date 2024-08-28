<template>
  <div>
    <h1>我是一级路由登录成功展示</h1>
  </div>
</template>

<script setup lang='ts'>
// 引入组合式 API 函数之生命周期函数
import { onMounted } from 'vue';
// 获取仓库
import useUserStore from '@/store/modules/user';
let useUserStore = useUserStore();
// 目前首页挂载完毕发请求获取用户信息
onMounted(() => {
  useUserStore.userInfo()
})
</script>

<style scoped lang='scss'></style>
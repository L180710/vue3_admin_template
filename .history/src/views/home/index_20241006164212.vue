<template>
  <div>
    <h1>我是一级路由登录成功展示</h1>
  </div>
</template>

<script setup lang='ts'>
// 引入用户相关的仓库，获取当前用户头像、昵称
import useUserStore from '@/store/modules/user';
// 获取存储用户信息的仓库对象
let userStore = useUserStore();
</script>

<style scoped lang='scss'></style>
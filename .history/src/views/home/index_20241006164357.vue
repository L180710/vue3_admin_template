<template>
  <el-card class="box">
    <img :src="userStore.avatar" alt="" class="avatar">
  </el-card>
</template>

<script setup lang='ts'>
// 引入用户相关的仓库，获取当前用户头像、昵称
import useUserStore from '@/store/modules/user';
// 获取存储用户信息的仓库对象
let userStore = useUserStore();
</script>

<style scoped lang='scss'></style>
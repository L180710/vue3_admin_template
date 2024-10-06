<template>
  <el-card>
    <div class="box">
      <img :src="userStore.avatar" alt="用户头像" class="avatar">
      <div class="title">
        <h3>{{ getTime() }}你好呀， {{ userStore.username }}</h3>
      </div>
    </div>
  </el-card>
</template>

<script setup lang='ts'>
// 引入用户相关的仓库，获取当前用户头像、昵称
import useUserStore from '@/store/modules/user';
import { getTime } from '@/utils/time';
// 获取存储用户信息的仓库对象
let userStore = useUserStore();
</script>

<style scoped lang='scss'></style>
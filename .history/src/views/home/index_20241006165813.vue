<template>
  <el-card>
    <div class="box">
      <img :src="userStore.avatar" alt="用户头像" class="avatar">
      <div class="bottom">
        <h3 class="title">{{ getTime() }}你好呀， {{ userStore.username }}</h3>
        <p class="subtitle">硅谷甄选运营平台</p>
      </div>
    </div>
  </el-card>
  <div class="bottom">
    <svg-icon name="welcome" width="500px" height="500px"></svg-icon>
  </div>
</template>

<script setup lang='ts'>
// 引入用户相关的仓库，获取当前用户头像、昵称
import useUserStore from '@/store/modules/user';
import { getTime } from '@/utils/time';
// 获取存储用户信息的仓库对象
let userStore = useUserStore();
</script>

<style scoped lang='scss'>
.box {
  display: flex;

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .bottom {
    margin-left: 20px;

    .title {
      margin-bottom: 30px;
      font-size: 30px;
      font-weight: 900;
    }

    .subtitle {
      font-style: italic;
      color: skyblue
    }
  }
}
</style>
<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang='ts'>
// 引入设置标题与 logo 配置文件
import setting from '@/setting';
</script>

<style scoped lang='scss'>
.logo {
  display: flex;
  width: 100%;
  height: $base-menu-logo-height;
  align-items: center;
  padding: 20px;


  img {
    width: 40px;
    height: 40px;
  }

  p {
    text-indent: 10px;
    font-size: $base-logo-title-fontsize;
    color: #fff;
  }
}
</style>
<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px" @click="changIcon">
    <component :is="fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
export default {
  name: 'Layout'
}
</script>
<script setup lang='ts'>
import { ref } from 'vue';
// 定义一个响应式数据控制图标切换，用于控制菜单折叠还是打开图标切换的变量
let fold = ref(false);
//点击图标的方法
const changIcon = () => {
  fold.value = !fold.value;
}
</script>

<style scoped lang='scss'></style>
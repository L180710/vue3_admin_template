<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px" @click="changIcon">
    <component :is="useLayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
export default {
  name: 'Breadcrumb'
}
</script>
<script setup lang='ts'>
import { ref } from 'vue';
import useLayOutSettingStore from '@/store/modules/setting';
// 获取 layout 配置相关的仓库
let useLayOutSettingStore = useLayOutSettingStore()
//点击图标的方法
const changIcon = () => {
  useLayOutSettingStore.fold = !useLayOutSettingStore.fold;
}
</script>

<style scoped lang='scss'></style>

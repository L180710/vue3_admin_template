<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px" @click="changIcon">
    <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <!-- 面包动态展示路由名字与标题 -->
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    <button @click="handler">获取匹配路由</button>
  </el-breadcrumb>
</template>

<script lang="ts">
export default {
  name: 'Breadcrumb'
}
</script>
<script setup lang='ts'>
import { useRoute } from 'vue-router';
import useLayOutSettingStore from '@/store/modules/setting';
// 获取 layout 配置相关的仓库
let LayOutSettingStore = useLayOutSettingStore()
// 获取路由对象
let $route = useRoute();
//点击图标的方法
const changIcon = () => {
  LayOutSettingStore.fold = !LayOutSettingStore.fold;
}

const handler = () => {
  console.log("$route", $route)
}
</script>

<style scoped lang='scss'></style>

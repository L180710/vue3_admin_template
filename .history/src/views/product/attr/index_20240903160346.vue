<template>
  <!-- 三级分类全局组件 -->
  <Category />
  <el-card style="margin: 10px 0">
    <el-button type="primary" size="default" icon="Plus" :disabled="categoryStore.c3Id ? false : true">添加属性</el-button>
    <el-table border style="margin: 10px 0">
      <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
      <el-table-column label="属性名称" width="120px"></el-table-column>
      <el-table-column label="属性值名称"></el-table-column>
      <el-table-column label="操作" width="120px"></el-table-column>
    </el-table>
  </el-card>
</template>

<script setup lang='ts'>
// 组合式 API 函数 watch
import { watch } from 'vue';
// 引入获取已有属性与属性值接口
import { reqAttr } from '@/api/product/attr';
// 获取分类仓库
import useCategoryStore from '@/store/modules/category';
let categoryStore = useCategoryStore();
</script>

<style scoped lang='scss'></style>
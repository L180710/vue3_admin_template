<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <template>
      <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" />
    </template>
  </div>
</template>

<script setup lang='ts'>
  // 引入图标组件
  import { Plus } from '@element-plus/icons-vue'
</script>

<style scoped>
</style>
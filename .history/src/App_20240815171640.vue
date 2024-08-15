<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <test />
  </div>
</template>

<script setup lang='ts'>
  // 引入图标组件
  import { Plus } from '@element-plus/icons-vue'
  import Test from '@/components/Test.vue';
</script>

<style scoped>
</style>
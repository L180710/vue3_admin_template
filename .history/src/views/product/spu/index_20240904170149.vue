<template>
  <div>
    <!-- 三级分类 -->
    <category :scene="scene"></category>
    <el-card style="margin: 10px 0">
      <el-button type="primary" size="default" icon="Plus">添加SPU</el-button>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
// 场景数据
let scene = ref<number>(0);
</script>

<style scoped lang='scss'></style>
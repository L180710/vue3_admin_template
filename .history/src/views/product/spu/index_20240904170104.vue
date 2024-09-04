<template>
  <div>
    <!-- 三级分类 -->
    <category :scene="scene"></category>
    <el-card style="marign: 10px 0"></el-card>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
// 场景数据
let scene = ref<number>(0);
</script>

<style scoped lang='scss'></style>
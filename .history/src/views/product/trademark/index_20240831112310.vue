<template>
  <div>
    <el-card class="box-card">
      <!-- 卡片顶部添加品牌按钮 -->
      <el-button type="primary" size="default" @click="">添加品牌</el-button>
      <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    </el-card>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'></style>
<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <!-- 顶部左侧静态 -->
      <el-icon>
        <Expand />
      </el-icon>
      <!-- 左侧面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item> </el-breadcrumb-item>
        <el-breadcrumb-item> </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tabbar_right">
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.tabbar {
  width: 100%;
  height: 100%;
}
</style>
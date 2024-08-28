<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <!-- 顶部左侧静态 -->
      <el-icon style="margin-right: 10px">
        <Expand />
      </el-icon>
      <!-- 左侧面包屑 -->
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tabbar_right">
      <el-button type="primary" size="small" icon="Refresh" circle></el-button>
      <el-button type="primary" size="small" icon="FullScreen" circle></el-button>
      <el-button type="primary" size="small" icon="Setting" circle></el-button>
      <img src="../../../public/logo.png" </div>?
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.tabbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 20px;

  .tabbar_left {
    display: flex;
    align-items: center;
  }
}
</style>
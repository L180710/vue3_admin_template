<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">qw</div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar">w</div>
    <!-- 内容展示区域 -->
    <div class="layout_main">www</div>
  </div>
</template>

<script setup lang='ts'>

</script>


<style scoped lang='scss'>
.layout_container {
  width: 100%;
  height: 100vh;
  background: red;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background
  }

  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: cyan
  }
}
</style>

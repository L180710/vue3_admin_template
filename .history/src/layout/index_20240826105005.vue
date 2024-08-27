<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo />
      <!-- 展示菜单 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu class="menu" background-color="#001529" text-color="#Fff">
          <span>Navigator Two</span>
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">数据大屏</el-menu-item>
          <!-- 折叠菜单 -->
          <el-sub-menu index="3">
            <template #title><span>权限管理</span></template>
            <el-menu-item index="3-1">用户管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
            <el-menu-item index="3-3">菜单管理</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar">w</div>
    <!-- 内容展示区域 -->
    <div class="layout_main">
      <p style="height: 10000px;background:red">content</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Logo from './logo/index.vue';


</script>


<style scoped lang='scss'>
.layout_container {
  width: 100%;
  height: 100vh;
  background: #00ff;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    color: #fff;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
    }
  }

  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: cyan
  }

  .layout_main {
    position: absolute;
    overflow: auto;
    top: $base-tabbar-height;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    padding: 20px;
    background: green;
  }
}
</style>

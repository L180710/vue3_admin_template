<template>
  <div>
    {{ menuList }}
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
  </div>
</template>

<script setup lang='ts'>
// 获取父组件传递过来的全部路由数组
defineProps(['menuList'])
</script>

<style scoped lang='scss'></style>
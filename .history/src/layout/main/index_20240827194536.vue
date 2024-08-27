<template>
  <!-- 路由组件出口的位置 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染 layout 一级路由组件的子路由 -->
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.fade-enter {}

.fade-enter-active {}

.fade-enter-to {}
</style>
<template>
  <div class="container">
    <!-- 数据大屏展示内容区域 -->
    <div class="screen">
      <div class="top">顶部</div>
      <div class="bottom">
        <div class="left">左侧</div>
        <div class="left">中间</div>
        <div class="left">右侧</div>
      </div>
    </div>

  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.container {
  width: 100vw;
  height: 100vh;
  background: url('./images/bg.png') no-repeat;
  background-size: cover;

  .screen {
    position: fixed;
    width: 1920px;
    height: 1080px;
    background: red;
  }
}
</style>
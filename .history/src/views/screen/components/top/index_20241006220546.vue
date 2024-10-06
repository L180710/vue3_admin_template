<template>
  <div class="top">
    <div class="left">
      <span class="btn">123</span>
    </div>
    <div class="center">123</div>
    <div class="right"></div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.top {
  display: flex;
  width: 100%;
  height: 40px;

  .left {
    flex: 1 background: url(../../images/dataScreen-header-left-bg.png) no-repeat';

  }

  .center {
    flex: 2
  }

  .right {
    flex: 1
  }
}
</style>
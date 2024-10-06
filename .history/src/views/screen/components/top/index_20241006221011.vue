<template>
  <div class="top">
    <div class="left">
      <span class="btn">首页</span>
    </div>
    <div class="center">
      <div>智慧旅游可视化大数据平台</div>
    </div>
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
    flex: 1;
    background: url(../../images/dataScreen-header-left-bg.png) no-repeat;
    background-size: cover;

    .btn {
      float: right;
      width: 150px;
      height: 40px;
      background: url(../../images/dataScreen-header-btn-bg-l.png) no-repeat;
      background-size: 100% 100%;
      font-size: 20px;
      text-align: center;
      line-height: 40px;
      color: #29fcff;
    }
  }

  .center {
    flex: 2
  }

  .right {
    flex: 1
  }
}
</style>
<template>
  <div class="top">
    <div class="left">
      <span class="lbtn">首页</span>
    </div>
    <div class="center">
      <div class="title">智慧旅游可视化大数据展示平台</div>
    </div>
    <div class="right">
      <span class="rbtn">统计报告</span>
      <span>当前时间2023年5月3日11：:5:57</span>
    </div>
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

    .lbtn {
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
    flex: 2;

    .title {
      width: 100%;
      height: 74px;
      background: url(../../images/dataScreen-header-center-bg.png) no-repeat;
      background-size: 100% 100%;
      text-align: center;
      line-height: 74px;
      color: #29fcff;
    }
  }

  .right {
    flex: 1;
    background: url(../../images/dataScreen-header-left-bg.png) no-repeat;
    background-size: cover;

    .rbtn {
      float: right;
      width: 150px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background: url(../../images/dataScreen-header-btn-bg-r.png) no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
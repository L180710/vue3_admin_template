<template>
  <div class="box">
    <div class="top">
      <p class="title">实时游客统计</p>
      <p class="bg"></p>
      <p class="right">可预约总量<span>9999</span></p>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.box {
  margin-top: 10px;
  background: url(../../images/dataScreen-main-lt.png) no-repeat;
  background-size: 100% 100%;

  .top {
    margin-left: 20px;


    .title {
      font-size: 20px;
      color: #fff;
    }

    .bg {
      width: 68px;
      height: 7px;
      margin-top: 10px;
      background: url(../../images/dataScreen-title.png) no-repeat;
      background-size: 100% 100%;
    }

    .right {
      float: right;
      font-size: 20px;
      color: #fff;

      span {
        color: yellowgreen;
      }
    }
  }
}
</style>
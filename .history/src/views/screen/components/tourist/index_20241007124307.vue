<template>
  <div class="box">
    <div class="top">
      <p class="title">实时游客统计</p>
      <p class="bg"></p>
      <p class="right">可预约总量<span>9999</span>人</p>
    </div>
    <div class="number">
      <span v-for="(item, index) in people" :key="index">{{ item }}</span>
    </div>
    <!-- echart 展示图形图标节点 -->
    <div class="echarts">123</div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
let people = ref('12345人');
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
        flex: 1;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: url(../../images/total.png) no-repeat;
        background-size: 100% 100%;
        color: #29fcff;
      }
    }
  }
}
</style>
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
    <div ref="charts" class="echarts">123</div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';
let people = ref('12345人');
// 获取节点
let charts = ref();

onMounted(() => {
  // 获取 echarts 类的实例
  let mycharts = echarts.init(charts.value);
  // 设置实例配置项
  mycharts.setOption({
    // 标题组件
    title: {
      text: {
        text: '水球图'
      },
      // x 轴组件
      xAxis: {},
      yAxis: {},
      // 系列：决定你展示什么样图形图标
      series: {
        type: 'ilquidFill',

        data: [0.6, 0.4, 0.2],
        waveAnimation: true,
        animationDuration: 3,
        animationDurationUpdate: 0,

        outline: {
          show: true,
          borderDistance: 8,
          itemStyle: {
            color: 'none',
            borderColor: '#294D99',
            borderWidth: 8,
            shadowBlur: 20,
            shadowColor: 'rgba(0, 0, 0, 0.25)'
          }
        },

      },
      // 布局组件
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0

      }
    }
  })
})

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


    }
  }

  .number {
    display: flex;
    margin-top: 30px;
    padding: 20px;

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

  .echarts {
    width: 100%;
    height: 240px;
  }
}
</style>
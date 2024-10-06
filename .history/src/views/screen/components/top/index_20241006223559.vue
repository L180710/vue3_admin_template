<template>
  <div class="top">
    <div class="left">
      <span class="lbtn" @click="goHome">首页</span>
    </div>
    <div class="center">
      <div class="title">智慧旅游可视化大数据展示平台</div>
    </div>
    <div class="right">
      <span class="rbtn">统计报告</span>
      <span class="time">当前时间{{ time }}</span>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, onUnmounted } from 'vue';
// 点击首页按钮回到首页
import { useRouter } from 'vue-router';
import moment from 'moment';
// 存储当前时间
let time = ref(moment().format('YYYY年MM月DD日 hh:mm:ss'));
let timer = ref(0);
// 获取路由器对象
let $router = useRouter();

// 按钮点击回调
const goHome = () => {
  $router.push('/home');
}

// 组件挂载完毕更新当前的事件
onMounted(() => {
  timer.value = setInterval(() => {
    time.value = moment().format('YYYY年MM月DD日 hh:mm:ss');
  }, 1000);
})
</script>

<style scoped lang='scss'>
.top {
  display: flex;
  width: 100%;
  height: 40px;

  .left {
    flex: 1.5;
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
    display: flex;
    flex: 1.5;
    justify-content: space-between;
    align-items: center;
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

    .time {
      margin-right: 10px;
      font-size: 20px;
      color: #29fcff;
    }
  }
}
</style>
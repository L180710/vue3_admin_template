<template>
  <div class="container">
    <!-- 数据大屏展示内容区域 -->
    <div class="screen" ref="screen">
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
import { onMounted, ref } from 'vue';
// 获取数据大屏展示内容盒子的 DOM 元素
let screen = ref();

onMounted(() => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%. -50%)`;
});

// 监听视口变化
window.onresize = () => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%， -50%)`；
}

// 定义大屏缩放比例
function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w;
  const wh = window.innerHeight / h;
  return ww < wh ? ww : wh;
}
</script>

<style scoped lang='scss'>
.container {
  width: 100vw;
  height: 100vh;
  background: url('./images/bg.png') no-repeat;
  background-size: cover;

  .screen {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 1920px;
    height: 1080px;
    background: red;
    transform-origin: left top;

    .top {
      width: 100%;
      height: 40px;
      background: cyan;
    }

    .bottom {
      display: flex;

      .right {
        flex: 1;
      }

      .left {
        flex: 1;
      }

      .center {
        flex: 2;
      }
    }
  }
}
</style>
<template>
  <div class="container">
    <!-- 数据大屏展示内容区域 -->
    <div class="screen" ref="screen">
      <!-- 数据大屏顶部 -->
      <div class="top">
        <top />
      </div>
      <div class="bottom">
        <div class="left">
          <tourist class="tourist" />
          <Sex class="sex" />
          <Age class="age" />
        </div>
        <div class="left">中间</div>
        <div class="left">右侧</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
// 引入数据大屏暂时内容盒子 DOM 元素
import Top from './components/top/index.vue';
// 引入左侧三个子组件
import Tourist from './components/tourist/index.vue';
import Sex from './components/Sex/index.vue';
import Age from './components/Age/index.vue';


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
    transform-origin: left top;

    .top {
      width: 100%;
      height: 40px;
    }

    .bottom {
      display: flex;

      .right {
        flex: 1;
      }

      .left {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 1040px;

        .tourist {
          flex: 1.5;
        }

        .sex {
          flex: 1;
        }

        .age {
          flex: 1
        }
      }

      .center {
        flex: 2;
      }
    }
  }
}
</style>
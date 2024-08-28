<template>
  <!-- 路由组件出口的位置 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染 layout 一级路由组件的子路由 -->
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script lang="ts">
export default {
  name: 'Main'
}
</script>
<script setup lang='ts'>
import { ref, watch, } from 'vue';
import useLayOutSettingStore from '@/store/modules/setting';
let LayOutSettingStore = useLayOutSettingStore();

// 控制当前组件是否销毁创建
let flag = ref(true);

// 监听仓库内部数据是否发生变化，如果发生变化，说明用户点击过刷新按钮
watch(() => LayOutSettingStore.refresh, () => {
  console.log(1323)
})
</script>

<style scoped lang='scss'>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
}
</style>
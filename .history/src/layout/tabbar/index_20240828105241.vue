<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <Setting />
    </div>
    <div class="tabbar_right">
      <Breadcrumb />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tabbar'
}
</script>
<script setup lang='ts'>
import Setting from './setting/index.vue';
import Breadcrumb from './breadcrumb/index.vue';
</script>

<style scoped lang='scss'>
.tabbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 20px;

  .tabbar_left {
    display: flex;
    align-items: center;
  }

  .tabbar_right {
    display: flex;
    align-items: center;
  }
}
</style>
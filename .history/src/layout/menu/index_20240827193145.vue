<template>
  <template v-for="(item, index) in menuList">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item v-if="!item.meta.hidden" :key="item.path" :index="item.path" @click="goRoute">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由但是只有一个子路由 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item v-if="!item.children[0].meta.hidden" :key="item.path" :index="item.children[0].path">
        <template #title>
          <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由且个数大于一个 -->
    <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path" :key="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script lang="ts">
export default {
  name: 'Menu'
}
</script>

<script setup lang='ts'>
defineProps(["menuList"]);
const goRoute = (vc: any) => {
  console.log("vc", vc.index)
}


</script>

<style scoped lang='scss'></style>

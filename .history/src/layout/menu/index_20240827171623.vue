<template>
  <template v-for="(item, index) in menuList">
    <!-- 没有子路由 -->
    <el-menu-item v-if="!item.children" :key="item.path" :index="item.path">
      <template #title>
        <span>标&nbsp;</span>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 有子路由但是只有一个子路由 -->
    <el-menu-item v-if="item.children && item.children.length == 1" :key="item.path" :index="item.children[0].path">
      <template #title>
        <span>{{ item.children[0].meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 有子路由且个数大于一个 -->
    <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path" :key="item.path">
      <template #title>
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
defineProps(["menuList"])
</script>

<style scoped lang='scss'></style>

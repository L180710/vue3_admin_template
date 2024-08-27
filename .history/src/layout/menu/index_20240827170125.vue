<template>
  <div>
    {{ menuList }}
    <template v-for="(item, index) in menuList">
      <el-menu-item v-if="!item.children" :index="item.path">
        <template #title>
          <span>标&nbsp;</span>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
      <el-menu-item></el-menu-item>
    </template>
  </div>
</template>

<script setup lang='ts'>
defineProps(["menuList"])
</script>

<style scoped lang='scss'></style>

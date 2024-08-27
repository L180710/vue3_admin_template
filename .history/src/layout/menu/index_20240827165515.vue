<template>
  <div>
    {{ menuList }}
    <template v-for="(item, index) in menuList" :key="item.path">
      <el-menu-item v-if="!item.children">
        <template #title>
          <span>{{ item.path }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script setup lang='ts'>
defineProps(["menuList"])
</script>

<style scoped lang='scss'></style>

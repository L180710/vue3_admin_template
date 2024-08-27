<template>
  <div>
    {{ menuList }}
    <template v-for="(item, index) in menuList" :key="item.path">

    </template>
  </div>
</template>

<script setup lang='ts'>
defineProps(["menuList"])
</script>

<style scoped lang='scss'></style>

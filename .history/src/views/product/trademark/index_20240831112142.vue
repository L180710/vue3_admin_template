<template>
  <div>
    <el-card class="box-card">

      <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    </el-card>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'></style>
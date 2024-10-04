<template>
  <el-table :data="tableData" :tree-props="treeProps" row-key="id" default-expand-all>
    <el-table-column type="selection" width="55" :selectable="selectable" />
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'></style>
<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item label="一级分类">
        <el-select style="width: 100%">
          <el-option label="北京"></el-option>
          <el-option label="上海"></el-option>
          <el-option label="广州"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select>
          <el-option label="北京"></el-option>
          <el-option label="上海"></el-option>
          <el-option label="广州"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select>
          <el-option label="北京"></el-option>
          <el-option label="上海"></el-option>
          <el-option label="广州"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'></style>
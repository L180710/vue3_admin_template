<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item label="一级分类">
        <el-select>
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
  <el-card style="margin: 10px 0">
    <el-button type="primary" size="default" icon="Plus">添加属性</el-button>
    <el-table border style="margin: 10px 0">
      <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
      <el-table-column label="属性名称"></el-table-column>
      <el-table-column label="属性值名称"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </el-card>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'></style>
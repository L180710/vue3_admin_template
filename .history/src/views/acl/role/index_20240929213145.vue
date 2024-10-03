<template>
  <el-card>
    <el-form :inline="true" class="form">
      <el-form-item label="职位搜索">
        <el-input placeholder="请你输入搜索职位关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="default">搜索</el-button>
        <el-button type="primary" size="default">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card>
    <el-button type="primary" size="default" icon="Plus">添加职位</el-button>
    <el-table border style="margin: 10px 0">
      <el-table-column align="center" type="index" label="#"></el-table-column>
      <el-table-column align="center" label=""></el-table-column>
      <el-table-column align="center" label=""></el-table-column>
      <el-table-column align="center" label=""></el-table-column>
      <el-table-column align="center" label=""></el-table-column>
      <el-table-column align="center" label=""></el-table-column>
      <el-table-column align="center" label=""></el-table-column>
    </el-table>
  </el-card>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
</style>
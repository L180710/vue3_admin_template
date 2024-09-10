<template>
  <el-card style="height: 70px">
    <el-form :inline="true" class="form">
      <el-form-item label="用户名：">
        <el-input placeholder="请您输入搜索用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="default">搜索</el-button>
        <el-button type="primary" size="default">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card style="margin: 10px 0">
    <el-button type="primary" size="default">添加用户</el-button>
    <el-button type="primary" size="default">批量删除</el-button>
    <!-- table 展示用户信息 -->
    <el-table style="margin: 10px 0">
      <el-form-item type="selection"></el-form-item>
      <el-form-item label=""></el-form-item>
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
}
</style>
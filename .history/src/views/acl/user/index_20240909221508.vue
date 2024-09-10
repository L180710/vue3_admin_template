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
    <el-table border style="margin: 10px 0">
      <el-table-column align="center" type="selection"></el-table-column>
      <el-table-column align="center" label="#"></el-table-column>
      <el-table-column align="center" label="ID"></el-table-column>
      <el-table-column align="center" label="用户名称"></el-table-column>
      <el-table-column align="center" label="用户角色"></el-table-column>
      <el-table-column align="center" label="创建时间"></el-table-column>
      <el-table-column align="center" label="更新时间"></el-table-column>
      <el-table-column align="center" label="操作" width="200px"></el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]" :
      :background="true" layout=" prev, pager, next, jumper, -> size, total" :total="400" />
  </el-card>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

//默认页码
let pageNo = ref<number>(1);
// 一页展示几条数据
let pageSize = ref<number>(5);
</script>

<style scoped lang='scss'>
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
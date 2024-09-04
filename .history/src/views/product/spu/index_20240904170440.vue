<template>
  <div>
    <!-- 三级分类 -->
    <category :scene="scene"></category>
    <el-card style="margin: 10px 0">
      <el-button type="primary" size="default" icon="Plus">添加SPU</el-button>
    </el-card>
    <el-table>
      <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
      <el-table-column label="SPU名称"></el-table-column>
      <el-table-column label="SPU描述"></el-table-column>
      <el-table-column label="SPU操作"></el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]"
      :size="size" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
      :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
// 场景数据
let scene = ref<number>(0);
</script>

<style scoped lang='scss'></style>
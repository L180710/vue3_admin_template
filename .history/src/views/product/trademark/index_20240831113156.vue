<template>
  <div>
    <el-card class="box-card">
      <!-- 卡片顶部添加品牌按钮 -->
      <el-button type="primary" size="default" icon="Plus">添加品牌</el-button>
      <!-- 表格组件：用于展示已有平台数据 -->
      <el-table style="margin: 10px 0" border>
        <el-table-column label="序号" width="80px" align="center"></el-table-column>
        <el-table-column label="品牌名称"></el-table-column>
        <el-table-column label="品牌LOGO"></el-table-column>
        <el-table-column label="品牌操作"></el-table-column>
      </el-table>
      <!-- 分页器组件 -->
      <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
        :page-sizes="[100, 200, 300, 400]" :size="size" :disabled="disabled" :background="background"
        layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange" />
    </el-card>
  </div>
</template>

<script setup lang='ts'>
// 引入组合式 API 函数 ref
import { ref } from 'vue';
// 当前页面
let pageNo = ref<number>(1);
</script>

<style scoped lang='scss'></style>
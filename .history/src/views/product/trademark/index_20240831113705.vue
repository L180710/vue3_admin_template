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
      <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]" :size="size"
        :disabled="disabled" :background="true" layout="prev, pager, next, jumper, ->, sizes, total" :total="400"
        @size-change="handleSizeChange" />
    </el-card>
  </div>
</template>

<script setup lang='ts'>
// 引入组合式 API 函数 ref
import { ref } from 'vue';
// 当前页面
let pageNo = ref<number>(1);
// 每一页展示多少条数据
let limit = ref<number>(3);
</script>

<style scoped lang='scss'></style>
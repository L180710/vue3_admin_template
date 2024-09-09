<template>
  <el-card border style="margin: 10px 0">
    <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
    <el-table-column label="名称" show-overflow-tooltip width="150px"></el-table-column>
    <el-table-column label="描述" show-overflow-tooltip width="150px"></el-table-column>
    <el-table-column label="图片" width="150px"></el-table-column>
    <el-table-column label="重量" width="150px"></el-table-column>
    <el-table-column label="价格" width="150px"></el-table-column>
    <el-table-column label="操作" width="250px" fixed="right"></el-table-column>
  </el-card>
  <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]"
    :size="size" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
    :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
</template>

<script setup lang='ts'>
import { ref } from 'vue';
// 分页器当前页码
let pageNo = ref<number>(1);
// 每一页展示几条数据
let pageSize = ref<number>(10);
</script>

<style scoped lang='scss'></style>
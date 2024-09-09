<template>
  <el-table border style="margin: 10px 0">
    <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
    <el-table-column label="名称" show-overflow-tooltip width="150px"></el-table-column>
    <el-table-column label="描述" show-overflow-tooltip width="150px"></el-table-column>
    <el-table-column label="图片" width="150px"></el-table-column>
    <el-table-column label="重量" width="150px"></el-table-column>
    <el-table-column label="价格" width="150px"></el-table-column>
    <el-table-column label="操作" width="250px" fixed="right"></el-table-column>
  </el-table>
  <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
    :background="true" layout=" prev, pager, next, jumper ->,sizes , total" :total="400" />
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';
// 引入请求
import { reqSkuList } from '@/api/product/sku';
// 分页器当前页码
let pageNo = ref<number>(1);
// 每一页展示几条数据
let pageSize = ref<number>(10);

// 组件挂载完毕
onMounted(() => {
  getHasSku();
})
const getHasSku = () => {
  reqSkuList(pageNo.value, pageSize.value);
}
</script>

<style scoped lang='scss'></style>
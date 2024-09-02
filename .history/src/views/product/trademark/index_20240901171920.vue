<template>
  <div>
    <el-card class="box-card">
      <!-- 卡片顶部添加品牌按钮 -->
      <el-button type="primary" size="default" icon="Plus">添加品牌</el-button>
      <!-- 表格组件：用于展示已有平台数据 -->
      <el-table style="margin: 10px 0" border :data="trademarkArr">
        <el-table-column label="序号" width="80px" align="center" type="index"></el-table-column>
        <el-table-column label="品牌名称">
          <template #="{ row, $index }">
            <pre style="color: blue">{{ row.tmName }}</pre>
          </template>
        </el-table-column>
        <el-table-column label="品牌LOGO">
          <template #="{ row, $index }">
            <img :src="row.logoUrl" style="width:100px;height:100px;object-fit:contain" alt="" />
          </template>
        </el-table-column>
        <el-table-column label="品牌操作">
          <template #="{ row, $index }">
            <el-button type="primary" size="small" icon="Edit"></el-button>
            <el-button type="primary" size="small" icon="Delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 
      分页器组件
      pagination
      v-model:current-page: 设置分页器当前页码
      v-model:page-size: 设置每一个展示数据条数
      pagesize: 用于设置下拉菜单数据
      background: 设置分页器按钮的背景颜色
      layout: 可以设置分页器留个子组件布局等等
       -->
      <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]"
        :background="true" layout="prev, pager, next, jumper, ->, sizes, total" :total="total" :pager-count="9"
        @current-change="getHasTrademark" @size-change="sizeChange" />
    </el-card>
    <!-- 对话框组件：在添加品牌与修改已有品牌的业务时候使用结构 -->

    <el-dialog v-model="dialogFormVisible" title="添加品牌" width="500">

    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
// 引入组合式 API 函数 ref
import { ref, onMounted } from 'vue';
import { reqHasTrademark } from '@/api/product/trademark/';
import type { Records, TradeMarkResponseData } from '@/api/product/trademark/type'
// 当前页面
let pageNo = ref<number>(1);
// 每一页展示多少条数据
let limit = ref<number>(3);
// 存储已有品牌数据总数
let total = ref<number>(0);
// 存储已有品牌数据
let trademarkArr = ref<Records>([]);
// 获取已有品牌的接口封装为一个函数：在任何情况下获取数据，调用函数即可
const getHasTrademark = async (page = 1) => {
  pageNo.value = page;
  let result: TradeMarkResponseData = await reqHasTrademark(pageNo.value, limit.value)
  if (result.code == 200) {
    // 存储已有品牌个数
    total.value = result.data.total
    trademarkArr.value = result.data.records;
  }
}
// 组件挂载完毕钩子 
onMounted(() => {
  getHasTrademark();
})

// 分页器当前页码发生变化时候会触发
// 对于当前页码发生变化自定义事件，组件 pagination 父组件回传了数据(当前页码)
// const changePageNo = () => {
//   // 当前页码发生变化的时候再次发请求获取对应已有品牌数据展示
//   getHasTrademark() 
// }

// 当下拉菜单发生变化的时候触发方法
// 自个自定义事件，分页器组件会将下拉菜单选中数据返回
const sizeChange = () => {
  // 当前每一页的数据量发生变化的时候，当前页码归 1
  // pageNo.value = 1;
  getHasTrademark()
}

</script>

<style scoped lang='scss'></style>
<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item label="一级分类">
        <el-select style="width: 150px">
          <el-option label="北京"></el-option>
          <el-option label="上海"></el-option>
          <el-option label="广州"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select style="width: 150px">
          <el-option label="北京"></el-option>
          <el-option label="上海"></el-option>
          <el-option label="广州"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select style="width: 150px">
          <el-option label="北京"></el-option>
          <el-option label="上海"></el-option>
          <el-option label="广州"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang='ts'>
// 引入分类接口方法
import { reqC1 } from '@/api/product/attr';
// 引入声明周期函数钩子
import { onMounted } from 'vue';
// 组件挂载完毕
onMounted(() => {
  // 获取一级分类的数据
  getC1();
})

// 获取一级分类的数据方法
const getC1 = async () => {
  let result = await reqC1();
  console.log(result)
}
</script>

<style scoped lang='scss'></style>
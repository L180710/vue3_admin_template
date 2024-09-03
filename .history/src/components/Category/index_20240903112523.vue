<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item label="一级分类">
        <el-select>
          <el-option v-for="(c1, index) in categoryStore.c1Arr" :key="c1.id" :label="c1.name"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang='ts'>
// 引入声明周期函数钩子
import { onMounted, ref } from 'vue';
// 引入分类相关仓库
import useCategoryStore from '@/store/modules/category';
let categoryStore = useCategoryStore();
// 分类全局组件挂载完毕，通知仓库发请求获取一级分类的数据
onMounted(() => {
  getC1
})

// 通知仓库获取一级分类的方法
const getC1 = () => {
  categoryStore.getC1();

}
</script>

<style scoped lang='scss'></style>
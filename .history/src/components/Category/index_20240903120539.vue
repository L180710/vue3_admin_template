<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item label="一级分类">
        <el-select v-model="categoryStore.c1Id" style="width:150px" @change="handler">
          <el-option v-for="(c1, index) in categoryStore.c1Arr" :key="c1.id" :label="c1.name"
            :value="c1.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select v-model="categoryStore.c2Id" style="width:150px" @change="handler1">
          <el-option v-for="(c2, index) in categoryStore.c2Arr" :key="c2.id" :label="c2.name"
            :value="c2.id"></el-option>
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
  getC1()
})

// 通知仓库获取一级分类的方法
const getC1 = () => {
  categoryStore.getC1();
}

// 此方法即为一级分类下拉菜单的 change 事件（选中值的时候会触发）
const handler = () => {
  // 通知仓库获取二级分类的数据
  categoryStore.getC2()
}
</script>

<style scoped lang='scss'></style>
<template>
  <div>
    <!-- 三级分类 -->
    <category :scene="scene"></category>
    <el-card style="margin: 10px 0">
    </el-card>

  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';
import { reqHasSpu } from '@/api/product/spu';
import type { HasSpuResponseData, Records } from '@/api/product/spu/type';
import useCategoryStore from '@/store/modules/category';
let categoryStore = useCategoryStore();

// 场景数据
let scene = ref<number>(0);
// 分页器默认页码
let pageNo = ref<number>(1);
// 每一页展示几条数据
let pageSize = ref<number>(3);
// 存储已有的 SPU 数据
let records = ref<Records>();
// 存储已有 SPU 总个数
let total = ref<number>();

// 监听三级分类 ID 变化
watch(() => categoryStore.c3Id, () => {
  // 务必保证有三级分类 ID
  if (!categoryStore.c3Id) return;
  getHasSpu()
})

// 此方法执行：可以获取某一个三级分类下全部的已有 SPU
const getHasSpu = async (pager = 1) => {
  // 修改当前页面
  pageNo.value = pager;
  let result: HasSpuResponseData = await reqHasSpu(pageNo.value, pageSize.value, categoryStore.c3Id)
  if (result.code == 200) {
    records.value = result.data.records;
    total.value = result.data.total;
  }
}

// 分页器下拉菜单发生变化的时候触发
const changeSize = () => {
  getHasSpu();
}
</script>

<style scoped lang='scss'></style>
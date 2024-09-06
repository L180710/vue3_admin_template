<template>
  <div>
    <!-- 三级分类 -->
    <category :scene="scene"></category>
    <el-card style="margin: 10px 0">
      <div v-show="scene == 0">
        <el-button type="primary" size="default" icon="Plus"
          :disabled="useCategoryStore.c3Id ? false : true">添加SPU</el-button>
        <!-- 展示已有 SPU 数据 -->
        <el-table style="margin: 10px 0" border :data="records">
          <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
          <el-table-column label="SPU名称" prop="spuName"></el-table-column>
          <el-table-column label="SPU描述" prop="description" show-overflow-tooltip></el-table-column>
          <el-table-column label="SPU操作">
            <!-- row即为已有的 SPU 对象 -->
            <template #="{ row, $index }">
              <el-button type="primary" size="small" icon="Plus" title="添加SKU"></el-button>
              <el-button type="primary" size="small" icon="Edit" title="添加SPU"></el-button>
              <el-button type="primary" size="small" icon="View" title="查看SKU列表"></el-button>
              <el-button type="primary" size="small" icon="Delete" title="删除SPU"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页器 -->
        <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[3, 5, 7, 9]"
          :background="true" layout="prev, pager, next, jumper, ->, sizes, total" :total="total"
          @current-change="getHasSpu" @size-change="changeSize" />

      </div>
      <!-- 添加或修改 SPU 子组件 -->
      <SpuForm v-show="scene == 1"></SpuForm>
      <!-- 添加或修改 SKU 子组件 -->
      <SkuForm v-show="scene == 2"></SkuForm>
    </el-card>

  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';
import { reqHasSpu } from '@/api/product/spu';
import type { HasSpuResponseData, Records } from '@/api/product/spu/type';
import useCategoryStore from '@/store/modules/category';
import SpuForm from './SpuForm.vue';
import SkuForm from './SkuForm.vue';
let categoryStore = useCategoryStore();

// 场景数据
let scene = ref<number>(0); // 0-显示已有SPU，1-添加或修改已有SPU，2-添加SKU结构
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
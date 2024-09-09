<template>
  <div>
    <!-- 三级分类 -->
    <category :scene="scene"></category>
    <el-card style="margin: 10px 0">
      <div v-show="scene == 0">
        <el-button @click="addSpu" type="primary" size="default" icon="Plus"
          :disabled="categoryStore.c3Id ? false : true">添加SPU</el-button>
        <!-- 展示已有 SPU 数据 -->
        <el-table style="margin: 10px 0" border :data="records">
          <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
          <el-table-column label="SPU名称" prop="spuName"></el-table-column>
          <el-table-column label="SPU描述" prop="description" show-overflow-tooltip></el-table-column>
          <el-table-column label="SPU操作">
            <!-- row即为已有的 SPU 对象 -->
            <template #="{ row, $index }">
              <el-button type="primary" size="small" icon="Plus" title="添加SKU" @click="addSku(row)"></el-button>
              <el-button type="primary" size="small" icon="Edit" title="修改SPU" @click="updateSpu(row)"></el-button>
              <el-button type="primary" size="small" icon="View" title="查看SKU列表" @click="findSku(row)"></el-button>
              <el-popconfirm :title="`您确定删除${row.spuName}?`" width="200px" @confirm="deleteSpu(row)">
                <template #reference>
                  <el-button type="primary" size="small" icon="Delete" title="删除SPU"></el-button>
                </template>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页器 -->
        <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[3, 5, 7, 9]"
          :background="true" layout="prev, pager, next, jumper, ->, sizes, total" :total="total"
          @current-change="getHasSpu" @size-change="changeSize" />

      </div>
      <!-- 添加或修改 SPU 子组件 -->
      <SpuForm ref="spu" v-show="scene == 1" @changeScene="changeScene"></SpuForm>
      <!-- 添加或修改 SKU 子组件 -->
      <SkuForm ref="sku" v-show="scene == 2" @changeScene="changeScene"></SkuForm>
      <!-- dialog 对话框：展示已有 SKU 数据 -->
      <el-dialog v-model="show" title="SKU列表">
        <el-table border :data="skuArr">
          <el-table-column label="SKU名字" prop="skuName"></el-table-column>
          <el-table-column label="SKU价格" prop="price"></el-table-column>
          <el-table-column label="SKU重量" prop="weight"></el-table-column>
          <el-table-column label="SKU图片">
            <template #="{ row, $index }">
              <img :src="row.skuDefaultImg" style="width:100px;height:100px;object-fit:contain" />
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';
import { reqHasSpu, reqSkuList, reqRemoveSpu } from '@/api/product/spu';
import type { HasSpuResponseData, Records, SpuData, SkuInfoData, SkuData } from '@/api/product/spu/type';
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
let total = ref<number>(0);
// 获取子组件实例 SpuForm
let spu = ref<any>();
// 获取子组件实例 SkuForm
let sku = ref<any>();
// 存储全部的 SKU 数据
let skuArr = ref<SkuData[]>([]);
let show = ref<boolean>(false);

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

// 添加新的 SPU 按钮回调
const addSpu = () => {
  // 切换为场景 1：添加与修改已有SPU结构 ->SpuForm
  scene.value = 1
  // 点击添加 SPU 按钮，调用子组件方法初始化数据
  spu.value.initAddSpu(categoryStore.c3Id);
}

// 修改已有的 Spu 按钮回调
const updateSpu = (row: SpuData) => {
  // 切换为场景1：添加与修改已有 spu 结构 -> SpuForm
  scene.value = 1;
  // 调用子组件实例方法获取完整已有 SPU 的数据
  spu.value.initHasSpuData(row);
}

// 子组件 SpuForm 绑定自定义事件：目前是让子组件通知父组件切换场景为0
const changeScene = (obj: any) => {

  // 子组价 spuForm 点击取消变为场景 0：展示已有的 SPu
  scene.value = obj.flag;
  // 再次获取全部已有 SPU
  if (obj.params == 'update') {
    getHasSpu(pageNo.value);
  } else {
    getHasSpu()
  }
}

// 添加 SKU 按钮的回调
const addSku = (row: SpuData) => {
  // 点击添加 SKU 按钮切换场景 2
  scene.value = 2;
  // 调用子组件的方法初始化添加 SKU 数据
  sku.value.initSkuData(categoryStore.c1Id, categoryStore.c2Id, row);
}

// 查看 SKU 列表的数据
const findSku = async (row: SpuData) => {
  let result = await reqSkuList(row.id);
  if (result.code == 200) {
    skuArr.value = result.data;
    show.value = true;
  }
}
</script>

<style scoped lang='scss'></style>
<template>
  <el-table border style="margin: 10px 0" :data="skuArr">
    <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
    <el-table-column label="名称" show-overflow-tooltip width="150px" prop="skuName"></el-table-column>
    <el-table-column label="描述" show-overflow-tooltip width="150px" prop="skuDesc"></el-table-column>
    <el-table-column label="图片" width="150px">
      <template #="{ row, $index }">
        <img :src="row.skuDefaultImg" alt="" style="width:100px;height:100px;object-fit:contain" />
      </template>
    </el-table-column>
    <el-table-column label="重量" width="150px" prop="weight"></el-table-column>
    <el-table-column label="价格" width="150px" prop="price"></el-table-column>
    <el-table-column label="操作" width="250px" fixed="right">
      <template #="{ row, $index }">
        <el-button type="primary" size="small" :icon="row.isSale == 1 ? 'Bottom' : 'Top'"
          @click="updateSale(row)"></el-button>
        <el-button type="primary" size="small" icon="Edit" @click="updateSku"></el-button>
        <el-button type="primary" size="small" icon="InfoFilled" @click="findSku"></el-button>
        <el-button type="primary" size="small" icon="Delete"></el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
    :background="true" layout=" prev, pager, next, jumper ->,sizes , total" :total="total" @current-change="getHasSku"
    @size-change="handler" />
  <!-- 抽屉组件，展示商品详情 -->
  <el-drawer v-model="drawer">
    <template #header>
      <h4>查看新品详情</h4>
    </template>
    <template #default>
      <el-row style="margin-bottom:20px">
        <el-col :span="6">名称</el-col>
        <el-col :span="18">华为 meta20</el-col>
      </el-row>
      <el-row style="margin-bottom:20px">
        <el-col :span="6">描述</el-col>
        <el-col :span="18">华为 meta20</el-col>
      </el-row>
      <el-row style="margin-bottom:20px">
        <el-col :span="6">价格</el-col>
        <el-col :span="18">20</el-col>
      </el-row>
      <el-row style="margin-bottom:15px">
        <el-col :span="6">平台属性</el-col>
        <el-col :span="18">
          <el-tag style="margin: 0 5px 5px 0" v-for="item in 10">{{ item }}</el-tag>
        </el-col>
      </el-row>
      <el-row style="margin-bottom:15px">
        <el-col :span="6">销售属性</el-col>
        <el-col :span="18">
          <el-tag style="margin: 0 5px 5px 0" v-for="item in 6">{{ item }}</el-tag>
        </el-col>
      </el-row>
      <el-row style="margin-bottom:20px">
        <el-col :span="6">商品图片</el-col>
        <el-col :span="18">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </template>
  </el-drawer>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
// 引入请求
import { reqSkuList, reqCancelSale, reqSaleSku, reqSkuInfo } from '@/api/product/sku';
import type { SkuResponseData, SkuData } from '@/api/product/sku/type';
// 分页器当前页码
let pageNo = ref<number>(1);
// 每一页展示几条数据
let pageSize = ref<number>(10);
let total = ref<number>(0);
let skuArr = ref<SkuData[]>([]);
// 控制抽屉显示与隐藏字段
let drawer = ref<boolean>(false);
// 组件挂载完毕
onMounted(() => {
  getHasSku();
})
const getHasSku = async (pager = 1) => {
  pageNo.value = pager;
  let result: SkuResponseData = await reqSkuList(pageNo.value, pageSize.value);
  if (result.code == 200) {
    total.value = result.data.total;
    skuArr.value = result.data.records;
  }
}

// 分页器下拉变化
const handler = (pageSize: number) => {
  getHasSku()
}

// 商品上架与下架操作
const updateSale = async (row: SkuData) => {
  // 如果当前商品 isSale == 1，声明当前商品时上架状态 -> 更新为下架
  // 否则 else 情况与上面相反
  if (row.isSale == 1) {
    // 下架操作
    await reqCancelSale(row.id)
    // 提示信息
    ElMessage({ type: 'success', message: '下架成功' })
    // 发请求获取当前更新完毕的全部已有 SKU
    getHasSku(pageNo.value);
  } else {
    // 上架操作
    await reqSaleSku(row.id)
    // 提示信息
    ElMessage({ type: 'success', message: '下架成功' })
    // 发请求获取当前更新完毕的全部已有 SKU
    getHasSku(pageNo.value);
  }
}

// 更新已有的 sku
const updateSku = () => {
  ElMessage({
    type: 'success',
    message: '程序员在努力更新中……'
  })
}

// 查看商品详情按钮回调
const findSku = () => {
  // 抽屉展示出来
  drawer.value = true;
}
</script>

<style scoped lang='scss'>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
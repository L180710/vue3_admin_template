<template>
  <el-form label-width="120px">
    <el-form-item label="SPU名称">
      <el-input placeholder="请你输入SPU名称" v-model="SpuParams.spuName"></el-input>
    </el-form-item>
    <el-form-item label="SPU品牌">
      <el-select v-model="SpuParams.tmId">
        <el-option v-for="(item, index) in AllTradeMarks" :key="item.id" :label="item.tmName"
          :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="SPU描述">
      <el-input type="textarea" placeholder="请你输入SPU描述" v-model="SpuParams.description"></el-input>
    </el-form-item>
    <el-form-item label="SPU图片">
      <el-upload v-model:file-list="fileList" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <el-icon>
          <Plus />
        </el-icon>
      </el-upload>
      <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" />
      </el-dialog>
    </el-form-item>
    <el-form-item label="SPU销售属性">
      <!-- 展示销售属性下拉 -->
      <el-select :inline="true">
        <el-option label="华为"></el-option>
        <el-option label="opope"></el-option>
        <el-option label="华为"></el-option>
      </el-select>
      <el-button type="primary" size="default" icon="Plus">添加属性值</el-button>
      <!-- table 展示销售属性与属性值的地方 -->
      <el-table border style="margin: 10px 0">
        <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
        <el-table-column label="销售属性名字" width="120px"></el-table-column>
        <el-table-column label="销售属性值"></el-table-column>
        <el-table-column label="操作" width="120px"></el-table-column>
      </el-table>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="default" @click="">保存</el-button>
      <el-button type="primary" size="default" @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang='ts'>
import { ref, } from 'vue';
import type { SpuData } from '@/api/product/spu/type'
import { reqAllTradeMark, reqSpuImageList, reqSpuHasSaleAttr, reqAllSaleAttr } from '@/api/product/spu';
import type { HasSaleAttr, SaleAttr, SpuImg, Trademark, AllTradeMark, SpuHasImg, SaleAttrResponseData, HasSaleAttrResponseData } from '@/api/product/spu/type';
// import { TradeMark } from '../../../api/product/trademark/type';
let $emit = defineEmits(['changeScene'])
// 点击取消按钮：通知父组件切换场景为 1，展示已有的 SPU 数据
const cancel = () => {
  $emit('changeScene', 0)
}

// 存储已有 SPU 这些数据
let AllTradeMarks = ref<Trademark[]>([]);
// 商品图片
let imgList = ref<SpuImg[]>([]);
// 已有的 SPU 销售属性
let saleAttr = ref<SaleAttr[]>([]);
// 全部销售属性
let allSaleAttr = ref<HasSaleAttr[]>([]);
// 存储已有的 SPU 对象
let SpuParams = ref<SpuData>({
  category3Id: '',
  spuName: '',
  description: '',
  tmId: '',
  spuImageList: [],
  spuSaleAttrList: [],
});

// 子组件书一个方法
const initHasSpuData = async (spu: SpuData) => {
  // 存储已有的 SPU 对象，将来在模版中展示
  SpuParams.value = spu;
  // spu：即为父组件传递过来的已有 spu 对象[不完整]
  // 获取全部品牌的数据
  let result: AllTradeMark = await reqAllTradeMark();
  // 获取某一个品牌旗下全部售卖商品的图片
  let result1: SpuHasImg = await reqSpuImageList(spu.id);
  // 获取已有的 SPU 销售属性的数据
  let result2: SaleAttrResponseData = await reqSpuHasSaleAttr(spu.id);
  // 获取整个项目全部 SPU 销售属性
  let result3: HasSaleAttrResponseData = await reqAllSaleAttr();

  // 存储全部品牌的数据
  AllTradeMarks.value = result.data;
  // SPU 对应商品图片
  imgList.value = result1.data.map(item: any => {
    return {
      name: item.imgName,
      url: item.imgUrl
    }
  });
  // 存储已有的 SPU 的销售属性
  saleAttr.value = result2.data;
  // 存储全部的销售属性 
  allSaleAttr.value = result3.data;
}

// 对外暴露
defineExpose({ initHasSpuData })
</script>

<style scoped lang='scss'></style>
<template>
  <el-form label-width="120px">
    <el-form-item label="SPU名称">
      <el-input placeholder="请你输入SPU名称"></el-input>
    </el-form-item>
    <el-form-item label="SPU品牌">
      <el-select>
        <el-option label="华为"></el-option>
        <el-option label="opope"></el-option>
        <el-option label="华为"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="SPU描述">
      <el-input type="textarea" placeholder="请你输入SPU描述"></el-input>
    </el-form-item>
    <el-form-item label="SPU图标">
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
import { onMounted } from 'vue';
import type { SpuData } from '@/api/product/spu/type'
import { reqAllTradeMark, reqSpuImageList, reqSpuHasSaleAttr, reqAllSaleAttr } from '@/api/product/spu';
import type { AllTradeMark, SpuHasImg } from '@/api/product/spu/type';
let $emit = defineEmits(['changeScene'])
// 点击取消按钮：通知父组件切换场景为 1，展示已有的 SPU 数据
const cancel = () => {
  $emit('changeScene', 0)
}

// 子组件书一个方法
const initHasSpuData = async (spu: SpuData) => {
  // spu：即为父组件传递过来的已有 spu 对象[不完整]
  // 获取全部品牌的数据
  let result: AllTradeMark[] = await reqAllTradeMark();
  // 获取某一个品牌旗下全部售卖商品的图片
  let result1: SpuHasImg = await reqSpuImageList(spu.id);
  // 获取已有的 SPU 销售属性的数据
  let result2: any = await reqSpuHasSaleAttr(spu.id)
}

// 对外暴露
defineExpose({ initHasSpuData })
</script>

<style scoped lang='scss'></style>
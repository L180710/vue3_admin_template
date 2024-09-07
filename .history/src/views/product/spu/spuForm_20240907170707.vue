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
      <el-upload v-model:file-list="imgList" action="/api/admin/product/fileUpload" list-type="picture-card"
        :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :before-upload="handleUpload">
        <el-icon>
          <Plus />
        </el-icon>
      </el-upload>
      <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" style="width:00px;height:500px;oject-fit:contain" />
      </el-dialog>
    </el-form-item>
    <el-form-item label="SPU销售属性">
      <!-- 展示销售属性下拉 -->
      <el-select v-model="saleAttrIdAndValueName"
        :placeholder="unSelectSaleAttr.length ? `还未选择${unSelectSaleAttr.length}个` : '无'" :inline="true"
        style="width: 150px;margin-right:15px">
        <el-option :value="`${item.id}:${item.name}`" v-for="(item, index) in unSelectSaleAttr" :key="item.id"
          :label="item.name"></el-option>
      </el-select>
      <el-button @click="addSaleAttr" :disabled="saleAttrIdAndValueName ? false : true" type="primary" size="default"
        icon="Plus">添加属性值</el-button>
      <!-- table 展示销售属性与属性值的地方 -->
      <el-table border style="margin: 10px 0" :data="saleAttr">
        <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
        <el-table-column label="销售属性名字" width="120px" prop="saleAttrName"></el-table-column>
        <el-table-column label="销售属性值">
          <!-- row：即为当前 SPU 已有销售属性对象 -->
          <template #="{ row, $index }">
            <el-tag style="margin: 0 5px" v-for="(item, index) in row.spuSaleAttrValueList" :key="row.id" class="mx-1"
              closable>{{
                item.saleAttrValueName }}</el-tag>
            <el-input placeholder="请你输入属性值" size="small" style="width:100px"></el-input>
            <el-button type="primary" size="small" icon="Plus"></el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120px">
          <template #="{ row, $index }">
            <el-button type="primary" icon="Delete" size="small" @click="saleAttr.splice($index, 1)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form-item>
    <el-form-item>
      <el-button type=" primary" size="default" @click="">保存</el-button>
      <el-button type="primary" size="default" @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';
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
// 控制对话框显示与隐藏
let dialogVisible = ref<boolean>(false);
// 存储预览图片地址
let dialogImageUrl = ref<string>('');
// 存储已有的 SPU 对象
let SpuParams = ref<SpuData>({
  category3Id: '',
  spuName: '',
  description: '',
  tmId: '',
  spuImageList: [],
  spuSaleAttrList: [],
});
// 将来收集还未选择的销售属性 ID 与属性值的名字
let saleAttrIdAndValueName = ref<string>('');

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
  imgList.value = result1.data.map((item: any) => {
    return {
      name: item.imgName,
      url: item.imgUrl
    }
  });
  // 存储已有的 SPU 销售属性
  saleAttr.value = result2.data;
  // 存储全部的销售属性 
  allSaleAttr.value = result3.data;
}

// 照片墙点击预览按钮的时候触发的钩子
const handlePictureCardPreview = (file: any) => {
  dialogImageUrl.value = file.url;
  // 对话框弹出来
  dialogVisible.value = true;
}

// 照片墙删除文件钩子
const handleRemove = () => {
  console.log(123)
}

// 照片墙上传成功之前的钩子约束文件大小与类型
const handleUpload = (file: any) => {
  if (['image/png', 'image/jpeg', 'image/gif'].includes(file.type)) {
    if (file.size / 1024 / 1024 < 4) {
      return true
    } else {
      ElMessage({
        type: 'error',
        message: '上传文件务必小于 3 M'
      })
    }
  } else {
    ElMessage({
      type: 'error',
      message: '上传文件务必 PNG | JPG | GIF'
    })
  }
}

// 计算出当前 SPU 还未拥有的销售属性
let unSelectSaleAttr = computed(() => {
  // 全部销售属性：颜色、版本、尺码
  // 已有的销售属性：颜色、版本
  let unSelectAttr = allSaleAttr.value.filter(item => {
    return saleAttr.value.every(item1 => {
      return item.name != item1.saleAttrName;
    })
  })
  return unSelectAttr
})

// 添加销售属性的方法
const addSaleAttr = () => {
  const [baseSaleAttrId, saleAttrName] = saleAttrIdAndValueName.value.split(':');

  // 准备一个新的销售属性对象：将来带给服务器即可
  let newSaleAttr: SaleAttr = {
    baseSaleAttrId, saleAttrName, spuSaleAttrValueList: []
  }

  // 追加到数组当中
  saleAttr.value.push(newSaleAttr);
  // 清空收集的数据
  saleAttrIdAndValueName.value = '';
}
// 对外暴露
defineExpose({ initHasSpuData })
</script>

<style scoped lang='scss'></style>
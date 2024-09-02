<template>
  <div>
    <el-card class="box-card">
      <!-- 卡片顶部添加品牌按钮 -->
      <el-button type="primary" size="default" icon="Plus" @click="addTrademark">添加品牌</el-button>
      <!-- 表格组件：用于展示已有平台数据 -->
      <el-table style="margin: 10px 0" border :data="trademarkArr">
        <el-table-column label="序号" width="80px" align="center" type="index"></el-table-column>
        <el-table-column label="品牌名称">
          <template #="{ row, $index }">
            <pre style="color: blue">{{ row.tmName }}</pre>
          </template>
        </el-table-column>
        <el-table-column label="品牌LOGO">
          <template #="{ row, $index }">
            <img :src="row.logoUrl" style="width:100px;height:100px;object-fit:contain" alt="" />
          </template>
        </el-table-column>
        <el-table-column label="品牌操作">
          <template #="{ row, $index }">
            <el-button type="primary" size="small" icon="Edit" @click="updateTrademark"></el-button>
            <el-button type="primary" size="small" icon="Delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 
      分页器组件
      pagination
      v-model:current-page: 设置分页器当前页码
      v-model:page-size: 设置每一个展示数据条数
      pagesize: 用于设置下拉菜单数据
      background: 设置分页器按钮的背景颜色
      layout: 可以设置分页器留个子组件布局等等
       -->
      <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]"
        :background="true" layout="prev, pager, next, jumper, ->, sizes, total" :total="total" :pager-count="9"
        @current-change="getHasTrademark" @size-change="sizeChange" />
    </el-card>
    <!-- 对话框组件：在添加品牌与修改已有品牌的业务时候使用结构 -->

    <el-dialog v-model="dialogFormVisible" title="添加品牌">
      <el-form style="width:80%">
        <el-form-item label="品牌名称" label-width="80px">
          <el-input placeholder="请您输入品牌名称"></el-input>
        </el-form-item>
        <el-form-item label="品牌LOGO" label-width="80px">
          <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
      </el-form>
      <!-- 具名插槽：footer -->
      <template #footer>
        <el-button type="primary" size="default" @click="cancel">取消</el-button>
        <el-button type="primary" size="default" @click="confirm">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
// 引入组合式 API 函数 ref
import { ref, onMounted, reactive } from 'vue';
import { reqHasTrademark } from '@/api/product/trademark/';
import type { Records, TradeMarkResponseData, TradeMark } from '@/api/product/trademark/type'
// 当前页面
let pageNo = ref<number>(1);
// 每一页展示多少条数据
let limit = ref<number>(3);
// 存储已有品牌数据总数
let total = ref<number>(0);
// 存储已有品牌数据
let trademarkArr = ref<Records>([]);
// 控制对话框显示与隐藏
let dialogFormVisible = ref<boolean>(true)
// 定义收集新增品牌数据
let trademarkParams = reactive<TradeMark>({
  tmName: '',
  logoUrl: ''
});
// 获取已有品牌的接口封装为一个函数：在任何情况下获取数据，调用函数即可
const getHasTrademark = async (page = 1) => {
  pageNo.value = page;
  let result: TradeMarkResponseData = await reqHasTrademark(pageNo.value, limit.value)
  if (result.code == 200) {
    // 存储已有品牌个数
    total.value = result.data.total
    trademarkArr.value = result.data.records;
  }


}
// 组件挂载完毕钩子 
onMounted(() => {
  getHasTrademark();
})

// 分页器当前页码发生变化时候会触发
// 对于当前页码发生变化自定义事件，组件 pagination 父组件回传了数据(当前页码)
// const changePageNo = () => {
//   // 当前页码发生变化的时候再次发请求获取对应已有品牌数据展示
//   getHasTrademark() 
// }

// 当下拉菜单发生变化的时候触发方法
// 自个自定义事件，分页器组件会将下拉菜单选中数据返回
const sizeChange = () => {
  // 当前每一页的数据量发生变化的时候，当前页码归 1
  // pageNo.value = 1;
  getHasTrademark()
}

// 添加品牌按钮的问题
const addTrademark = () => {
  // 对话框显示
  dialogFormVisible.value = true;
}

// 修改已有品牌的按钮回调
const updateTrademark = () => {
  // 对话框显示
  dialogFormVisible.value = true;
}

// 对话框隐藏
const cancel = () => {
  dialogFormVisible.value = false;
}
// 对话框确认
const confirm = () => {
  dialogFormVisible.value = true;
  dialogFormVisible.value = false;
}

</script>

<style scoped lang='scss'>
// 头像上传
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
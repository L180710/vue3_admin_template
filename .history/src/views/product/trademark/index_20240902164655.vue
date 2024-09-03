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
            <el-button type="primary" size="small" icon="Edit" @click="updateTrademark(row)"></el-button>
            <el-popconfirm :title="`您确定要删除${row.tmName}?`" width="250px">
              <template #reference>
                <el-button type="primary" size="small" icon="Delete"></el-button>
              </template>
            </el-popconfirm>
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

    <el-dialog v-model="dialogFormVisible" :title="trademarkParams.id ? '修改品牌' : '添加品牌'">
      <el-form style="width:80%" :model="trademarkParams" :rules="rules" ref="formRef">
        <el-form-item label="品牌名称" label-width="100px" prop="tmName">
          <el-input placeholder="请您输入品牌名称" v-model="trademarkParams.tmName"></el-input>
        </el-form-item>
        <el-form-item label="品牌LOGO" label-width="100px" prop="logoUrl">
          <!-- upload 组件属性：action -->
          <el-upload class="avatar-uploader" action="/api/admin/product/fileUpload" :show-file-list="false"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="trademarkParams.logoUrl" :src="trademarkParams.logoUrl" class="avatar" />
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
import { ref, onMounted, reactive, nextTick } from 'vue';
import { ElMessage, type UploadProps } from 'element-plus';
import { reqHasTrademark, reqAddOrUpdateTrademark } from '@/api/product/trademark/';
import { Records, TradeMarkResponseData, TradeMark } from '@/api/product/trademark/type'
// 当前页面
let pageNo = ref<number>(1);
// 每一页展示多少条数据
let limit = ref<number>(3);
// 存储已有品牌数据总数
let total = ref<number>(0);
// 存储已有品牌数据
let trademarkArr = ref<Records>([]);
// 控制对话框显示与隐藏
let dialogFormVisible = ref<boolean>(false)
// 获取 el-form 组件实例
let formRef = ref();
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
  // 清空收集数据
  trademarkParams.id = '';
  trademarkParams.tmName = '';
  trademarkParams.logoUrl = '';

  // 第一种写法：ts 问号语法
  // formRef.value?.clearValidate('tmName');
  // formRef.value?.clearValidate('logoUrl');

  nextTick(() => {
    formRef.value?.clearValidate('tmName');
    formRef.value?.clearValidate('logoUrl');
  })
}

// 修改已有品牌的按钮回调
// row：row 即为当前已有品牌
const updateTrademark = (row: TradeMark) => {
  // 清空检验规则错误提示信息
  nextTick(() => {
    formRef.value?.clearValidate('tmName');
    formRef.value?.clearValidate('logoUrl');
  })
  // 对话框显示
  dialogFormVisible.value = true;
  // trademarkParams.id = row.id;
  // // 展示已有品牌的数据
  // trademarkParams.tmName = row.tmName;
  // trademarkParams.logoUrl = row.logoUrl;
  Object.assign(trademarkParams, row);
}

// 对话框隐藏
const cancel = () => {
  dialogFormVisible.value = false;
}
// 对话框确认
const confirm = async () => {
  // 发请求之前，要对整个表单进行校验
  await formRef.value.validate();

  let result: any = await reqAddOrUpdateTrademark(trademarkParams)
  // 添加 | 修改品牌成功 
  if (result.code == 200) {
    // 弹出提示信息
    ElMessage({
      type: 'success',
      message: trademarkParams.id ? '修改品牌成功' : '添加品牌成功'
    });
    // 再次发请求获取已有全部的品牌数据
    getHasTrademark(trademarkParams.id ? pageNo.value : 1);
  } else {
    // 添加品牌失败
    ElMessage({
      type: 'error',
      message: trademarkParams.id ? '修改品牌失败' : '添加品牌失败'
    })
    // 关闭对话框
    dialogFormVisible.value = false;
  }
}

// 上传图片组件 -> 上传图片之前触发的钩子函数
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  // 钩子是在图片上传成功之前触发，上传之前可以约束文件类型大小
  // 要求：上传文件格式 PNG | JPG | GIF 4M
  if (["image/png", "image/jpeg", "image/gif"].includes(rawFile.type)) {
    if (rawFile.size / 1024 / 1024 < 4) {
      return true;
    } else {
      ElMessage({
        type: 'error',
        message: '上传文件大小要小于 4M'
      })
    }

  } else {
    ElMessage({
      type: 'error',
      message: '上传文件格式务必 PNG | JPG | GIF'
    })
  }
  return false;
}

// 图片上传成功钩子
const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  // response: 即为当前这次上传图片 post 请求服务器返回的数据
  trademarkParams.logoUrl = response.data;
  // 图片上传成功，清除掉对应图片校验结果
  formRef.value.clearValidate('logoUrl');
}

// 品牌定义校验规则方法（当表单元素触发 blur 时候，会触发此方法）
const validatorTmName = (rule: any, value: any, callBack: any) => {
  // 自定义校验规则
  if (value.trim().length >= 2) {
    callBack();
  } else {
    // 检验未通过返回的错误的提示信息
    callBack(new Error('品牌名称位数大于等于两位'));
  }
}
// 品牌 LOGO 图片自定义校验规则方法
const validatorLogoUrl = (rule: any, value: any, callBack: any) => {
  // 如果图片上传
  if (value) {
    callBack();
  } else {
    callBack(new Error('Logo 图片务必上传'))
  }
}

//表单校验规则现象
const rules = {
  tmName: [
    { required: true, trigger: 'blur', validator: validatorTmName }
  ],
  logoUrl: [
    { required: true, validator: validatorLogoUrl }
  ]
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
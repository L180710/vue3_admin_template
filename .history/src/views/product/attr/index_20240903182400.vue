<template>
  <!-- 三级分类全局组件 -->
  <Category :scene="scene" />
  <el-card style="margin: 10px 0">
    <div v-show="scene == 0">
      <el-button type="primary" size="default" icon="Plus" :disabled="categoryStore.c3Id ? false : true"
        @click="addAttr">添加属性</el-button>
      <el-table border style="margin: 10px 0" :data="attrArr">
        <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
        <el-table-column label="属性名称" width="120px" prop="attrName"></el-table-column>
        <el-table-column label="属性值名称">
          <template #="{ row, $index }">
            <el-tag style="margin: 5px" v-for="(item, index) in row.attrValueList" :key="item.id">{{ item.valueName
              }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120px">
          <template #="{ row, $index }">
            <el-button type="primary" size="small" icon="Edit" @click="updateAttr"></el-button>
            <el-button type="primary" size="small" icon="Delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-show="scene == 1">
      <!-- 展示添加属性与修改数据的结构 -->
      <el-form :inline="true">
        <el-form-item label="属性名称">
          <el-input placeholder="请你输入属性名称" v-model="attrParams.attrName"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" size="default" icon="Plus" :disabled="attrParams.attrName ? false : true"
        @click="addAttrValue">添加属性值</el-button>
      <el-button type="primary" size="default" @click="cancel">取消</el-button>
      <el-table border style="margin: 10px 0" :data="attrParams.attrValueList">
        <el-table-column label="序号" width="80px" type="index" align="center"></el-table-column>
        <el-table-column label="属性值名称">
          <!-- row：即为当前属性值对象 -->
          <template #="{ row, $index }">
            <el-input placeholder="请你输入属性值名称" v-model="row.valueName"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="属性值操作"></el-table-column>
      </el-table>
      <el-button type="primary" size="default" @click="save">保存</el-button>
      <el-button type="primary" size="default" @click="cancel">取消</el-button>
    </div>
  </el-card>
</template>

<script setup lang='ts'>
// 组合式 API 函数 watch
import { watch, ref, reactive } from 'vue';
// 引入获取已有属性与属性值接口
import { reqAttr, reqAddOrUpdateAttr } from '@/api/product/attr';
import type { AttrResponseData, Attr } from '@/api/product/attr/type';
// 获取分类仓库
import useCategoryStore from '@/store/modules/category';
import { ElMessage } from 'element-plus';
let categoryStore = useCategoryStore();
// 存储已有的属性与属性值
let attrArr = ref<Attr[]>([]);
// 定义 card 组件内容切换变量，0-显示table,1-显示添加与修改
let scene = ref<number>(1);
// 收集新增的属性数据
let attrParams = reactive<Attr>({
  attrName: '', // 新增属性名字
  attrValueList: [], // 新增属性值数据
  categoryId: '', // 三级分类 ID
  categoryLevel: 3 // 代表的是三级分类
})

// 监听仓库三级分类 ID 的变化
watch(() => categoryStore.c3Id, async () => {

  // 清空上一次查询到属性与属性值
  attrArr.value = [];
  // 保证三级分类有才能发请求（一、二级变化会清空三级）
  if (!categoryStore.c3Id) return;
  // 获取分类 Id
  getAttr();
})

// 获取已有的属性与属性值方法
const getAttr = async () => {
  // 获取分类的 ID
  const { c1Id, c2Id, c3Id } = categoryStore;

  // 获取分类下的已有属性与属性值
  let result: AttrResponseData = await reqAttr(c1Id, c2Id, c3Id);
  if (result.code == 200) {
    attrArr.value = result.data;
  }
}

// 添加属性按钮的回调
const addAttr = () => {
  // 每一次点击的时候，先清空一下数据再手机数据
  Object.assign(attrParams, {
    attrName: '', // 新增属性名字
    attrValueList: [], // 新增属性值数据
    categoryId: '', // 三级分类 ID
    categoryLevel: 3 // 代表的是三级分类
  })
  // 切换为添加与修改属性的结构
  scene.value = 1;
  // 点击这个按钮的时候，手机新增属性三级分类 ID
  attrParams.categoryId = categoryStore.c3Id;
}
// table 表格修改已有属性按钮的回调
const updateAttr = () => {
  // 切换为添加与修改属性结构
  scene.value = 1;
}

// 取消按钮的回调
const cancel = () => {
  scene.value = 0;
}

// 添加属性按钮的回调
const addAttrValue = () => {
  // 点击添加属性按钮的时候，向数组添加一个属性值对象
  attrParams.attrValueList.push({
    valueName: ''
  })
}

// 保存按钮的回到
const save = async () => {
  // 发请求
  let result: any = await reqAddOrUpdateAttr(attrParams)
  //添加属性 | 修改已有属性已经成功
  if (result.code == 200) {
    // 切换场景
    scene.value = 0;
    // 提示信息
    ElMessage({
      type: 'success',
      message: attrParams.id ? '修改成功' : '添加成功'
    });
    // 获取全部已有的属性与属性值
    getAttr();
  } else {
    ElMessage({
      type: 'error',
      message: attrParams.id ? '修改失败' : '添加失败'
    })
  }
}

</script>

<style scoped lang='scss'></style>
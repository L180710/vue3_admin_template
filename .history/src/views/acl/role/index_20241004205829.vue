<template>
  <el-card>
    <el-form :inline="true" class="form">
      <el-form-item label="职位搜索">
        <el-input placeholder="请你输入搜索职位关键字" v-model="keyword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="default" :disabled="keyword ? false : true" @click="search">搜索</el-button>
        <el-button type="primary" size="default" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card>
    <el-button type="primary" size="default" icon="Plus" @click="addRole">添加职位</el-button>
    <el-table border style="margin: 10px 0" :data="allRole">
      <el-table-column align="center" type="index" label="#"></el-table-column>
      <el-table-column align="center" label="ID" prop="id"></el-table-column>
      <el-table-column align="center" label="职位名称" prop="roleName"></el-table-column>
      <el-table-column align="center" label="创建时间" prop="createTime" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="更新时间" prop="updateTime" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="操作" width="280px">
        <!-- row: 已有的职位对象 -->
        <template #="{ row, $index }">
          <el-button type="primary" size="small" icon="User" @click="setPermisstion(row)">分配权限</el-button>
          <el-button type="primary" size="small" icon="Edit" @click="updateRole(row)">编辑</el-button>
          <el-popconfirm :title="`你确定删除${row.roleName}`" width="260px" @confirm="reqRemoveRole(row.id)">
            <template #reference>
              <el-button type="primary" size="small" icon="Delete">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
      :background="true" layout=" prev, pager, next, jumper, ->, total, sizes," :total="total"
      @current-change="getHasRole" @size-change="sizeChange" />
  </el-card>
  <!-- 添加职位与更新已有职位的结构：对话框 -->
  <el-dialog v-model="dialogVisible" :title="RoleParams.id ? '更新职位' : '添加职位'">
    <el-form :model="RoleParams" :rules="rules">
      <el-form-item label="职位名称" prop="roleName" ref="form">
        <el-input placeholder="请你输入职位名称" v-model="RoleParams.roleName"></el-input>
      </el-form-item>
      <template #footer>
        <el-button type="primary" size="default" @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" size="default" @click="save">确定</el-button>
      </template>
    </el-form>
  </el-dialog>
  <!-- 抽屉组件：分配职位的菜单权限与按钮权限 -->
  <el-drawer v-model="drawer">
    <template #header>
      <h4>分配菜单与按钮权限</h4>
    </template>
    <template #default>
      <!-- 树形控件 -->
      <el-tree ref="tree" :data="menuArr" show-checkbox node-key="id" default-expand-all
        :default-checked-keys="selectArr" :props="defaultProps" />
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="drawer = false">取消</el-button>
        <el-button type="primary" @click="handler">确定</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang='ts'>
import { ref, onMounted, reactive, nextTick } from 'vue';
import { ElMessage } from 'element-plus';
// 请求方法
import {
  reqAllRoleList, reqAddOrUpdateRole, reqAllMenuList, reqSetPermission, reqRemoveRole
} from '@/api/acl/role';
import type { RoleResponseData, Records, RoleData, MenuList } from '@/api/acl/role/type';
// 引入骨架仓库
import useLayOutSettingStore from '@/store/modules/setting';
import { MenuResponseData } from '../../../api/acl/role/type';
let settingStore = useLayOutSettingStore();
// 当前页码
let pageNo = ref<number>(1);
// 一页展示几条数据
let pageSize = ref<number>(10);
// 组件挂载完毕
let keyword = ref<string>('');
// 存储全部已有的职位
let allRole = ref<Records>([]);
// 职位总个数
let total = ref<number>(0);
// 控制对话框的显示与隐藏
let dialogVisible = ref<boolean>(false);
// 获取 form 组件实例
let form = ref<any>();
// 控制抽屉显示与隐藏
let drawer = ref<boolean>(false);
// 收集新增岗位数据
let RoleParams = reactive<RoleData>({
  roleName: ''
});
// 准备一个数组用于存储勾选的节点 ID
let selectArr = ref<number[]>([]);
// 定义数组存储用户权限的数据
let menuArr = ref<MenuList>([]);
// 获取 tree 组件实例
let tree = ref<any>();

// 组件挂载完毕
onMounted(() => {
  getHasRole();
});

// 获取全部用户信息的方法 | 分页器当前页面发生变化的回调
const getHasRole = async (pager = 1) => {
  // 修改当前页码
  pageNo.value = pager;
  let result: RoleResponseData = await reqAllRoleList(pageNo.value, pageSize.value, keyword.value);
  if (result.code == 200) {
    total.value = result.data.total;
    allRole.value = result.data.records;
  }
}

// 下拉菜单的回调
const sizeChange = () => {
  getHasRole();
}

// 搜索按钮的回调
const search = () => {
  // 再次发请求根据关键字
  getHasRole();
  keyword.value = '';
}

// 重置按钮的回调
const reset = () => {
  settingStore.refresh = !settingStore.refresh;
}

// 添加职位按钮的回调
const addRole = () => {
  // 对话框显示出来
  dialogVisible.value = true;
  // 清空数据
  Object.assign(RoleParams, {
    id: 0,
    roleName: '',
  });
  // 清空上一次表单经验错误结果
  nextTick(() => {
    form.value.clearValidate('roleName');
  })
}

// 更新已有的职位按钮回调
const updateRole = (row: RoleData) => {
  // 显示对话框
  dialogVisible.value = true;
  // 存储已有的职位 -- 带有 ID 的 
  Object.assign(RoleParams, row);
  // 清空上一次表单经验错误结果
  nextTick(() => {
    form.value.clearValidate('roleName');
  })
}

// 自定义经验规则回调
const validatorRoleName = (rule: any, value: any, callBack: any) => {
  if (value.trim() >= 2) {
    callBack();
  } else {
    callBack(new Error('职位名称至少为两位'))
  }
}

// 职位经验规则
const rules = {
  roleName: [
    { required: true, trigger: 'blue', validator: validatorRoleName }
  ]
}

// 确定按钮的回调
const save = async () => {
  // 表单校验结果，结果通过再发请求，结果没有通过不应该再发请求
  await form.value.validate();
  // 添加职位 | 更新职位的请求
  let result: any = await reqAddOrUpdateRole(RoleParams);
  if (result.code == 200) {
    // 提示文字
    ElMessage({
      type: 'success',
      message: RoleParams.id ? '更新成功' : '添加成功'
    });
    // 对话框显示
    dialogVisible.value = false;
    // 再次获取全部已有的职位
    getHasRole(RoleParams.id ? pageNo.value : 1);
  }
}

// 分配权限按钮的回调
const setPermisstion = async (row: RoleData) => {
  // 抽屉显示出来
  drawer.value = true;
  // 收集当前要分类权限的职位数据
  Object.assign(RoleParams, row);
  // 根据职位获取权限数据
  let result: MenuResponseData = await reqAllMenuList(RoleParams.id);
  if (result.code == 200) {
    menuArr.value = result.data;
    selectArr.value = filterSelectArr(menuArr.value, []);
  }
}

const defaultProps = {
  children: 'Children',
  label: 'name'
};

const filterSelectArr = (allData: any, initArr: any) => {
  allData.forEach((item: any) => {
    if (item.select && item.level == 4) {
      initArr.push(item.id);
    }
    if (item.children && item.children.length > 0) {
      filterSelectArr(item.children, initArr)
    }
  })
  return initArr
}

// 抽屉确定按钮回调
const handler = async () => {
  // 职位的 ID
  const roleId = RoleParams.id;
  // 选中节点 ID
  let arr = tree.value.getCheckedKeys();
  // 半选 ID
  let arr1 = tree.value.getHalfCheckedKeys();
  let permissionId = arr.concat(arr1);
  // 下发权限
  let result: any = await reqSetPermission(roleId, permissionId)
  if (result.code == 200) {
    // 抽屉关闭
    drawer.value = false;
    // 提示信息
    ElMessage({
      type: 'success',
      message: '分配权限成功'
    });
    // 页面刷新
    window.location.reload();
  }
}


</script>

<style scoped lang='scss'>
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
</style>
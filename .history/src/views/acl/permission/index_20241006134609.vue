<template>
  <el-table :data="PermissionArr" row-key="id" border>
    <el-table-column label="名称" prop="name"></el-table-column>
    <el-table-column label="权限值" prop="code"></el-table-column>
    <el-table-column label="修改时间" prop="updateTime"></el-table-column>
    <el-table-column label="操作">
      <!-- row: 即为已有菜单对象 | 按钮的对象数据 -->
      <template #="{ row, $index }">
        <el-button type="primary" size="small" :disabled="row.level == 4 ? true : false" @click="addPermission(row)">{{
          row.level == 1 ? '添加功能' :
            '添加菜单' }}</el-button>
        <el-button type="primary" size="small" @click="updatePermission(row)"
          :disabled="row.level == 1 ? true : false">编辑</el-button>
        <el-button type="primary" size="small" :disabled="row.level == 1 ? true : false">删除</el-button>


      </template>
    </el-table-column>
  </el-table>
  <!-- 对话框组件：添加或更新已有菜单的数据结构 -->
  <el-dialog v-model="dialogVisible" :title="menuData.id ? '更新菜单' : '添加菜单'">
    <!-- 表单组件：收集新增已有的菜单数据 -->
    <el-form>
      <el-form-item label="名称">
        <el-input placeholder="请您输入菜单名称" v-model="menuData.name"></el-input>
      </el-form-item>
      <el-form-item label="权限">
        <el-input placeholder="请您输入权限值" v-model="menuData.code"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="save">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang='ts'>
import { ref, onMounted, reactive } from 'vue';
// 引入获取菜单请求 api
import { reqAllPermission, reqAddOrUpdateMenu， } from '@/api/acl/menu';
// 引入 ts 类型
import type { PermissionResponseData, PermissionList, Permission, MenuParams } from '@/api/acl/menu/type';
import { ElMessage } from 'element-plus';
// 控制对话框显示与隐藏
let dialogVisible = ref<boolean>(false);
// 存储菜单的数据
let PermissionArr = ref<PermissionList>([]);
//携带的参数
let menuData = reactive<MenuParams>({
  code: '',
  level: 0,
  name: '',
  pid: 0
})

// 组件挂载完毕
onMounted(() => {
  getHasPermission();
})

// 获取数据菜单的方法
const getHasPermission = async () => {
  let result: PermissionResponseData = await reqAllPermission();
  if (result.code == 200) {
    PermissionArr.value = result.data;
  }
}

// 添加菜单按钮的回调
const addPermission = (row: Permission) => {
  // 清空数据
  Object.assign(menuData, {
    id: 0,
    code: '',
    level: 0,
    name: '',
    pid: 0
  });
  // 对话框显示出来
  dialogVisible.value = true;
  // 收集新增的菜单 level 数值
  menuData.level = row.level + 1;
  // 给谁新增子菜单
  menuData.pid = row.id;
}

// 编辑已有的菜单
const updatePermission = (row: Permission) => {
  dialogVisible.value = true;
  // 点击修改按钮：收集已有菜单数据进行更新
  Object.assign(menuData, row);
}

// 确定按钮的回调
const save = async () => {
  // 发请求：新增子菜单 | 更新某一个已有的菜单数据
  let result: any = await reqAddOrUpdateMenu(menuData);
  if (result.code == 200) {
    // 对话框隐藏
    dialogVisible.value = false;
    // 提示信息
    ElMessage({
      type: 'success',
      message: menuData.id ? '更新成功' : '添加成功'
    });
    // 再次获取全部最新的数据
    getHasPermission();
  }

}
</script>

<style scoped lang='scss'></style>
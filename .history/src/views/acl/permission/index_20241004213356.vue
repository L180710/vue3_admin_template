<template>
  <el-table :data="PermissionArr" row-key="id" border>
    <el-table-column label="名称" prop="name"></el-table-column>
    <el-table-column label="权限值" prop="code"></el-table-column>
    <el-table-column label="修改时间" prop="updateTime"></el-table-column>
    <el-table-column label="操作">
      <!-- row: 即为已有菜单对象 | 按钮的对象数据 -->
      <template #="{ row, $index }">
        <el-button type="primary" size="small" :disabled="row.level == 4 ? true : false">{{ row.level == 1 ? '添加功能' :
          '添加菜单' }}</el-button>
        <el-button type="primary" size="small" :disabled="row.level == 1 ? true : false">编辑</el-button>
        <el-button type="primary" size="small" :disabled="row.level == 1 ? true : false">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';
// 引入获取菜单请求 api
import { reqAllPermission } from '@/api/acl/menu';
// 引入 ts 类型
import type { PermissionResponseData, PermissionList } from '@/api/acl/menu/type';

// 存储菜单的数据
let PermissionArr = ref<PermissionList>([]);

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

</script>

<style scoped lang='scss'></style>
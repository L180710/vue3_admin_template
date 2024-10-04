<template>
  <el-table row-key="id" border>
    <el-table-column label="名称"></el-table-column>
    <el-table-column label="权限值"></el-table-column>
    <el-table-column label="修改时间"></el-table-column>
    <el-table-column label="操作"></el-table-column>
  </el-table>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';
// 引入获取菜单请求 api
import { reqAllPermission } from '@/api/acl/menu';
// 引入 ts 类型
import type { PermissionResponseData } from '../../../api/acl/menu/type';

</script>

<style scoped lang='scss'></style>
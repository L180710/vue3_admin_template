<template>
  <el-card>
    <el-form :inline="true" class="form">
      <el-form-item label="职位搜索">
        <el-input placeholder="请你输入搜索职位关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="default">搜索</el-button>
        <el-button type="primary" size="default">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card>
    <el-button type="primary" size="default" icon="Plus">添加职位</el-button>
    <el-table border style="margin: 10px 0">
      <el-table-column align="center" type="index" label="#"></el-table-column>
      <el-table-column align="center" label="ID"></el-table-column>
      <el-table-column align="center" label="职位名称"></el-table-column>
      <el-table-column align="center" label="创建时间"></el-table-column>
      <el-table-column align="center" label="更新时间"></el-table-column>
      <el-table-column align="center" label="操作" width="260px"></el-table-column>
    </el-table>
    <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
      :background="true" layout=" prev, pager, next, jumper, ->, total, sizes," :total="total" />
  </el-card>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';
// 请求方法
import { reqAllRoleList } from '@/api/acl/role';
import type { RoleResponseData, Records } from '@/api/acl/role/type';
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

// 组件挂载完毕
onMounted(() => {
  getHasRole();
});

const getHasRole = async (pager = 1) => {
  // 修改当前页码
  pageNo.value = pager;
  let result: RoleResponseData = await reqAllRoleList(pageNo.value, pageSize.value, keyword.value);
  if (result.code == 200) {
    total.value = result.data.total;
    allRole.value = result.data.records;

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
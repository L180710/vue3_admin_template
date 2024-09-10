<template>
  <el-card style="height: 70px">
    <el-form :inline="true" class="form">
      <el-form-item label="用户名：">
        <el-input placeholder="请您输入搜索用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="default">搜索</el-button>
        <el-button type="primary" size="default">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card style="margin: 10px 0">
    <el-button type="primary" size="default" @click="addUser">添加用户</el-button>
    <el-button type="primary" size="default">批量删除</el-button>
    <!-- table 展示用户信息 -->
    <el-table border style="margin: 10px 0" :data="userArr">
      <el-table-column align="center" type="selection"></el-table-column>
      <el-table-column align="center" label="#" type="index"></el-table-column>
      <el-table-column align="center" label="ID" prop="id"></el-table-column>
      <el-table-column align="center" label="用户名字" prop="username" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="用户名称" prop="name" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="用户角色" prop="roleName" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="创建时间" prop="createTime" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="更新时间" prop="updateTime" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" label="操作" width="300px">
        <template #="{ row, $index }">
          <el-button type="primary" size="small" icon="User">分类角色</el-button>
          <el-button type="primary" size="small" icon="Edit" @click="updateUser(row)">编辑</el-button>
          <el-button type="primary" size="small" icon="Delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
      :background="true" layout=" prev, pager, next, jumper, ->, sizes, total" :total="total"
      @current-change="getHasUser" @size-change="handler" />
  </el-card>
  <!-- 抽屉结构：完成添加新的用户账户或更新已有账户信息 -->
  <el-drawer v-model="drawer">
    <template #header>
      <h4>set title by slot</h4>
    </template>
    <template #default>
      <div>
        <el-radio v-model="radio1" value="Option 1" size="large">
          Option 1
        </el-radio>
        <el-radio v-model="radio1" value="Option 2" size="large">
          Option 2
        </el-radio>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">cancel</el-button>
        <el-button type="primary" @click="confirmClick">confirm</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import { reqUserInfo } from '@/api/acl/user';
import type { UserResponseData, Records, User } from '@/api/acl/user/type';

//默认页码
let pageNo = ref<number>(1);
// 一页展示几条数据
let pageSize = ref<number>(5);
// 用户总数个数
let total = ref<number>(0);
// 存储全部用户的数组
let userArr = ref<Records>([]);
// 定义响应式数据控制抽屉的显示与隐藏
let drawer = ref<boolean>(false);

// 组件挂载完毕
onMounted(() => {
  getHasUser();
})

// 获取全部已有的用户信息
const getHasUser = async (pager = 1) => {
  // 收集当前页码
  pageNo.value = pager;
  let result: UserResponseData = await reqUserInfo(pageNo.value, pageSize.value);
  if (result.code == 200) {
    total.value = result.data.total;
    userArr.value = result.data.records;
  }
}

// 分页器下拉菜单自定义事件的回调
const hander = () => {
  getHasUser();
}

// 添加用户按钮的回调
const addUser = () => {
  // 抽屉显示出来
  drawer.value = true
}

// 更新已有用户按钮问题
const updateUser = (row) => {

}


</script>

<style scoped lang='scss'>
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
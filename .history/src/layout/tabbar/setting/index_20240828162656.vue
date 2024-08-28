<template>
  <el-button size="small" icon="Refresh" circle @click="updateRefresh"></el-button>
  <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img src="../../../public/logo.png" style="width:24px;height:24px;margin:0 10px" />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <el-button>
      admin<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
export default {
  name: 'Setting'
}
</script>
<script setup lang='ts'>
// 获取骨架的小仓库
import useLayOutSettingStore from '@/store/modules/setting';
let LayOutSettingStore = useLayOutSettingStore();

// 刷新按钮点击回调
const updateRefresh = () => {
  LayOutSettingStore.refresh = !LayOutSettingStore.refresh;
}
</script>

<style scoped lang='scss'></style>

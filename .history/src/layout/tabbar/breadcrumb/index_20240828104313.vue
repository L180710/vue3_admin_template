<template>
  <el-button size="small" icon="Refresh" circle></el-button>
  <el-button size="small" icon="FullScreen" circle></el-button>
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

<script setup lang='ts'>

</script>

<style scoped lang='scss'></style>
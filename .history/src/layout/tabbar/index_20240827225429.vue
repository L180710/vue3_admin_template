<template>
  <div class="tabbar">
    <div class="tabbar_left">

    </div>
    <div class="tabbar_right">
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
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.tabbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 20px;

  .tabbar_left {
    display: flex;
    align-items: center;
  }

  .tabbar_right {
    display: flex;
    align-items: center;
  }
}
</style>
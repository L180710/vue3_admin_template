<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">左</el-col>
      <el-col :span="12" :xs="24">
        <el-form>

          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
        </el-form>

      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
  .login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;
  }
</style>
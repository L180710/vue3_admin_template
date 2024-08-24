<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">左</el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="default">登录</el-button>
          </el-form-item>
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

    .login_form {
      position: relative;
      top: 30vh;
      width: 80%;
      background: url("@/assets/images/login_form.png") no-repeat;
      background-size: cover;

      h1 {
        font-size: 40px;
        color: #fff;
      }

      h2 {
        color: #fff;
      }
    }
  }
</style>
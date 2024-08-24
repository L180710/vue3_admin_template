<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" :prefix-icon="Lock" show-password v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" type="primary" size="default" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
  import { User, Lock } from "@element-plus/icons-vue";
  import { reactive } from "vue";
  import { useRouter } from 'vue-router';
  import { ElNotification } from 'element-plus';
  // 引入用户相关的小仓库
  import useUserStore from '@/store/modules/user';
  let useStore = useUserStore();

  // 获取路由器
  let $router = useRouter();

  // 收集账号与密码
  let loginForm = reactive({
    username: 'admin',
    password: '111111'
  });

  // 登录按钮回调
  const login = async () => {
    // 点击登录按钮以后干什么
    // 通知仓库发登录请求
    // 请求成功 -> 首页展示数据的地方
    // 请求失败 -> 弹出登录失败信息
    try {
      // 保证登录成功
      await useStore.userLogin(loginForm);
      // 编程式导航到展示数据首页
      $router.push('/');
      // 登录成功提示信息
      ElNotification({
        type: 'success',
        message: '登录成功'
      });
    } catch (error) {
      // 登录失败提示信息
      ElNotification({ type: 'error', message: error.message })
    }
  }
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
      padding: 40px;
      width: 80%;
      background: url("@/assets/images/login_form.png") no-repeat;
      background-size: cover;

      h1 {
        font-size: 40px;
        color: #fff;
      }

      h2 {
        margin: 20px 0;
        font-size: 20px;
        color: #fff;
      }

      .login_btn {
        width: 100%;
      }
    }
  }
</style>
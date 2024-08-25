<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" :prefix-icon="Lock" show-password v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
  import { User, Lock } from "@element-plus/icons-vue";
  import { reactive, ref } from "vue";
  import { useRouter } from 'vue-router';
  import { ElNotification } from 'element-plus';
  import { getTime } from '@/utils/time';

  // 引入用户相关的小仓库
  import useUserStore from '@/store/modules/user';
  let useStore = useUserStore();
  // 获取 loginForms 组件
  let loginForms = ref('loginForm');
  // 获取路由器
  let loading = ref(false);
  let $router = useRouter();
  // 收集账号与密码
  let loginForm = reactive({
    username: 'admin',
    password: '111111'
  });
  // 登录按钮回调
  const login = async () => {
    // 保证全部表单项校验通过再发请求
    await loginForms.value.validate();

    // 加载效果：开始加载
    loading.value = true;

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
        title: `HI，${getTime()}好`,
        type: 'success',
        message: '欢迎回来',
      });
    } catch (error) {
      // 登录失败提示信息
      ElNotification({
        type: 'error',
        message: error.message
      })
    } finally {
      // 登录失败加载效果消失
      loading.value = false;
    }
  }

  // 自定义校验规则函数
  const validatorUserName = (rule: any, value: string, callback: any) => {
    console.log("rule", rule)
    console.log('value', value)
    console.log("callback", callback)
  }

  const validatorPassword = (rule: any, value: string, callback: any) => {

  }

  // 定义表单校验需要配置对象
  const rules = {
    username: [
      // { required: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'change' }
      { trigger: 'change', validator: validatorUserName }
    ],
    password: [
      // { required: true, min: 6, max: 15, message: '密码长度至少六位', trigger: 'change' }
      { trigger: 'change', validator: validatorPassword }
    ]
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
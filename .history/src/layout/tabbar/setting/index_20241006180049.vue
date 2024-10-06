<template>
  <el-button size="small" icon="Refresh" circle @click="updateRefresh"></el-button>
  <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>

  <el-popover placement="bottom" title="主题设置" :width="300" trigger="hover">
    <!-- 表单元素 -->
    <el-form>
      <el-form-item label="主题颜色">
        <el-color-picker v-model="color" size="small" show-alpha :predefine="predefineColors"></el-color-picker>
      </el-form-item>
      <el-form-item label="暗黑模式">
        <el-switch v-model="dark" size="small"></el-switch>
      </el-form-item>
    </el-form>
    <template #reference>
      <el-button size="small" icon="Setting" circle></el-button>
    </template>
  </el-popover>

  <img :src="userStore.avatar" style="width:24px;height:24px;margin:0 10px;border-radius:50%;" />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
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
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
// 获取用户相关小仓库
import useUserStore from '@/store/modules/user';
// 获取骨架的小仓库
import useLayOutSettingStore from '@/store/modules/setting';
let LayOutSettingStore = useLayOutSettingStore();
let userStore = useUserStore();
// 获取路由器对象
let $router = useRouter();
// 获取路由对象
let $route = useRoute();
// 收集开关的数据
let dark = ref<string>(false);


// 刷新按钮点击回调
const updateRefresh = () => {
  LayOutSettingStore.refresh = !LayOutSettingStore.refresh;
}
// 全屏按钮点击回调
const fullScreen = () => {
  // DOM 对象的一个属性：可以用来判断当前是不是全屏模式：true 为是，false 为不是
  let full = document.fullscreenElement;
  // 切换全屏模式
  if (!full) {
    // 文档根节点的方法 requestFullScreen, 实现全屏模式
    document.documentElement.requestFullscreen();
  } else {
    // 变为不是全屏模式->退出全屏模式
    document.exitFullscreen();
  }
}
// 退出登录点击回调
const logout = async () => {
  // 第一件事：需要向服务器发送请求[退出登录接口]
  // 第二件事：仓库当中关于用于相关的数据清空[token / username / avatar]
  // 第三件事：跳转到登录页面
  await userStore.userLogout();
  $router.push({ path: '/login', query: { redirect: $route.path } });
}

// 颜色组件
const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])
</script>

<style scoped lang='scss'></style>

<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <Logo></Logo>
      <!-- 展示菜单 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu class="menu" background-color="#001529" text-color="#Fff" :default-active="$route.path">
          <!-- 根据路由动态生成菜单 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <!--  -->
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示区域 -->
    <div class="layout_main" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <Main />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Layout'
}
</script>

<script setup lang='ts'>
// 获取路由对象
import { useRoute } from 'vue-router';
// 引入左侧菜单 logo 子组件
import Logo from './logo/index.vue';
//  引入菜单组件
import Menu from './menu/index.vue';
// 右侧内容展示区域
import Main from './main/index.vue';
// 引入顶部 tabbar 组件
import Tabbar from './tabbar/index.vue';
// 获取用户相关的小仓库
import useUserStore from '@/store/modules/user';
import useLayOutSettingStore from '@/store/modules/setting';
let userStore = useUserStore();
// 获取 layout 配置仓库
let LayOutSettingStore = useLayOutSettingStore();

// 获取路由对象
let $route = useRoute();
console.log("$store", $route.path)
</script>


<style scoped lang='scss'>
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    color: #fff;
    transition: all .3s;

    &.fold {
      width: $base-menu-min-width;
    }

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .menu {
        border-right: none;
      }
    }
  }

  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;

    &.fold {
      left: $base-menu-min-width;
      width: calc(100vw - $base-menu-min-width);
    }
  }

  .layout_main {
    position: absolute;
    overflow: auto;
    top: $base-tabbar-height;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    padding: 20px;
    background: green;
    transition: all .3s;

    &.fold {
      left: $base-menu-min-width;
      width: calc(100vw - $base-menu-min-width);
    }
  }
}
</style>

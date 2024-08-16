<template>
  <div>
    <h2>测试 axios 二次封装</h2>
  </div>
</template>

<script setup lang='ts'>
  import request from "@/utils/request";
  import { onMounted } from "vue";

  // 当你组件挂载完毕测试发一个请求
  onMounted(() => {
    request({
      url: "/user/login",
      method: "post",
      data: {
        username: "admin",
        password: "111111"
      }
    }).then(res => {
      console.log(res);
    })
  })
</script>

<style scoped lang="scss">
  div {
    h2 {
      color: $color
    }
  }
</style>
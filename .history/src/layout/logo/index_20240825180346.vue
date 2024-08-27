<template>
  <div class="logo">
    <img src="../../../public/logo.png" />
    <p>硅谷甄选运营平台</p>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.logo {
  display: flex;
  width: 100%;
  height: $base-menu-logo-height;
  align-items: center;
  padding: 20px;


  img {
    width: 40px;
    height: 40px;
  }

  p {
    font-size: $base-logo-title-fontsize;
    color: #fff;
  }
}
</style>
<template>
  <!-- svg: 图标外层容器节点，内部需要与 use 标签结合使用 -->
  <svg>
    <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
    <!-- use 标签 fill 属性可以设置图标的颜色 -->
    <use xlink:href="#icon-phone" fill="red"></use>
  </svg>
</template>

<script setup lang='ts'>

</script>

<style scoped>
</style>
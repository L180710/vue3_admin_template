<template>
  <el-form width="100px">
    <el-form-item label="SKU名称">
      <el-input placeholder></el-input>
    </el-form-item>
    <el-form-item label="价格（元）">
      <el-input placeholder="价格（元）" type="number"></el-input>
    </el-form-item>
    <el-form-item label="重量（g）">
      <el-input placeholder="重量（g）"></el-input>
    </el-form-item>
    <el-form-item label="SKU描述">
      <el-input placeholder="SKU描述"></el-input>
    </el-form-item>
    <el-form-item label="平台属性">
      <el-form :inline="true">
        <el-form-item label="内存">
          <el-select style="width:120px">
            <el-option label="123"></el-option>
            <el-option label="123"></el-option>
            <el-option label="123"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内存">
          <el-select style="width:120px">
            <el-option label="123"></el-option>
            <el-option label="123"></el-option>
            <el-option label="123"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内存">
          <el-select style="width:120px">
            <el-option label="123"></el-option>
            <el-option label="123"></el-option>
            <el-option label="123"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-form-item>
  </el-form>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'></style>
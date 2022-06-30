<template>
  <el-container>
    <el-aside>
      <app-menu />
    </el-aside>
    <el-container>
      <el-header>
        <app-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang='ts' setup>
import AppMenu from './AppMenu.vue'
import AppHeader from './AppHeader.vue'
</script>
<style lang='scss' scoped>
 .el-header, .el-footer {
    background-color: #B3C0D1;
  }

  .el-aside {
    background-color: $aside-bgcolor;
    width:auto;
  }

  .el-main {
    background-color: #E9EEF3;
  }

  .el-container {
    min-height: 100vh;
  }

</style>

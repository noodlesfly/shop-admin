<template>
  <div class="app-header">
    <div class="header-left">
      <el-icon
        :size="20"
        @click="$store.commit('toggleCollapse')"
      >
        <Histogram />
      </el-icon>
      <bread-crumb />
    </div>
    <div class="header-right">
      <user-info style="margin-right: 10px;" />
      <full-screen />
    </div>
  </div>
</template>
<script lang='ts' setup>
import BreadCrumb from './components/BreadCrumb.vue'
import FullScreen from './components/FullScreen.vue'
import UserInfo from './components/UserInfo.vue'
</script>
<style lang='scss' scoped>
.app-header {
    height:100%;
    display:flex;
    align-items: center;
    justify-content: space-between;

    .header-left {
      display: flex;
      align-items: center;
    }

    .header-right {
      display: flex;
      align-items: center;
    }
}

</style>

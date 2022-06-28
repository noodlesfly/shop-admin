<template>
  <div class="home-index">
    首页
    {{ store.state.count }}
    <el-button type="warning">
      Warning
    </el-button>
  </div>
</template>
<script lang='ts' setup>
import { useStore } from '../../store'
const store = useStore()
</script>
<style lang='scss' scoped></style>

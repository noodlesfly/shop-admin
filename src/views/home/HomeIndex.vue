<template>
  <div class="home-index">
    首页
    {{ store.state.count }}
    <login />
  </div>
</template>
<script lang='ts' setup>
import Login from '@/views/login/LoginIndex.vue'
import { useStore } from '../../store'
const store = useStore()
</script>
<style lang='scss' scoped></style>

<template>
  <div class="home-index">
    首页
    <ai-i v-model:page="data" />
    <app-editor />
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import AiI from './AiI.vue'
// const data = reactive({
//   a: '12'
// })
const data = ref<string>('')
</script>
<style lang='scss' scoped></style>

<template>
  <div class="login-index">
    登录
    <img
      :src="logo"
      alt=""
      srcset=""
    >
  </div>
</template>
<script lang='ts' setup>
import { getLogo } from '@/api/login'
import type { logoType } from '@/api/types/login'
import { onMounted, ref } from 'vue'
const logo = ref<logoType['logo']>('')
onMounted(() => {
  getLogo().then(data => {
    logo.value = data.logo
  })
})
</script>
<style lang='scss' scoped>
// .login-index {
//   // color: $primary
// }
</style>

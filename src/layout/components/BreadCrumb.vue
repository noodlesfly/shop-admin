<template>
  <div class="bread-crumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in routes"
        :key="item.path"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script lang='ts' setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
const router = useRouter()
const routes = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta.title)
})

</script>
<style lang='scss' scoped>
.bread-crumb {
    margin-left: 20px;
}
</style>

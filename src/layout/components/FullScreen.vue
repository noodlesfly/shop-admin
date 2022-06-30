<template>
  <div class="fuu-screen">
    <el-icon
      :size="20"
      @click="toggleFullScreen"
    >
      <FullScreen />
    </el-icon>
  </div>
</template>
<script lang='ts' setup>
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}

</script>
<style lang='scss' scoped></style>

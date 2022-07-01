<template>
  <div class="demo" />
  {{ page }}
  <el-button @click="handleClick">
    按钮
  </el-button>
</template>
<script lang='ts' setup>

const props = defineProps({
  page: {
    type: String,
    required: true
  }
})
console.log(props.page)
interface EmitTypes {
  (e: 'update:page', page:string): void
}
const emit = defineEmits<EmitTypes>()

const handleClick = () => {
  console.log('chufale')
  emit('update:page', '2222')
}
</script>
<style lang='scss' scoped></style>

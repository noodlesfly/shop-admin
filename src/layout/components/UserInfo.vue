<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ admin }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogout">
          用户退出
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang='ts' setup>
import { computed } from 'vue'
import { useStore } from '@/store'
import { ElMessage, ElMessageBox } from 'element-plus'
import { logout } from '@/api/login'
import { useRouter } from 'vue-router'
const store = useStore()

const admin = computed(() => {
  return (store.state.loginInfo as any)?.user_info.account
})
const router = useRouter()

const handleLogout = async () => {
  await ElMessageBox.confirm('您确定要退出吗？')
  await logout()
  ElMessage.success('退出成功')
  router.replace({
    name: 'login-index'
  })
  store.commit('setLoginInfo', null)
}
</script>
<style lang='scss' scoped></style>

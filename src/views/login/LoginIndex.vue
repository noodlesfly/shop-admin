<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      size="large"
      @submit.prevent="handleSubmit"
    >
      <div class="login-form__header">
        <img
          class="login-logo"
          src="@/assets/login_logo.jpg"
          alt="拉勾心选"
        >
      </div>
      <el-form-item prop="account">
        <el-input
          v-model="user.account"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="user.pwd"
          type="password"
          placeholder="请输入密码"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-lock" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="imgcode-wrap">
          <el-input
            v-model="user.imgcode"
            placeholder="请输入验证码"
          >
            <template #prefix>
              <i class="el-input__icon el-icon-key" />
            </template>
          </el-input>
          <img
            class="imgcode"
            @click="loadCaptcha"
            alt="验证码"
            :src="captchaSrc"
          >
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang='ts' setup>
import { FormInstance, FormRules, ElMessage } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'
import { getCaptcha, login } from '@/api/login'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

const rules = reactive<FormRules>({
  account: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入您的账号：'
    }
  ],
  pwd: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入您的密码：'
    }
  ],
  imgcode: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入您的验证码：'
    }
  ]
})

const user = reactive({
  account: '',
  pwd: '',
  imgcode: ''
})
const router = useRouter()
const store = useStore()

const captchaSrc = ref('')

const loading = ref(false)
const form = ref<FormInstance | null>(null)

const loadCaptcha = async () => {
  const data = await getCaptcha()
  captchaSrc.value = URL.createObjectURL(data)
}

onMounted(async () => {
  loadCaptcha()
})

const handleSubmit = async () => {
  const validate = form.value?.validate()
  if (!validate) return false
  console.log('验证成功')
  loading.value = true
  const data = await login(user).finally(() => {
    loading.value = false
  })
  store.commit('setLoginInfo', data)
  ElMessage.success('登录成功')
  let redirect = router.currentRoute.value.query.redirect || '/'
  if (typeof redirect !== 'string') {
    redirect = '/'
  }
  router.replace(redirect)
}
</script>
<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}

.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }
  .imgcode-wrap {
    display: flex;
    align-items: center;
    .imgcode {
      height: 37px;
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
</style>

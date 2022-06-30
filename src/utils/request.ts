import router from '@/router/index'
import { store } from '@/store'
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'

const baseURL = import.meta.env.MODE === 'production' ? import.meta.env.VITE_API_BASEURL : ''

const request = axios.create({
  baseURL
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  store.state.loginInfo && ((config.headers as any).Authorization = `Bearer ${(store.state.loginInfo as any).token}`)
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
let isRreshing:boolean = false
request.interceptors.response.use(function (response) {
  const status = response.data.status
  // 对响应数据做点什么
  if (!status || status === 200) {
    return response
  } else if (status === 410000) {
    if (!isRreshing) {
      isRreshing = true
      ElMessageBox.confirm('您的登录已过期，可取消停留此页面，或确认重新登录?', '过期提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消'
      }).then(() => {
        store.commit('setLoginInfo', null)
        router.push({
          name: 'login-index',
          query: {
            redirect: router.currentRoute.value.fullPath
          }
        })
      }).finally(() => {
        isRreshing = false
      })
    }

    return Promise.reject(response)
  } else {
    ElMessage.error(response.data.msg)
    return Promise.reject(response)
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
// axios实例默认不支持泛型，做一层包装
export default <T>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}

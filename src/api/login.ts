import request from '@/utils/request'
import type { ILoginResponse } from './types/login'

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/admin/captcha_pro',
    params: {
      stamp: Date.now()
    },
    responseType: 'blob'
  })
}

export const login = (data: {
  account: string,
  pwd: string,
  imgcode: number | string
}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/admin/login',
    data
  })
}

export const logout = () => {
  return request({
    method: 'GET',
    url: '/admin/setting/admin/logout'
  })
}

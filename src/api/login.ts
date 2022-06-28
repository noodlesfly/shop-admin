import request from '@/utils/request'
import type { logoType } from './types/login'

export const getLogo = () => {
  return request<logoType>({
    method: 'GET',
    url: '/admin/logo'
  })
}

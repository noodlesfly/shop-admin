import request from '@/utils/request'
import { logoType } from './types/login'

export const getLogo = () => {
  return request<logoType>({
    method: 'GET',
    url: '/logo'
  })
}

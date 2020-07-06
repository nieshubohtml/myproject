import { get } from '../utils/request'

// 根据id获取用户地址
export function getProductId(id) {
  return get(`/api/v1/admin/addresses/${id}`)
}

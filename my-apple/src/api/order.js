import { get, del } from '../utils/request'

// 根据参数获取数据列表
export function pro(params) {
  return get('/api/v1/admin/orders', params)
}

// 根据id获取单条记录
export function getProductId(id) {
  return get(`/api/v1/admin/orders/${id}`)
}

// 根据id删除
export function delById(id) {
  return del(`/api/v1/admin/orders/${id}`)
}

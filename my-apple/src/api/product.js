import { get, post, put, del } from '../utils/request'

// 根据参数获取数据列表
export function products(params) {
  return get('/api/v1/admin/products', params)
}

// 根据id获取单条记录
export function getProductById(id) {
  return get(`/api/v1/admin/products/${id}`)
}

// 新增
export function createOne(model) {
  return post('/api/v1/admin/products', model)
}

// 根据id修改
export function updateById(id, model) {
  return put(`/api/v1/admin/products/${id}`, model)
}

// 根据id删除
export function delById(id) {
  return del(`/api/v1/admin/products/${id}`)
}

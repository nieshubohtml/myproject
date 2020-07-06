import { get, del, post, put } from '../utils/request'

// 根据参数获取数据列表
export function pro(params) {
  return get('/api/v1/admin/users', params)
}

// 根据id获取单条记录,反引号才可以加${}
export function getProductId(id) {
  return get(`/api/v1/admin/users/${id}`)
}

// 新增
export function createOne(model) {
  return post('/api/v1/admin/users', model)
}

// 根据id修改
export function updateById(id, model) {
  return put(`/api/v1/admin/users/${id}`, model)
}

// 根据id删除
export function delById(id) {
  return del(`/api/v1/admin/users/${id}`)
}

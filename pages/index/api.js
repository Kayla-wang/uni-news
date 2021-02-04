import request from '../../common/request.js'
export function login(data) {
  return request({
    url: '/user/login',
    method: 'POST',
    data: data
  })
}
import { request } from './request'

export function getLogin (phone, password) {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      password
    }
  })
}

export function getLoginRefresh () {
  return request({
    url: '/login/refresh',
    params: {
    }
  })
}

export function getLoginStatus () {
  return request({
    url: '/login/status',
    params: {

    }
  })
}

export function getUseDetail (uid) {
  return request({
    url: '/user/detail',
    params: {
      uid
    }
  })
}

export function getUseSubcount (uid) {
  return request({
    url: '/user/subcount',
    params: {
      uid
    }
  })
}

export function getLogout () {
  return request({
    url: '/logout',
    params: {
    }
  })
}

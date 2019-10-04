import { request } from './request'

export function getRecommendMv () {
  return request({
    url: '/personalized/mv'
  })
}

export function getNewMv (limit) {
  return request({
    url: '/mv/first',
    params: {
      limit
    }
  })
}

export function getMvUrl (id) {
  return request({
    url: '/mv/url',
    params: {
      id
    }
  })
}

export function getMvDetail (mvid) {
  return request({
    url: '/mv/detail',
    params: {
      mvid
    }
  })
}
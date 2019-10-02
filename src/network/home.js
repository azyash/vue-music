import { request } from './request'

export function getBanner () {
  return request({
    url: '/banner'
  })
}

export function getRecommendSongList (limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getRecommendMv () {
  return request({
    url: '/personalized/mv'
  })
}

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

export function getTopList (idx) {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}

export function getSearch (keywords) {
  return request({
    url: '/search',
    params: {
      keywords
    }
  })
}





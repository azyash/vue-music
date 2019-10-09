import { request } from './request'

export function getSongList (id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getMusicUrl (id) {
  return request({
    url: '/song/url',
    params: {
      id
    }
  })
}

export function getMusicDetail (ids) {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}
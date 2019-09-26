import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://10.102.2.182:3000',
    timeout: 10000
  })
  return instance(config)
}